import { LicenseDataService } from './../../services/license-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-license-detail',
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.scss']
})
export class LicenseDetailComponent implements OnInit {

  dataId$ = this.LicenseDataService.dataId$.getValue()

  constructor(
    private LicenseDataService: LicenseDataService
    ) { }

  ngOnInit(): void {
    console.log(this.dataId$);
  }
}
