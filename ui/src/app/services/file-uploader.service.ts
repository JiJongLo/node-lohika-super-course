import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_BASE } from 'src/app/core/constants/API.constants';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  constructor(private http: HttpClient) { }

  uploadFile(fileInput: HTMLInputElement) {
    const file =  fileInput.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file);
    const params = new HttpParams()
      .set('name', file.name);
    return this.http.post(`${API_BASE}/file-upload`, formData, {
      params
    });
  }
}
