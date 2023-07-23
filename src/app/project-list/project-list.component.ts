import {Component, OnInit} from '@angular/core';
import {Project} from "../models/project";
import {projects} from "../models/mocks/projects.mock";
import {ProjectService} from "../services/project.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{
  searchKey: string;
  allProjects: Project[];
  projects: Project[];

  constructor(private projectService: ProjectService, private activeRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    //this value can be used by getProject method to filter data
    this.projectService.getProjects()
      .subscribe(data => {
        this.allProjects = data;
        this.activeRoute.params.subscribe(data=> {
          console.log(data['id']);
          this.projects = data['id'] != undefined ? this.allProjects.filter(p => p.departmentId ==data['id']) :
            this.projects = this.allProjects;
        })


      });
  }

}
