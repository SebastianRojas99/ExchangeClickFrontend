import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { CreateUserComponent } from "../../components/create-user/create-user.component";


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        UserDetailRoutingModule,
    ]
})
export class UserDetailModule { }
