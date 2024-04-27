import "./barchartbox.scss";
import { BarChart, Bar, Tooltip,ResponsiveContainer } from 'recharts';



const BarChartBox = (props) => {

  const {title, color, dataKey, chartData} = props
  
  return (
    <div className="barChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.chartData}>
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

export default BarChartBox;