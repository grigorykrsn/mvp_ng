import { Component, OnInit } from '@angular/core';

interface Filter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forecast-info',
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss']
})
export class ForecastInfoComponent implements OnInit {
  callsAndChatsSelected = 'both';
  periodSelected = 'weekly';

  callsAndChats: Filter[] = [
    {value: 'calls', viewValue: 'Calls'},
    {value: 'chats', viewValue: 'Chats'},
    {value: 'both', viewValue: 'Calls and Chats'},
  ];
  period: Filter[] = [
    {value: 'daily', viewValue: 'Daily'},
    {value: 'weekly', viewValue: 'Weekly'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
