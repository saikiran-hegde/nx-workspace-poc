import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedUiModule } from '@nx-workspace-poc/shared-ui';

@NgModule({
  declarations: [ AppComponent],
  imports: [ BrowserModule, SharedUiModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
