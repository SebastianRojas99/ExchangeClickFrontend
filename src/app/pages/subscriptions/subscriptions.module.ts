import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions.component';
import { ChangesubComponent } from "../../components/changesub/changesub.component";


@NgModule({
    declarations: [
        SubscriptionsComponent
    ],
    imports: [
        CommonModule,
        SubscriptionsRoutingModule,
        ChangesubComponent
    ]
})
export class SubscriptionsModule { }
