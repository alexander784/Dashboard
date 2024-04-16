import TopBox from "../../components/topbox/TopBox";
import "./home.scss";
import ChartBox from "../../components/chartbox/ChartBox";


const Home = () => {
  return (
    <div className='home'>
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">ChartBox
      <ChartBox />
      </div>
      <div className="box box2">ChartBox
      <ChartBox />
      </div>
      <div className="box box2">ChartBox
      <ChartBox />
      </div>
      <div className="box box2">ChartBox
      <ChartBox />
      </div>
      <div className="box box6">Box6</div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>

    </div>
  )
}

export default Home;