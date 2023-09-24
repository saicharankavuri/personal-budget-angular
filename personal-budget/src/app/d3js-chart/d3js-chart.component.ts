import { AfterViewInit, Component } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-d3js-chart',
  templateUrl: './d3js-chart.component.html',
  styleUrls: ['./d3js-chart.component.scss']
})
export class D3jsChartComponent implements AfterViewInit{
  
  constructor(private dataService: DataService){}

  //public myBudget: any[];
  ngAfterViewInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataService.fetchData().subscribe(data => {
      this.dataService.setData(data); 
      this.Chart_create(data); 
    });
  }

    Chart_create(data: any[]) {
       
        console.log(data);
    
        const width = 400;
        const height = 400;
        const radius = Math.min(width, height) / 2;
    
        const svg = d3.select("#chart")
          .append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", `translate(${width / 2},${height / 2})`);
    
          const titles = data.map((d: any) => d.title);

          // Define a color scale with a range of colors based on the titles
          const color = d3.scaleOrdinal()
            .domain(titles) // Set the domain based on unique titles
            .range(["#ffcd56", "#ff6384", "#36a2eb", "#fd6b19", "#000080", "#800080", "#808080", "#a52a2a", "#5f9ea0", "#90EE90"]);

    
        const pie = d3.pie()
          .value((d: any) => d.budget);
    
        const arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);
    
        const arcs = svg.selectAll("arc")
          .data(pie(data))
          .enter()
          .append("g");
    
        arcs.append("path")
          .attr("d", (d: any) => arc(d))
          .attr("fill", (d: any) => color(d.data.title) as string);        

    
        arcs.append("text")
          .attr("transform", (d: any) => `translate(${arc.centroid(d)})`)
          .attr("text-anchor", "middle")
          .text((d: any) => d.data.title);
    }

}


