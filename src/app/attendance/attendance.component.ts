
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent  {
  @ViewChild('lineChart') lineChart!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = this.lineChart.nativeElement.getContext('2d');
    const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['0','1/7', '8/7', '22/7', '29/7', '5/8', '12/8', '19/8','2/9','3/9','6/9','12/9','20/9'], // X-axis labels
        datasets: [{
          label: 'Attendance',
          data: [20, 50, 30, 80, 60, 35, 25,90,10,15,25,11,69], // Y-axis data points
          fill: false, 
          borderColor: 'purple', 
          tension: 0.1, 
          pointBackgroundColor: 'white',
          pointBorderColor: 'purple',
          pointHoverBackgroundColor: 'purple',
          pointHoverBorderColor: 'white'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  


}
