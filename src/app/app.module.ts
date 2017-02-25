import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';

//import { DataGridModule, PanelModule, ButtonModule, DataTableModule, InputTextModule, GrowlModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    XLargeDirective
  ],
  imports: [
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    AppRoutingModule,
    //BrowserModule,
    //FormsModule,
    //ReactiveFormsModule,
    //HttpModule,
    //JsonpModule,
    //AppRoutingModule,
    //DataGridModule,
    //PanelModule,
    //ButtonModule,
    //DataTableModule,
    //InputTextModule,
    //GrowlModule
  ],
  bootstrap: [
    //AppComponent
  ]
})
export class AppModule { }

export { AppComponent } from './app.component';
