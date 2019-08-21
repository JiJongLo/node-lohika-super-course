import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FileUploaderComponent} from 'src/app/components/file-uploader/file-uploader.component';


const routes: Routes = [
  { path: 'file-uploader', component: FileUploaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
