import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { sortCategoryWise } from '../utils/seperator';

ChartJS.register(ArcElement, Tooltip, Legend);


export function Chartss(props) {
//  console.log(props.exdata)
  // const [expdata ,] = useState(props.exdata);
  // const [totalexp , setTotalexp] = useState([]);
  let categories = ['Grocery', 'Vehicle ', 'Shopping', 'Travel', 'Food','Fun','Other'];
  const totalexp = sortCategoryWise(props.exdata , categories);
  // console.log(totalexp)
///////////////////////////////////////////////////////////////////////////
const data = {
  labels: ['Grocery', 'Vehicle', 'Shopping', 'Travel', 'Food', 'Fun', 'Other'],
  datasets: [
    {
      label: "Rs",
      data: totalexp,
      backgroundColor: [
        'rgba(11, 29, 120, 0.6)',   // Navy Blue
        'rgba(0, 69, 165, 0.6)',    // Royal Blue
        'rgba(0, 105, 192, 0.6)',   // Blue
        'rgba(0, 138, 197, 0.6)',   // Sky Blue
        'rgba(0, 169, 181, 0.6)',   // Teal Blue
        'rgba(0, 198, 152, 0.6)',   // Aqua
        'rgba(31, 224, 116, 0.6)',  // Mint Green
      ],
      borderColor: [
        'rgba(11, 29, 120, 1)',   // Navy Blue
        'rgba(0, 69, 165, 1)',    // Royal Blue
        'rgba(0, 105, 192, 1)',   // Blue
        'rgba(0, 138, 197, 1)',   // Sky Blue
        'rgba(0, 169, 181, 1)',   // Teal Blue
        'rgba(0, 198, 152, 1)',   // Aqua
        'rgba(31, 224, 116, 1)',  // Mint Green
      ],
      borderWidth: 2,
    },
  ],
  options: {
    plugins: {
      labels: {
        arc: false,
        percision: 1,
        fontSize: 20
      },
    },
  },
};


  //////////////////////////////////////////////////////////////////
  return <Doughnut className='w-full h-full' data={data} />;
}

