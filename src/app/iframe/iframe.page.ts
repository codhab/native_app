import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.page.html',
  styleUrls: ['./iframe.page.scss'],
})
export class IframePage implements OnInit {

  url: any;

  constructor(private sanitizer: DomSanitizer, private platform: Platform) { }

  ngOnInit() {
    let url_param = this.platform.getQueryParam("url")
    url_param = url_param.replace("_", "/")
    url_param = environment.intranet_url + url_param
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url_param)
  }

}
