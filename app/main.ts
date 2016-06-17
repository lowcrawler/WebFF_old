// Imports for loading & configuring the in-memory web api
import { provide }    from '@angular/core';
import { XHRBackend } from '@angular/http';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
//import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';
import { WebFieldForm } from './webff.component';

var appPromise = bootstrap(WebFieldForm, [
    ROUTER_PROVIDERS,
//    LocalStorageService
  ]);
//LocalStorageSubscriber(appPromise);
