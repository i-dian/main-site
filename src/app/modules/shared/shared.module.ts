import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {SwiperModule} from "swiper/angular";
import {SplashComponent} from "./components/splash/splash.component";


const SHARED_MODULE_LIST = [
  CommonModule,
  IonicModule,
  SwiperModule
];

const SHARED_COMPONENT_LIST = [
  SplashComponent
];


@NgModule({
  declarations: [
    ...SHARED_COMPONENT_LIST
  ],
  imports: [
    ...SHARED_MODULE_LIST
  ],
  exports: [
    ...SHARED_MODULE_LIST,
    ...SHARED_COMPONENT_LIST

  ]
})
export class SharedModule { }
