import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const AreaCharts = () => {
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
        <AreaChart height={'400'} width={'800'} data={data} >
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <Area dataKey={'red'} stroke='red' opacity={1} fill="red"></Area>
            <Area dataKey={'green'} stroke='green' opacity={1} fill={'green'}></Area>
            <Area dataKey={'blue'} stroke='blue' opacity={1} fill={'blue'}></Area>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </AreaChart>
    );
};

export default AreaCharts;