import { Component } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-forecast-chart',
  templateUrl: './forecast-chart.component.html',
  styleUrls: ['./forecast-chart.component.scss'],
})
export class ForecastChartComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'calls',
        pointBackgroundColor: 'transparent',
        pointBorderWidth: 1,
        fill: false,
        borderColor: '#68B24C',
        backgroundColor: '#68B24C',
      },
      {
        data: [53, 11, 43, 23, 89, 10, 11],
        label: 'chats',
        pointBackgroundColor: 'transparent',
        fill: false,
        borderColor: '#989898',
        backgroundColor: '#989898',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;
  public lineChartPlugins = [];
}
