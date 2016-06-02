import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';
import { WebFieldForm } from './webff.component';

var appPromise = bootstrap(WebFieldForm, [ROUTER_PROVIDERS, LocalStorageService]);
LocalStorageSubscriber(appPromise);
