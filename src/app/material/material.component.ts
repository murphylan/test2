import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  view_list: boolean = true;
  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.userService.addToInventory(data);
      }
    )
    // 获取当前的URL
    let currentpath = this.router.url;
    this.view_list = currentpath.indexOf('card') > 0 ? false : true;
  }

  changeIcon(view_list: boolean) {
    this.view_list = !view_list
    if (this.view_list) {
      this.router.navigate(['/main']);
    } else {
      this.router.navigate(['/main/card']);
    }
  }

}