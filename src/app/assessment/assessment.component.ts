import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CourseEvaluationService } from '../course-evaluation.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.css'
})
export class AssessmentComponent {
  courseData: any;
  totalStudents: number  
  courseAverageMark: number

  constructor(private http: HttpClient ,private courseEvaluationService:CourseEvaluationService) {
   
  }

  ngOnInit(): void {
    this.fetchCourseDetails();
  }

  fetchCourseDetails() {
    this.courseEvaluationService.getCourseDetails().subscribe(
      (data) => {
        this.courseData = data;
        this.totalStudents=data.totalStudents;
        this.courseAverageMark=data.averageMark
        this.prepareChartData();
        this.prepareChartOptions();
      },
      (error) => {
        console.error('Error fetching course details', error);
      }
    );
  }

  barChartData: any;
  barChartOptions: any;


  prepareChartData() {
    this.barChartData = {
      labels: this.courseData.assessmentProgress.map(item => item.type),
      datasets: [
        {
          label: 'Completed',
          backgroundColor: '#5cb85c',
          data: this.courseData.assessmentProgress.map(item => item.completed)
        },
        {
          label: 'Pending',
          backgroundColor: '#d9534f',
          data: this.courseData.assessmentProgress.map(item => item.pending)
        }
      ]
    };
  }

  prepareChartOptions() {
    this.barChartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#000' // Legend text color
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#000' // X-axis label color
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)' // X-axis grid line color
          }
        },
        y: {
          ticks: {
            color: '#000', // Y-axis label color
            beginAtZero: true, // Ensure the Y-axis starts from 0
            max: 100 // Maximum value is 100%
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)' // Y-axis grid line color
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false // Adjusts the size to fit the container
    };
  }
  

}
