import { useEffect, useState } from 'react';
import Areas from '../components/Areas';
import Chart from '../components/Chart';
import { fetchPrefectures } from '../lib/api';

export default function IndexPage() {
  const [prefactures, setPrefactures] = useState([]);
  useEffect(() => {
    fetchPrefectures().then((data) => {
      setPrefactures(data);
    });
  }, []);
  return (
    <div>
      <h1>総人口推移グラフ</h1>
      <div>
        {prefactures.map((pref, index) => (
          <div key={index}>{pref.prefName}</div>
        ))}
      </div>
      <div>
        <Chart></Chart>
      </div>
    </div>
  );
}
