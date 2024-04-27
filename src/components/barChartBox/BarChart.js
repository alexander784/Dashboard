import { Tooltip } from "recharts";
import "./barchart.scss";

const {title, color, dataKey, chartData} = props



const BarChart = () => {
  return (
    <div className="barChart">
        <h1>{props.title}</h1>
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={props.chartData}>
          <Tooltip 
          contentStyle={{background:"#2a3447", borderRadius:"5px"}}
          labelStyle={{display:"none"}}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
        </div>

    </div>
  )
}

export default BarChart;