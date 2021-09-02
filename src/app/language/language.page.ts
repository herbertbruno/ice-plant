import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(private translate: TranslateConfigService, private router: Router) { }
  ngOnInit() {

  }
  setLanguage(lang: string = 'en') {
    this.translate.setLanguage(lang);
    this.router.navigate(['/login']);

  }

}
