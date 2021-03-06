import {Injectable} from '@angular/core';
import {AlertController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController
  ) {
  }

  async presentNoSupportDesktopAsync() {
    const alertEl = await this.alertController.create({
      header: 'ð« ç®åä¸æ¯æ´é»è¦&å¹³æ¿',
      message: 'ð æ­¤çºå°éçºææ©è¨­è¨çé é¢/App<br>è«ç¨ææ©éåæ­¤é é¢<br>(é»è¦&å¹³æ¿çæ¬å¾çºææ¨åº)',
      backdropDismiss: false,
      cssClass: 'not-support'
    });
    return alertEl.present();
  }

  async presentAppNotAvailableAsync() {
    const alertEl = await this.alertController.create({
      header: 'â ï¸ ç®åAppéå¨å¯©æ ¸ä¸­',
      message: 'ð ç®åAppåä¸å³è³App Store<br>å®æ¹æ­£å¨å¯©æ ¸<br>è«2,3å¨å¾åä¸è¼<br>æ¬è«æå¾',
      cssClass: 'not-support',
      buttons: ['ç¥éäº']
    });
    return alertEl.present();
  }

}
