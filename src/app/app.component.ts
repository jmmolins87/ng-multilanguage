import { Component } from '@angular/core';

import { TranslatorService } from './services/translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public langs: string[] = []

  constructor( private translator: TranslatorService ) {
    this.langs = this.translator.langs;
    this.translator.changeLang(this.langs[0]);
  }

  changeLang( lang: string ) {
    this.translator.changeLang(lang);
  }

}
