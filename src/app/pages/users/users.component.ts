import { Component, OnInit, inject } from '@angular/core';
import { Profile, User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userService =  inject(UserService);
  users:Profile[] = [];

  ngOnInit(): void {
    this.userService.getUsers().then(res => {
      this.users = res;
    });
  }

}
