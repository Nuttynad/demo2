import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, PopoverController, MenuController } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/menu';
import { PopoverPage } from '../../pages/popover/popover';
/**
 * Generated class for the Bookmarks page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public appCtrl: App, 
  public menuCtrl: MenuController,
  public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bookmarks');
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
  
  openMenu() { //executes when the menu is tapped
    // this.appCtrl.getRootNav().setRoot(MenuPage);
    this.menuCtrl.open()
  }
}
