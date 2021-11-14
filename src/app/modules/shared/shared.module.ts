import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {SwiperModule} from "swiper/angular";
import {SplashComponent} from "./components/splash/splash.component";
import { ParallaxDirective } from './directives/parallax.directive';
import {CeoModalComponent} from "./components/ceo-modal/ceo-modal.component";


const SHARED_MODULE_LIST = [
  CommonModule,
  IonicModule,
  SwiperModule
];

const SHARED_COMPONENT_LIST = [
  SplashComponent,
  CeoModalComponent
];

const SHARED_DIRECTIVE_LIST = [
  ParallaxDirective
];


@NgModule({
  declarations: [
    ...SHARED_COMPONENT_LIST,
    ...SHARED_DIRECTIVE_LIST
  ],
  imports: [
    ...SHARED_MODULE_LIST
  ],
  exports: [
    ...SHARED_MODULE_LIST,
    ...SHARED_COMPONENT_LIST,
    ...SHARED_DIRECTIVE_LIST
  ]
})
export class SharedModule { }
