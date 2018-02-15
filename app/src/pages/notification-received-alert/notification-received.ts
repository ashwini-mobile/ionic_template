import { Component, ViewChild, NgZone } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {SlickCarouselComponent, SlickCarouselItem} from '../../components/slick-carousel/slick-carousel';
//slick carousel
import * as $ from 'jquery';
import 'slick-carousel/slick/slick';

@IonicPage()
@Component({
    selector: 'page-notification-received',
    templateUrl: 'notification-received.html',
})
export class NotificationReceivedPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad(): void {
      console.log('ionViewDidLoad OfficesAlertPage');
  }

  // dismiss
  dismiss(): void {
      this.viewCtrl.dismiss();
  }
}
