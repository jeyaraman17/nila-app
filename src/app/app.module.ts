import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Components } from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { Pages } from './pages';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [AppComponent, ...Components, ...Pages],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    ChartModule,
    HttpClientModule,
    ChipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
