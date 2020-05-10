import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {materialModules} from './app.material';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';
import { ChoreListComponent } from './chore-list/chore-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoreListComponent
  ],
  imports: [
    ...materialModules,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
