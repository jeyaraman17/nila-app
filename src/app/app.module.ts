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
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';

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
    MenubarModule,
    SidebarModule,
    MenuModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
