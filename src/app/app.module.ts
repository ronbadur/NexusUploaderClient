import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AboutComponent} from './components/about/about.component';
import {UploadsHistoryComponent} from './components/uploads_history/uploads-history.component';
import {UploadComponent} from './components/upload/upload.component';
import {UploadsHistoryService} from './services/uploads-history.service';
import {BuildToolOptionsComponent} from './components/build_tool_options/build-tool-options.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'uploadsHistory', component: UploadsHistoryComponent },
  { path: 'homepage', component: BuildToolOptionsComponent},
  { path: 'upload', component: UploadComponent },
  { path: '**', component: BuildToolOptionsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UploadComponent,
    UploadsHistoryComponent,
    BuildToolOptionsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UploadsHistoryService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
