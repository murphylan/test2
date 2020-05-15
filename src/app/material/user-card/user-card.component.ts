import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor(private userService: UserService) { }

  students: Student[];

  ngOnInit(): void {
    this.userService.getLatestInventory().subscribe(
      data => {
        this.students = data;
      }
    )
  }

  doStuff(student: Student) {
    if ("my-selected1" === student.css) {
      student.css = "my-selected2";
      student.icon = "sentiment_very_satisfied";
    } else {
      student.css = "my-selected1";
      student.icon = "sentiment_very_dissatisfied";
    }
  }

}