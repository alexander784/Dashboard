import TopBox from "../../components/topbox/TopBox";
import "./home.scss";
import ChartBox from "../../components/chartbox/ChartBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";
// import { BarChart } from "recharts";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/piechartbox/PieChartBox";
import BigChartBox from "../../components/bigchartbox/BigChartBox";


const Home = () => {
  return (
    <div className='home'>
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2 ">
      <ChartBox {...chartBoxUser}/>
      </div>
      <div className="box box3">
      <ChartBox {...chartBoxProduct}/>
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
      <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
      <ChartBox {...chartBoxRevenue}/>
      </div>
      <div className="box box7">
        <BigChartBox /></div>
      <div className="box box8">
        <BarChartBox {...barChartBoxRevenue} /></div>
      <div className="box box9">
        <BarChartBox {...barChartBoxVisit} /></div>

    </div>
  )
}

export default Home;