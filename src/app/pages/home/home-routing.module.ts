import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {ShowSplashGuard} from "../../common/guards/show-splash.guard";

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [ShowSplashGuard],
    children: [
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule)
      },
      {
        path: 'story',
        loadChildren: () => import('./story/story.module').then(m => m.StoryPageModule)
      },
      {
        path: 'members',
        loadChildren: () => import('./members/members.module').then(m => m.MembersPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./apps/apps.module').then(m => m.AppsPageModule)
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
}
