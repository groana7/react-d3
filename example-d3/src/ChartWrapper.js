import { useRef, useState, useEffect } from 'react';
import D3Chart from './D3Chart';

const ChartWrapper = () => {
  // why do we need useRef? Why can't we just use chart?
  // can access it from anywhere in our component
  // has a .current  which contains a reference to the HTML element (the div) that we assigned this ref to
  // We're then passing this reference to our D3 code with setchart in useEffect
  // which lets us attach our D3 elements onto this div in our D3Chart.js file
  const chartArea = useRef(null);

  // setting state of chart
  // keep track of the visualization object that we're creating in our D3Chart.js file
  const [chart, setChart] = useState(null);

  // allow us to express side effects in our function components
  useEffect(() => {
    if (!chart) {
      setChart(new D3Chart(chartArea.current));
    }
  }, [chart]);

  return <div className="chart-area" ref={chartArea}></div>;
};

export default ChartWrapper;
