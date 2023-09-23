import { AfterViewInit, Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

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
            ]
        }
    ],
    labels: []
  };  

  
  constructor(private http: HttpClient){
      
   }

  ngAfterViewInit(): void{
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    console.log(this);
    this.http.get('http://localhost:3000/budget', {headers: headers} )
    .subscribe((res: any) =>{
      console.log(res);
      for (var k = 0; k < res.myBudget.length; k++) {
        this.dataSource.datasets[0].data[k] = res.myBudget[k].budget;
        this.dataSource.labels[k] = res.myBudget[k].title;
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

