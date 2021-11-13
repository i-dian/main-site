import {Injectable} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {SplashComponent} from "../../modules/shared/components/splash/splash.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modalController: ModalController
  ) {
  }

  async presentSplashScreenAsync() {
    const modalEl = await this.modalController.create({
      component: SplashComponent,
      keyboardClose: true,
      id: 'splash'
    });
    await modalEl.present();
  }

  async dismissSplash() {
    console.log('dismiss Splash');
    this.modalController.dismiss(null, null, 'splash');
  }
}
