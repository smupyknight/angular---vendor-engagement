import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationRef } from '@angular/core';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { HomeModule } from './home/home.module';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';

import { 
  LayoutRoutingModule,
  MainComponent,
  NavbarComponent
} from './layouts';

import { MailApiService } from "./account/introduction-mail/api/mail-api.service";
import { MockMailApiService } from "./account/introduction-mail/api/mock-mail-api.service";

import { BackendConfiguration, ConfigurationAPIService, CTBBackendService, MockConfigurationAPIBackend } from 'client-toolbox';


export let config: BackendConfiguration = {
    integrationServices: [],
    mockBackendServices: [
        { serviceName: MailApiService.VATBOX_SERVICE_NAME, serviceClass: MockMailApiService },
        { serviceName: ConfigurationAPIService.VATBOX_SERVICE_NAME, serviceClass: MockConfigurationAPIBackend }
    ]
};


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutRoutingModule,
    HomeModule,
    AccountModule,
    AdminModule
  ],
  providers: [
    CTBBackendService.GET_PROVIDERS(config, true)
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) { }
  hmrOnInit(store) {
    console.info('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
