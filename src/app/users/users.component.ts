import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  loading = false;
  users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.index().subscribe(data => {
      // console.log(data);
      this.users = JSON.parse(data._body);
      console.log(this.users);
      this.loading = false;
    })
  }

}
