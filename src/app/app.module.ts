import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AppContainerComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
