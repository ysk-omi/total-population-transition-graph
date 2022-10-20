import Areas from '../components/Areas';
import Chart from '../components/Chart';

export default function IndexPage() {
  return (
    <div>
      <h1>総人口推移グラフ</h1>
      <div>
        <Areas></Areas>
      </div>
      <div>
        <Chart></Chart>
      </div>
    </div>
  );
}
