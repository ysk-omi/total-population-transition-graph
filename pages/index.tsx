import { useState } from 'react';
import Layout from '../components/Layout';
import Chart from '../components/Chart';
import { fetchPrefecturesList, fetchPopulation } from '../lib/api';
import Head from 'next/head';
import styles from '../styles/IndexPage.module.scss';
import Checkbox from '../components/Checkbox';
import { NextPage } from 'next';
import { Prefacture } from '../types/Prefacture';

type Props = {
  prefacturesList: Prefacture[];
};

const IndexPage: NextPage<Props> = ({ prefacturesList }: Props) => {
  //最後のコード番号を取得
  const lastCord = prefacturesList[prefacturesList.length - 1].prefCode;

  //最後のコード番号+1の配列を作る
  const [checked, setChecked] = useState(Array(lastCord + 1).fill(false));
  const [populations, setPopulations] = useState([]);
  const [isAreaOpen, setIsAreaOpen] = useState(false);

  /**
   * 都道府県選択ボタンをクリックした時の処理
   */
  const toggleArea = () => {
    setIsAreaOpen(!isAreaOpen);
  };

  /**
   * チェックボックスのトグル
   * @param index
   */
  const _toggleCheck = (index: number): void => {
    const checkedClone = checked.concat();
    checkedClone[index] = !checkedClone[index];
    setChecked(checkedClone);
  };

  /**
   * 人口構成のトグル
   * @param prefCode
   */
  const togglePopuration = (prefCode: number): void => {
    if (!checked[prefCode]) {
      // すでにデータがあるか確認する
      const isFetched = populations.find((p) => {
        return p.prefCode === prefCode;
      });

      if (!isFetched) {
        fetchPopulation(prefCode).then((data) => {
          setPopulations([...populations, data]);
          // 取得が完了したらチェックを入れる
          _toggleCheck(prefCode);
        });
      }
    } else {
      const clonePopulations = populations.concat();
      const newPopulations = clonePopulations.filter((p) => {
        return p.prefCode !== prefCode;
      });
      setPopulations(newPopulations);
      _toggleCheck(prefCode);
    }
  };

  return (
    <Layout>
      <Head>
        <title>人口推移グラフ</title>
      </Head>
      <button className={`${styles.areaButton} ${styles.areaButtonHeader}`} onClick={toggleArea} data-open={isAreaOpen}>
        {isAreaOpen ? 'グラフを表示' : '都道府県を選択'}
      </button>
      <section className={`${styles.section} ${styles.sectionArea}`} data-open={isAreaOpen}>
        <div className={styles.sectionInner}>
          <h2 className={styles.title}>都道府県</h2>
          <div className={styles.areas}>
            {prefacturesList.map((pref, index) => (
              <div className={styles.area} key={index}>
                <Checkbox prefacture={pref} checked={checked[pref.prefCode]} onChange={togglePopuration}></Checkbox>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        {populations.length > 0 ? (
          <Chart prefacturesList={prefacturesList} populations={populations}></Chart>
        ) : (
          <div className={styles.chart__zero}>
            <p>都道府県を選択してください。</p>
            <button className={styles.areaButton} onClick={toggleArea} data-open={isAreaOpen}>
              {isAreaOpen ? 'グラフを表示' : '都道府県を選択'}
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export const getStaticProps = () => {
  return fetchPrefecturesList().then((data) => {
    return {
      props: {
        prefacturesList: data,
      },
    };
  });
};

export default IndexPage;
