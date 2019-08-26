import { HttpClient, HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbListModule,
  NbButtonModule, NbInputModule
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

import { FileUploaderService } from 'src/app/services/file-uploader.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';


@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    NbListModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbSidebarModule
  ],
  providers: [
    NbSidebarService,
    FileUploaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
