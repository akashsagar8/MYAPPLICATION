import React, { Fragment } from 'react'
import { ResponsiveContainer } from 'recharts'
import {data1} from './data/pi'
import {data2} from './data/pi2'
import { PieChart,Pie } from 'recharts';

function PiChart() {

    


  return (
    <Fragment>
        <ResponsiveContainer>

        <PieChart width={900} height={300}>
        <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={data2} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>



        </ResponsiveContainer>



        </Fragment>
  )
}

export default PiChart
