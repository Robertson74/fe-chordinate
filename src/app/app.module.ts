
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { materialModules } from './app.material';

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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
