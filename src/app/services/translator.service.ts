import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
  
  public langs: string[] = [];

  constructor( private translator: TranslateService ) { 
    this.translator.setDefaultLang('es');
    this.translator.use('es');
    this.translator.addLangs(['es', 'en']);
    this.langs = this.translator.getLangs();
  }  

  changeLang( lang: string ) {
    this.translator.use(lang);
  }
}
