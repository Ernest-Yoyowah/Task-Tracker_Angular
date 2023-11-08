import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent implements OnInit {
  @Input() task: any;

  constructor() {}

  ngOnInit(): void {}
}
