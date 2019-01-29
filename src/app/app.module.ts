import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    InfiniteScrollModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
