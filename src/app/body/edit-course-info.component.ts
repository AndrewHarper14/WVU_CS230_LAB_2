import { Component } from "@angular/core";
import { CourseInfo } from "../format/course-info.module";
import { CourseInfoService } from "../format/course-info.service";

@Component({
    selector: 'ecampus-edit-course-info',
    templateUrl: 'edit-course-info.component.html'
})

export class EditCourseInfoComponent {
    constructor(public CinfoService: CourseInfoService) {

    }

    onUpdateCourseInfo(data:CourseInfo) {
        console.log("You pressed a button");
        this.CinfoService.modifyCourseInfo(data).subscribe(data => {
            console.log("Updated your information");
        })

    }
}