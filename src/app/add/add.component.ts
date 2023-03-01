import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService } from '../../transfer.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private service:TransferService
  ) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      company:['',[Validators.required]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(5)]],
      confirm_password:['',[Validators.required,Validators.minLength(5)]]
    })
  }
  addForm :FormGroup;


  register(){
    let form_data = {
      first_name:this.addForm.controls['first_name'].value,
      last_name:this.addForm.controls['last_name'].value,
      email:this.addForm.controls['email'].value,
      phone:this.addForm.controls['phone'].value,
      company:this.addForm.controls['company'].value,
      gender:this.addForm.controls['gender'].value,
      // date:JSON.stringify(this.addForm.controls['date'].value),
      dob:this.addForm.controls['dob'].value,
      password:this.addForm.controls['password'].value,
      confirm_password:this.addForm.controls['confirm_password'].value,
    }

    console.log("hi",form_data)
    this.service.list.push(form_data) 

    // const myJSON = JSON.stringify(obj);
    this.addForm.reset()

    // let  data = this.addForm.value
    // console.log(data)
    // let lists = []
    // lists.push(data)
    // console.log( data)
    // let list = []
    // list.push(data)
  }

  cancel(){
  this.addForm.reset()
  }

}