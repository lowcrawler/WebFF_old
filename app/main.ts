// Imports for loading & configuring the in-memory web api
import { provide }    from '@angular/core';
import { XHRBackend } from '@angular/http';
//import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
//import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';
import { WebFieldForm } from './webff.component';

import {disableDeprecatedForms, provideForms} from '@angular/forms';

var appPromise = bootstrap(WebFieldForm, [
    ROUTER_PROVIDERS,
	disableDeprecatedForms(),
	provideForms()
//    LocalStorageService
  ])
  .catch(err => console.error(err));
//LocalStorageSubscriber(appPromise);
