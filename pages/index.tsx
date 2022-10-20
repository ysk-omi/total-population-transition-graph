import { useState } from 'react';
import Chart from '../components/Chart';
import { fetchPrefecturesList, fetchPopulation } from '../lib/api';

export default function IndexPage({ prefacturesList }) {
  const [checked, setChecked] = useState(Array(prefacturesList.length).fill(false));
  const [populations, setPopulations] = useState([]);

  /**
   * チェックボックスのトグル
   * @param index
   */
  const _toggleCheck = (index: number) => {
    const checkedClone = checked.concat();
    checkedClone[index] = !checkedClone[index];
    setChecked(checkedClone);
  };

  /**
   * 人口構成のトグル
   * @param prefCode
   */
  const togglePopuration = (prefCode: number) => {
    if (!checked[prefCode - 1]) {
      // すでにデータがあるか確認する
      const isFetched = populations.find((p) => {
        return p.prefCode === prefCode;
      });

      if (!isFetched) {
        fetchPopulation(prefCode).then((data) => {
          setPopulations([...populations, data]);
          // 取得が完了したらチェックを入れる
          _toggleCheck(prefCode - 1);
        });
      }
    } else {
      const clonePopulations = populations.concat();
      const newPopulations = clonePopulations.filter((p) => {
        return p.prefCode !== prefCode;
      });
      setPopulations(newPopulations);
      _toggleCheck(prefCode - 1);
    }
  };

  return (
    <div>
      <h1>人口推移グラフ</h1>
      <div>
        {prefacturesList.map((pref, index) => (
          <label key={index}>
            <input type='checkbox' checked={checked[index]} onChange={() => togglePopuration(pref.prefCode)} />
            <span>{pref.prefName}</span>
          </label>
        ))}
      </div>
      {populations.length > 0 && (
        <div>
          <Chart prefacturesList={prefacturesList} populations={populations}></Chart>
        </div>
      )}
    </div>
  );
}

export const getStaticProps = () => {
  return fetchPrefecturesList().then((data) => {
    return {
      props: {
        prefacturesList: data,
      },
    };
  });
};
