import React from 'react';
import "./chartbox.scss"
import { Link } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';



type Props = {
    color:string;
    icon:string
    title:string
    dataKey:string
    number:number | String
    percentage:number
    chartbox:object


}
const ChartBox = (props) => {
  return (
    <div className='chartBox'>
        <div className='boxInfo'></div>
        <div className='chartInfo'></div>
        <div className="title">
            <img src={props.icon} alt="" />
            <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/">View All</Link>
        <div className='chartInfo'>
            <div className="chart">
                {/* Chart container */}

                <ResponsiveContainer width="99%" height="100%">
        <LineChart data={props.ChartData}>
            <Tooltip 
            contentStyle={{background:"transparent", border:"none"}}
            labelStyle={{display:"none"}} 
            position={{x: 10, y:50}}/>
          <Line type="monotone" dataKey={props.datakey}
           stroke={props.color} strokeWidth={2}
          dot={false} />
        </LineChart>
      </ResponsiveContainer>

                
            </div>
            <div className="texts">
                <span className='percentage' style={{color:props.percentage <0 ? "tomato" : "limegreen"}}>
                    {props.percentage}</span>
                <span className='duration'>this month</span>

            </div>

        </div>
    </div>
  );
}

export default ChartBox;