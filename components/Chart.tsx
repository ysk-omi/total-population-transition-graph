import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function Chart({ populations }) {
  const options = {
    title: {
      text: 'My chart',
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
    series: [
      {
        name: 'tokyo',
        data: [
          43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610, 142383, 171533, 165174,
          171533, 165174,
        ],
      },
      {
        name: 'osaka',
        data: [
          24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243, 31050, 30282, 38121, 36885, 33726,
          38121,
        ],
      },
    ],
  };

  const getOptions = () => {
    return options;
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={getOptions()}></HighchartsReact>
    </div>
  );
}
