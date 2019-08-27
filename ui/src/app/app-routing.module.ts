import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FileUploaderComponent} from 'src/app/components/file-uploader/file-uploader.component';
import { InfoSystemComponent } from 'src/app/components/info-system/info-system.component';


const routes: Routes = [
  { path: 'file-uploader', component: FileUploaderComponent },
  { path: 'info-system', component: InfoSystemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
