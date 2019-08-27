import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    {
      name: 'File uploader',
      url: 'file-uploader'
    },
    {
      name: 'System info',
      url: 'info-system'
    }
  ];
}
