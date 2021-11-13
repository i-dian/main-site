import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ModalService} from "../services/modal.service";

@Injectable({
  providedIn: 'root'
})
export class ShowSplashGuard implements CanActivate {
  constructor(
    private modalService: ModalService
  ) {
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    await this.modalService.presentSplashScreenAsync();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.modalService.dismissSplash();
    return true;
  }

}
