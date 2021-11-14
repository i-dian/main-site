import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-ceo-modal',
  templateUrl: './ceo-modal.component.html',
  styleUrls: ['./ceo-modal.component.scss'],
})
export class CeoModalComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) {
  }

  closeIt() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
