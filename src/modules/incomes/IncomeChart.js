import React, { Fragment } from 'react'
// import { LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line, ResponsiveContainer } from 'recharts'

import { XAxis,YAxis,Tooltip,AreaChart,Area ,CartesianGrid, ResponsiveContainer} from 'recharts'
import {data} from './mydata'

function IncomeChart() {
  return (
      <Fragment>
    
    <div className='container'>
          <div className='row' style={{background:"#e0ffdc47"}}>
            <div className='col-md-12'>
            <ResponsiveContainer width="95%" height={data.length*33}>
                  <AreaChart width={70} height={300} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                  </AreaChart>
            </ResponsiveContainer>


            </div>
          </div>
        </div>
           
    </Fragment>


  )
}

export default IncomeChart
