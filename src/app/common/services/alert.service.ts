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
      header: '🚫 目前不支援電腦&平板',
      message: '😀 此為專門為手機設計的頁面/App<br>請用手機開啟此頁面<br>(電腦&平板版本後續會推出)',
      backdropDismiss: false,
      cssClass: 'not-support'
    });
    return alertEl.present();
  }

  async presentAppNotAvailableAsync() {
    const alertEl = await this.alertController.create({
      header: '⚠️ 目前App還在審核中',
      message: '😀 目前App剛上傳至App Store<br>官方正在審核<br>請2,3周後再下載<br>敬請期待',
      cssClass: 'not-support',
      buttons: ['知道了']
    });
    return alertEl.present();
  }

}
