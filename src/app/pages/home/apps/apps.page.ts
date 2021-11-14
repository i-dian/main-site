import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../../common/services/alert.service";

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage implements OnInit {

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }
  appDownloadClicked() {
    this.alertService.presentAppNotAvailableAsync();

  }
}
