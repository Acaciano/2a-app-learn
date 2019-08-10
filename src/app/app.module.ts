import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { TopComponent } from './top/top.component';
import { ProgressComponent } from './progress/progress.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { PhraseService } from './core/services/phrase.service';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    TopComponent,
    ProgressComponent,
    AttemptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PhraseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
