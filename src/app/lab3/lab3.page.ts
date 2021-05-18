import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular'
@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
})
export class Lab3Page implements OnInit {

  constructor(public loadingController:LoadingController) { }
  data: any=[];
  jsonUrl = 'https://api.jsonbin.io/b/60a38dc0c0079630636cfabd';
  loading: any;
  markGreen: boolean[] = new Array(999).fill(false); 
  showDetails: boolean[] = new Array(999).fill(false);
  number = 0;
  async load ()
  {
    this.loading = await this.loadingController.create(
      {
        spinner: "circles",
        message: "Pls wait"
      }
    )

    await this.loading.present();

    fetch(this.jsonUrl,{headers:{"secret-key":"$2b$10$hTeY.H4bHSgB0JWnyvO.jehwXnx4emzKOwAPoU1.xney22tvQs4x."}})
      .then(response => response.json())
      .then(
        json => 
        {
          this.data = json;
          this.loading.dismiss();
          this.getGreen();
          console.log(this.data);
        }
        
      )

  };

  setNumber(a:number){
    this.number = a;
  }

  getGreen(){
  for(let i = 0; i<this.data.length;i++)
    {
      if(this.data[i]["studquontity"] < this.number) this.markGreen[i] = true;
       else this.markGreen[i] = false
    }
  }
  ngOnInit() {  }
  
  getGreenColor(i:number){
    return this.markGreen[i] ? 'green' : '';
  }

  toggleDetails(i:number){
    if (this.showDetails[i])
    this.showDetails[i] = false
    else
    this.showDetails[i] = true;
  }
}
