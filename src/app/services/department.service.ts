import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Department} from "../models/department";
import {catchError, Observable, tap, throwError} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  url: string = 'https://localhost:7125/api/Departments';
  constructor(private httpClient: HttpClient, private userService: UserService) { }

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.url)
      .pipe(tap(data => console.log(data)),
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          return throwError(() => new Error(err.statusText))

        }));
  }

  addDepartment(department: Department): Observable<Department> {
    let option = {
      headers: new HttpHeaders({
        'Authentication': 'Bearer '+this.userService.token
      })
    }
    return this.httpClient.post<Department>(this.url, department, option)
      .pipe(tap(data=> console.log(data)),
        catchError((err:HttpErrorResponse) => {
          console.log(err);
          return throwError(() => new Error(err.statusText));

        }))
  }
}
