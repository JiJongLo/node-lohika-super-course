import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { DestroyService } from 'src/app/core/services/destroy.service';

import { InfoSystemService } from 'src/app/services/info-system.service';

@Component({
  selector: 'app-info-system',
  templateUrl: './info-system.component.html',
  styleUrls: ['./info-system.component.scss']
})
export class InfoSystemComponent implements OnInit {

  constructor(private systemInfo: InfoSystemService, private destroyService: DestroyService) { }

  ngOnInit() {
    this.systemInfo.getInfoSystem().pipe(takeUntil(this.destroyService.onDestroy$)).subscribe();
  }

}
