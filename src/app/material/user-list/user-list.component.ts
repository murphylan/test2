import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Student } from 'src/app/student';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  students$: Observable<Student[]>

  ngOnInit(): void {
    this.students$ = this.userService.getLatestInventory();
  }

  doStuff(user: Student) {
    if ("my-selected1" === user.css) {
      user.css = "my-selected2";
      user.icon = "sentiment_very_satisfied";
    } else {
      user.css = "my-selected1";
      user.icon = "sentiment_very_dissatisfied";
    }
  }

  isChecked(user: Student): boolean {
    if ("my-selected1" === user.css) {
      return false;
    } else {
      return true;
    }
  }

}