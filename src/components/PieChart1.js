import React from 'react';
import { PieChart, Pie } from 'recharts'
import Piechartdata from './Jsondata/Piechart.json' 

const chart1 = (props) => {
  // Sample data for the pie chart
  const outerdata =  props.outer_data;
  const innerData = props.inner_data
  console.log("props",outerdata,innerData)
  return (
    <div className='JustifyContentCenter'>
      <h1 className='text-center'>sample chart</h1>
      {console.log("Piechartdata.outerdata",Piechartdata[innerData])}
      <PieChart width={730} height={250}>
        <Pie data={Piechartdata[outerdata]} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={Piechartdata[innerData]} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      </PieChart>
    </div>
  );
};

export default chart1;
