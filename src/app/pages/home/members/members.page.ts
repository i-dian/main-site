import {Component, OnInit} from '@angular/core';
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {CeoModalComponent} from "../../../modules/shared/components/ceo-modal/ceo-modal.component";

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private ionRouterOutlet: IonRouterOutlet
  ) {
  }

  ngOnInit() {
  }

  async openCEOModalAsync() {
    const ceoModalEl = await this.modalController.create({
      component: CeoModalComponent,
      presentingElement: this.ionRouterOutlet.nativeEl,
      swipeToClose: true
    });
    await ceoModalEl.present();

  }
}
