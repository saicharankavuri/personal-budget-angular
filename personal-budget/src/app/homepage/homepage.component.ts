import { AfterViewInit, Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js/auto';
import { DataService } from '../data.service';


@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements AfterViewInit {

  public dataSource : any = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#800080',
                '#808080',
                '#a52a2a',
                '#5f9ea0',
                '#90EE90',
                '#964B00'
            ]
        }
    ],
    labels: []
  };  

  
  constructor(private dataService: DataService){
      
   }

  ngAfterViewInit(): void{
    this.dataService.fetchData().subscribe(res => {
      this.dataService.setData(res); 
      for (var k = 0; k < res.length; k++) {
        this.dataSource.datasets[0].data[k] = res[k].budget;
        this.dataSource.labels[k] = res[k].title;
      }
      this.createChart(); 
    });
  }  
  

  createChart() {
    var ctx = document.getElementById('myChart') as HTMLCanvasElement;
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
    myPieChart.destroy();
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: this.dataSource
  });
  }
}

