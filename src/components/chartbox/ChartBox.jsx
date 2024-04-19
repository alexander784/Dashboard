import React from 'react';
import "./chartbox.scss"
import { Link } from 'react-router-dom';


const ChartBox = () => {
  return (
    <div className='chartBox'>
        <div className='boxInfo'></div>
        <div className='chartInfo'></div>
        <div className="title">
            <img src="/user.svg" alt="" />
            <span>Total Users</span>
        </div>
        <h1>11.238</h1>
        <Link to="/">View All</Link>
        <div className='chartInfo'>
            <div className="chart">
                {/* Chart container */}

                
            </div>
            <div className="texts">
                <span className='percentage'>45%</span>
                <span className='duration'>this month</span>

            </div>

        </div>
    </div>
  );
}

export default ChartBox;