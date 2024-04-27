import TopBox from "../../components/topbox/TopBox";
import "./home.scss";
import ChartBox from "../../components/chartbox/ChartBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";
// import { BarChart } from "recharts";
import BarChartBox from "../../components/barChartBox/BarChartBox";


const Home = () => {
  return (
    <div className='home'>
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2 ">
      <ChartBox {...chartBoxUser}/>
      </div>
      <div className="box box2">
      <ChartBox {...chartBoxProduct}/>
      </div>
      <div className="box box2">
      <ChartBox {...chartBoxRevenue}/>
      </div>
      <div className="box box2">
      <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">Box6</div>
      <div className="box box7">Box7</div>
      <div className="box box8">
        <BarChartBox {...barChartBoxRevenue} /></div>
      <div className="box box9">
        <BarChartBox {...barChartBoxVisit} /></div>

    </div>
  )
}

export default Home;