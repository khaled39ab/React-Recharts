import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const data = [
        {
          name: 'Page A',
          red: 4000,
          green: 2400,
          blue: 2400,
        },
        {
          name: 'Page B',
          red: 3000,
          green: 1398,
          blue: 2210,
        },
        {
          name: 'Page C',
          red: 2000,
          green: 9800,
          blue: 2290,
        },
        {
          name: 'Page D',
          red: 2780,
          green: 3908,
          blue: 2000,
        },
        {
          name: 'Page E',
          red: 1890,
          green: 4800,
          blue: 2181,
        },
        {
          name: 'Page F',
          red: 2390,
          green: 3800,
          blue: 2500,
        },
        {
          name: 'Page G',
          red: 3490,
          green: 4300,
          blue: 2100,
        },
      ];
    return (
      //creating simple line chart
        <LineChart height={300} width={700} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <Line dataKey={'red'} stroke='red'></Line>
          <Line dataKey={'green'} stroke= 'green'></Line>
          <Line dataKey={'blue'} stroke='blue'></Line>
          <XAxis dataKey={'name'}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
    );
};

export default LineCharts;