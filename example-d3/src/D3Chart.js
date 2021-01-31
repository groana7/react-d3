// this is the D3 class, will not extend from React.Component
import * as d3 from 'd3';

// dummy data
const data = [20, 12, 16, 25, 20];
const url = 'https://udemy-react-d3.firebaseio.com/ages.json';

export default class D3Chart {
  // regular classes (not extending) always include a constructor function
  // all our D3 code will go inside of the constructor
  // this means this code will only run once when the class gets initialized
  // where our svgs will go
  constructor(element) {
    const svg = d3
      .select(element)
      .append('svg')
        .attr('width', 500)
        .attr('height', 500);

    // this returns a promise
    d3.json(url).then((agesData) => {
      console.log(agesData)
      // add more than one shape to the screen at a timeby using a data join
      const rects = svg.selectAll('rect')
        .data(agesData);
  
      rects
        .enter()
        .append('rect')
          .attr('x', (obj, idx) => idx * 100)
          .attr('y', 50)
          .attr('width', 50)
          .attr('height', (obj) => obj.age * 10) // multiply by 10 to make it larger
          .attr('fill', (obj) => {
            return (obj.age > 10) ? 'red' : 'green'
          });
    })


    // messy solution because you can't keep track of which elem needs to update and when
    // data.forEach((elem, idx) => {
    //   svg.append("rect")
    //     .attr('x', idx * 100)
    //     .attr('y', 50)
    //     .attr('width', 50)
    //     .attr('height', elem)
    //     .attr('fill', 'grey')
    // })
  }
}
