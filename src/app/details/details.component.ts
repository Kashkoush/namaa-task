import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  loading = false;
  user: any

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    let id = this.router.url.slice(9);
    // console.log(id);
    this.userService.details(id).subscribe(data => {
      // console.log(data);
      this.user = JSON.parse(data._body);
      // console.log(this.user);
      this.loading = false;
    })
  }

}
