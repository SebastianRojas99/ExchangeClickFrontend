import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from "../../components/user-list/user-list.component";
import { CreateUserComponent } from "../../components/create-user/create-user.component";


@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        UserListComponent,
        CreateUserComponent
    ]
})
export class UsersModule { }
