import { Component, OnInit, VERSION } from '@angular/core'; 
import { Router } from '@angular/router';
import { TransferService } from '../transfer.service';
 export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor(
    private router:Router,
    private service:TransferService
  ){
    this.router.navigate(['add'])

  }
ngOnInit(): void {
  this.Display_list = this.service.getAddDataList()
  console.log('d',this.Display_list)
}

ngDoCheck(){
  //  this.Display_list = this.service.getAddDataList()
  //  console.log('d',this.Display_list)
}

edit(i:any){
   this.service.index = i
   console.log("Index in app",i)
  this.router.navigate(['edit'])
}

Display_list = []

  
  add(){
   this.router.navigate(['add'])
  }
  edits(){
    this.router.navigate(['edit'])
   }

  delete(i:any){
   this.Display_list.splice(i,1)
  }
}




 

