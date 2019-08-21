import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  constructor() { }
  fileFormControl = new FormControl('', [
    Validators.required,
  ]);
  ngOnInit() {
  }
  onSubmit(file) {
  }
}
