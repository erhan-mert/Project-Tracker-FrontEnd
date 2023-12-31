import {Component, Input} from '@angular/core';
import {Task} from "../models/task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input('tasksOfProject') tasks?: Task[];

}
