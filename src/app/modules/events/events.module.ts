import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    EventsPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
