import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { AppRoutingModule } from './rutas/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ColorerDirective } from './directives/colorer.directive';
import {registerLocaleData} from '@angular/common';
import localeEs  from '@angular/common/locales/es';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AuthInterceptorInterceptor } from './services/auth-interceptor.interceptor';

registerLocaleData(localeEs,'es');

@NgModule({
  declarations: [
    AppComponent,
    ColorerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
       {
          provide:LOCALE_ID, useValue:'es'
       },
       {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptorInterceptor,
         multi: true
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
