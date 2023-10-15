import React, { Fragment } from 'react';
import { Mydata } from './data/Mydatafile';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";



function Sellchart() {
  return (
    <Fragment>
    <ResponsiveContainer>
                    <BarChart 
                        width={600}
                        height={290}
                        data={Mydata}>
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="blue" />
                        <Bar dataKey="uv" fill="green" />
                        <Bar dataKey="amt" fill="red" />
                    </BarChart>
         </ResponsiveContainer>

    </Fragment>
  )
}

export default Sellchart
