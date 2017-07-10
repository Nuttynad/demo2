import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
// import { WorkExperienceProvider } from '../../providers/work-experience/work-experience';
import { workExp } from '../../workExpListTemp';
// import { workExperiences } from '../../workExpListTemp';


@IonicPage()
@Component({
  selector: 'page-workexperience',
  templateUrl: 'workexperience.html',
})
export class WorkExperiencePage {
  public today = new Date();
  current_iso: string;
  workExpList: any[]
  company: any
  date: string = new Date().toISOString();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController
  ) {
    this.current_iso =  this.today.toISOString();
    this.getAllWorkExp();
    console.log(this.company)
    console.log(this.workExpList)
  }

  gotWorkExp: boolean = false;

  getAllWorkExp() {
    let self = this;
    self.workExpList = workExp;

    if (self.workExpList.length > 0) {
      self.gotWorkExp = true
    } else {
      self.gotWorkExp = true
    }
    console.log(self.gotWorkExp)
  }

  addWorkExperience() {
    
    let prompt = this.alertCtrl.create({
      title: 'Work Experiences',
      message: 'Enter your Work Experiences!',
      inputs: [
      {
          name: 'Companyname',
          placeholder: 'Name of Company',
        },
        {
          name: 'EmploymentStartDate',
          placeholder: 'Employment start date',
          type: 'date'
        },
        {
          name: 'EmploymentEndDate',
          placeholder: 'Employment end date',
          type: 'date'
        },
        {
          name: 'Description',
          placeholder: 'Description of company'
        },
          {
          name: 'RecordStatus',
          placeholder: 'Record Status in company'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let workExpItem = {
              'Company': data.Companyname,
              'EmploymentStartDate': data.EmploymentStartDate,              
              'EmploymentEndDate': data.EmploymentEndDate,
              'RecordStatus': data.RecordStatus,
              'Description': data.Description,
              'LastUpdate' : this.today.toISOString()

            }

            this.workExpList.push(workExpItem);
            console.log(this.workExpList)
          }
        }
      ]

    });
    prompt.present();
    // let workExpItem = {}
    // workExp.push()
    // console.log("hello");
  }


  updateWorkExperience(work) {
    console.log('hi')
    // this.workexperienceprovider.updateWorkExperience(work).then(function(result){
    //   console.log("Successfully applied for updated")
    // })
      
     let prompt = this.alertCtrl.create({
      title: 'Work Experiences',
      message: 'Update your Work Experiences!',
      inputs: [
        {
          name: 'Companyname',
          placeholder: 'Name of Company'
        },
        {
          name: 'EmploymentStartDate',
          placeholder: '(DD/MM/YYY)',
          type: 'date'
        },
        {
          name: 'EmploymentEndDate',
          placeholder: '(DD/MM/YYY)',
          type: 'date'
        },
        {
          name: 'Description',
          placeholder: 'Description of company'
        },
          {
          name: 'RecordStatus',
          placeholder: 'Record Status in company'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let workExpItem = {
              'Company': data.Companyname,
              'EmploymentStartDate': data.EmploymentStartDate,              
              'EmploymentEndDate': data.EmploymentEndDate,
              'RecordStatus': data.RecordStatus,
              'Description': data.Description,
              'LastUpdate' : this.today.toISOString()
            }
             this.workExpList.push(workExpItem);
            let workExpList = this.workExpList.indexOf(work);
            if(workExpList > -1){
              this.workExpList[workExpList] = data;
              console.log('changed')
            }

            console.log(this.workExpList)
          }
        }
      ]

    });
    prompt.present();
  }

  deleteWorkExperience(work){
    console.log('this has been clicked');
    let index = this.workExpList.indexOf(work);
    if(index > -1){
      this.workExpList.splice(work, 1);
      console.log('this has been deleted?')
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Workexperience');
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
