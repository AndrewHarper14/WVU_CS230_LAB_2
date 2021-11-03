import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { CourseInfo } from "../format/course-info.module";

@Injectable({
    providedIn: 'root'
})

export class DatabaseService {
    items: Observable<CourseInfo []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<CourseInfo>('course-info').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: CourseInfo []) => {
            console.log("Data received");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}