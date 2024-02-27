import React from 'react';
import {PieChart,Pie} from 'recharts' 

const chart1 = () => {
  // Sample data for the pie chart
  const data = [
    { name: "India", value: 10000 },
    { name: "chaina", value: 15000 },
    { name: "usa", value: 8000 }
  ]

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <PieChart width={730} height={250}>
  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
    </div>
  );
};

export default chart1;
