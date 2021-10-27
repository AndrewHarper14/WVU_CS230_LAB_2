import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CourseInfo } from "./course-info.module";

@Injectable({providedIn: 'root'})
export class CourseInfoService {
    private baseUrl:string = 'https://ecampus-app-6b2aa-default-rtdb.firebaseio.com/';
    private myCourseInfoEndpoint:string = 'course-info.json';
    constructor(private http: HttpClient) {

    }

    getCourseInfo() {
        return this.http.get<CourseInfo>(this.baseUrl + this.myCourseInfoEndpoint);
    }

    modifyCourseInfo(data:CourseInfo) {
        return this.http.put(this.baseUrl+this.myCourseInfoEndpoint,data);
    }
}