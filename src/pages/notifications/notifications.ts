import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Notifications');
  }

  openPopover(myEvent) { //executes when the fabButton is tapped
    let popover = this.popoverCtrl.create(PopoverPage)

    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss((popoverData) => {
      console.log(popoverData)
    })
  }
}
