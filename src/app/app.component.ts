import {Component} from '@angular/core';
import {environment} from "../environments/environment";
import {Capacitor} from "@capacitor/core";
import {AlertService} from "./common/services/alert.service";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private alertService: AlertService,
    private plt: Platform
  ) {
    AppComponent.injectMapsKey();

    if ('web' === Capacitor.getPlatform() && (!this.plt.is('mobile') || this.plt.is('tablet'))) {
      this.alertService.presentNoSupportDesktopAsync();
    }

  }


  private static injectMapsKey() {
    const key = environment.mapKey;
    const node = document.createElement('script');
    node.src = `https://maps.googleapis.com/maps/api/js?key=${key}&region=zh_TW&language=zh-TW`;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0]
      .appendChild(node);
  }

}
