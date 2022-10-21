import { useState } from 'react';
import Layout from '../components/Layout';
import Chart from '../components/Chart';
import { fetchPrefecturesList, fetchPopulation } from '../lib/api';
import Head from 'next/head';
import styles from '../styles/IndexPage.module.scss';
import Checkbox from '../components/Checkbox';

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
    <Layout>
      <Head>
        <title>人口推移グラフ</title>
      </Head>
      <div className={styles.areas}>
        {prefacturesList.map((pref, index) => (
          <div className={styles.area} key={index}>
            <Checkbox prefacture={pref} checked={checked[index]} onChange={togglePopuration}></Checkbox>
          </div>
        ))}
      </div>
      <div className={styles.chart}>
        {populations.length > 0 ? (
          <Chart prefacturesList={prefacturesList} populations={populations}></Chart>
        ) : (
          <div className={styles.chart__zero}>都道府県を選択してください。</div>
        )}
      </div>
    </Layout>
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
