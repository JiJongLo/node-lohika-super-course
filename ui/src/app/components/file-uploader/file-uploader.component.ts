import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { FileUploaderService } from 'src/app/services/file-uploader.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  constructor(private fileUploader: FileUploaderService) { }
  fileFormControl = new FormControl('', [
    Validators.required,
  ]);
  ngOnInit() {
  }
  onSubmit(file) {
    this.fileUploader.uploadFile(file).subscribe();
  }
}
