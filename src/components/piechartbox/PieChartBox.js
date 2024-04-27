import "./piechartbox.scss";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const data = [
    { name: 'Mobile', value: 400, color: "#0088FE" },
    { name: 'Group B', value: 300,color: "#00c49f" },
    { name: 'Group C', value: 300, color: "#FFBB2B"},
    { name: 'Group D', value: 200, color: "#FFBB42" },
  ];
//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const PieChartBox = () => {
  return (
    <div className='pieChartBox'>
        <h1>Leads By source</h1>
        <div className='piechart'>
        <ResponsiveContainer width="99%" height={300}>
           <PieChart>
            <Tooltip
            contentStyle={{background:"white", borderRadius:"5px"}} />
            <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            >
            {data.map((item) => (
                <Cell key={item.name} 
                fill={item.color} />
            ))}
            </Pie>
            
        </PieChart>
      </ResponsiveContainer>

        </div>

        <div className="options">
            {
                data.map((item) => (
                    <div className="option"
                        key={item.name}>
                        <div className="title">
                            <div className="dot" style={{backgroundColor:item.color}}>
                                <span>{item.name}</span>

                            </div>
                            <span>{item.value}</span>

                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default PieChartBox;