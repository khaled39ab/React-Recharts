import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialCharts = () => {
    const [phones, setPhones] = useState([]);
    useEffect( ()=>{
        axios('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            const phoneData = loadedData.map(phone => {
                const parts = phone.slug.split('-');
                const ph = {
                    name: parts[0],
                    value: parseInt(parts[1])
                }
                return ph;
            });
            setPhones(phoneData)
        });
    }, [])
    return (
        <BarChart height={400} width= {1000} data={phones}>
            <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey={'value'} fill="gray"></Bar>

        </BarChart>
    );
};

export default SpecialCharts;