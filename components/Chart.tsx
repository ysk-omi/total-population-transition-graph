import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';
import { Population } from '../types/Population';
import { Series } from '../types/Series';
import styles from '../styles/Chart.module.scss';

export default function Chart({ prefacturesList, populations }) {
  const [dataLabelList, setDataLabelList] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(0);
  const [options, setOptions] = useState({
    title: {
      text: '',
    },
    xAxis: {
      title: {
        text: '年',
      },
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    plotOptions: {
      series: {
        pointInterval: 5,
        pointStart: 1965,
      },
    },
    series: [],
  });

  /**
   * optionsの値をマージする
   * @param opt - 更新したい値のオブジェクト
   */
  const margeOptions = (opt: Object): void => {};

  // データのラベルを取得
  useEffect(() => {
    if (populations[0]) {
      const LabelList: String[] = [];
      populations[0].data.forEach((element) => {
        LabelList.push(element.label);
      });
      setDataLabelList(LabelList);
    }
  }, [populations]);

  // options.seriesの値を取得
  useEffect(() => {
    const series: Series[] = [];
    for (const p of populations) {
      let typeData: Population[] = p.data[selectedLabel].data;
      let prefData: Series = {
        name: prefacturesList[p.prefCode - 1].prefName,
        data: [],
      };

      for (const d of typeData) {
        prefData.data.push(d.value);
      }

      series.push(prefData);
    }
    const newSeries = {
      series: series,
    };
    const newOptions = { ...options, ...newSeries };
    setOptions(newOptions);
  }, [populations, selectedLabel, prefacturesList]);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{dataLabelList[selectedLabel]}</h2>
      <div className={styles.inner}>
        <HighchartsReact highcharts={Highcharts} options={options}></HighchartsReact>
      </div>
      <div className={styles.buttons}>
        {dataLabelList.map((name, index) => (
          <button
            className={styles.button}
            key={index}
            data-selected={selectedLabel === index}
            onClick={() => setSelectedLabel(index)}
          >
            {name}
          </button>
        ))}
      </div>
    </section>
  );
}
