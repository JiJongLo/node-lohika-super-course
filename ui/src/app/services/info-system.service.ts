import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE } from '../core/constants/API.constants';

@Injectable({
  providedIn: 'root'
})
export class InfoSystemService {
  path = `${API_BASE}/system-info`;
  constructor(private http: HttpClient) { }

  getInfoSystem(): any {
    return this.http.get(this.path);
  }
}
