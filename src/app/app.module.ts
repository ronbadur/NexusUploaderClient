import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AboutComponent} from './components/about/about.component';
import {UploadsHistoryComponent} from './components/uploads_history/uploads-history.component';
import {UploadComponent} from './components/upload/upload.component';
import {UploadsHistoryService} from './services/uploads-history.service';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'uploadsHistory', component: UploadsHistoryComponent },
  { path: '**', component: UploadComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UploadComponent,
    UploadsHistoryComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UploadsHistoryService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
