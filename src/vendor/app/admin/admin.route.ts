import { Routes } from '@angular/router';

import { FieleRoute, FilesListRoute } from './';

let ADMIN_ROUTES = [
   FieleRoute,
   FilesListRoute
];

export const adminState: Routes = [{
    path: '',
    children: ADMIN_ROUTES
}];
