import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { DestroyService } from 'src/app/core/services/destroy.service';

import { FileUploaderService } from 'src/app/services/file-uploader.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  constructor(private fileUploader: FileUploaderService, private destroyService: DestroyService) { }
  filesList$ = new BehaviorSubject([]);
  fileFormControl = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit() {
    this.getAllFiles();
  }

  onSubmit(file) {
    this.fileUploader.uploadFile(file)
      .pipe(
        takeUntil(this.destroyService.onDestroy$),
        tap(() => this.getAllFiles())
      )
      .subscribe();
  }

  getAllFiles()  {
    this.fileUploader.getAllFiles()
      .pipe(takeUntil(this.destroyService.onDestroy$))
      .subscribe((files: string[]) => {
        this.filesList$.next([...files]);
      });
  }
}
