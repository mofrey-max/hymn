import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  fontSize;

  ngOnInit() {
  }

  constructor(private cdr: ChangeDetectorRef) {}

  onChange(fontsize) {
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('style', `font-size: ${fontsize}rem`);
    this.cdr.detectChanges();
    console.log(body);
    // fontsize
  }

}
