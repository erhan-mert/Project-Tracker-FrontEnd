import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DepartmentService} from "../services/department.service";
import {Department} from "../models/department";
import {Project} from "../models/project";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit{
  constructor(private builder: FormBuilder, private departmentService: DepartmentService) {

  }

  addProjectForm: FormGroup;
  departments: Department[];
  project: Project;

  ngOnInit(): void {
    this.addProjectForm = this.builder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      description: ['',[Validators.required]],
      departmentId: ['', [Validators.required]]
    });

    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  checkNameIsEmpty(): boolean | undefined {
    return this.addProjectForm.get('name')?.hasError('required') &&
      this.addProjectForm.get('name')?.dirty;
  }

  checkNameIsMinLengthThree():boolean | undefined{
    return this.addProjectForm.get('name')?.hasError('minlength');
  }

  checkDescriptionIsEmpty():boolean | undefined{
    return this.addProjectForm.get('description')?.hasError('required');
  }

  checkDepartmentIdIsEmpty():boolean | undefined{
    return this.addProjectForm.get('departmentId')?.hasError('required') &&
      this.addProjectForm.get('departmentId')?.touched;
  }

  addProject() {
    if(this.addProjectForm.valid) {
      this.project = this.addProjectForm.value;
      console.log('project added', this.project);
    }
  }

}
