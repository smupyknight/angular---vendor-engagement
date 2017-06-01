import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarRoute } from '../app.route';

let LAYOUT_ROUTES = [ 
    navbarRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(LAYOUT_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule {}
