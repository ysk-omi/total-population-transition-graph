import { useEffect, useState } from 'react';
import Areas from '../components/Areas';
import Chart from '../components/Chart';
import { fetchPrefecturesList, fetchPopulation } from '../lib/api';

export default function IndexPage({ prefacturesList }) {
  const [populations, setPopulations] = useState([]);
  useEffect(() => {
    fetchPopulation(12).then((data) => {
      setPopulations([...populations, data]);
    });
  }, []);
  return (
    <div>
      <h1>総人口推移グラフ</h1>
      <div>
        {prefacturesList.map((pref, index) => (
          <div key={index}>{pref.prefName}</div>
        ))}
      </div>
      <div>
        <Chart populations={populations}></Chart>
      </div>
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
