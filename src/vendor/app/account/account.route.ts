import { Routes } from '@angular/router';

import { IntroductionMailRoute } from './';

let ACCOUNT_ROUTES = [
   IntroductionMailRoute
];

export const accountState: Routes = [{
    path: '',
    children: ACCOUNT_ROUTES
}];
