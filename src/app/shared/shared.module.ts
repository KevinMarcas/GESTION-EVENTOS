import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardEventsComponent } from './components/card-events/card-events.component';





@NgModule({
  declarations: [
    HeaderComponent,
    CarruselComponent,
    FooterComponent,
    CardEventsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    HeaderComponent,
    CarruselComponent,
    FooterComponent,
    CardEventsComponent
  ]
})
export class SharedModule { }
