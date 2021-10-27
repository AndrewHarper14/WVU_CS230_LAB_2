import { Component, Injectable, OnInit } from "@angular/core";
import { CourseInfo } from "./course-info.module";
import { CourseInfoService } from "./course-info.service";

@Component ({
    selector: "ecampus-course-info",
    templateUrl: "course-info.component.html"
})
export class CourseInfoComponent implements OnInit{
    courseInfo: CourseInfo | undefined;
    
    constructor(private courseInfoService:CourseInfoService) {
    }
    ngOnInit(): void {
        console.log("Registering showUserInfo as a subscriber");
        this.showCourseInfo();

        // this.courseInfoService.modifyCourseInfo().subscribe(data => {
        //    console.log(data);
        // });
    }

    showCourseInfo() {
        this.courseInfoService.getCourseInfo().subscribe((data: CourseInfo) => {
            console.log(data);
            this.courseInfo = data;
        })
    }
}