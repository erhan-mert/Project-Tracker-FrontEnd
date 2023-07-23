import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {Project} from "../models/project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, AfterContentChecked{
  @Input('currentProject') project:Project;

  incompletedTaskCount: number | undefined;

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.incompletedTaskCount = this.project?.tasks?.filter(t => !t.isDone).length;
  }

}
