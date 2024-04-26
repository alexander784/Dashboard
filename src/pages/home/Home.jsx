import TopBox from "../../components/topbox/TopBox";
import "./home.scss";
import ChartBox from "../../components/chartbox/ChartBox";
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";
import { BarChart } from "recharts";


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
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>

    </div>
  )
}

export default Home;