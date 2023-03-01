import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from '../../transfer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private service: TransferService,
    private router: Router
  ) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      first_name :new FormControl('',[Validators.required]),
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      company: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirm_password: ['', [Validators.required, Validators.minLength(5)]],
    });


    this.list = this.service.getAddDataList();
    console.log('list', this.list);


    this.index_value = this.service.getIndex();
    console.log('indexxxx', this.index_value);
    let mini = this.list[this.index_value];
    console.log('mini ', mini);


    this.editForm.controls['first_name'].patchValue(mini.first_name)
    this.editForm.controls['last_name'].setValue(mini.last_name)
    this.editForm.controls['email'].setValue(mini.email)
    this.editForm.controls['phone'].setValue(mini.phone)
    this.editForm.controls['company'].setValue(mini.company)
    this.editForm.controls['gender'].setValue(mini.gender)
    this.editForm.controls['dob'].setValue(mini.dob)
    this.editForm.controls['password'].setValue(mini.password)
    this.editForm.controls['confirm_password'].setValue(mini.confirm_password)
    // this.index_value = this.service.getIndex()

    // console.log('sucess',this.index_value)
  }

  ngDoCheck() {
    // this.list = this.service.getAddDataList();
    // console.log('list', this.list);
    // let mini = this.list[this.index_value];
    // console.log('mini ', mini);

    // this.index_value = this.service.getIndex();
    // console.log('indexxxx', this.index_value);


    // this.editForm.controls['first_name'].patchValue(mini.first_name)
    // this.editForm.controls['last_name'].setValue(mini.last_name)
    // this.editForm.controls['email'].setValue(mini.email)
    // this.editForm.controls['phone'].setValue(mini.phone)
    // this.editForm.controls['company'].setValue(mini.company)
    // this.editForm.controls['gender'].setValue(mini.gender)
    // this.editForm.controls['dob'].setValue(mini.dob)
    // this.editForm.controls['password'].setValue(mini.password)
    // this.editForm.controls['confirm_password'].setValue(mini.confirm_password)

  }
  list = [];
  index_value: number;

 

  editForm: FormGroup;

  Update() {
    let edit_form_data = {
      first_name: this.editForm.controls['first_name'].value,
      last_name: this.editForm.controls['last_name'].value,
      email: this.editForm.controls['email'].value,
      phone: this.editForm.controls['phone'].value,
      company: this.editForm.controls['company'].value,
      gender: this.editForm.controls['gender'].value,
      // date:JSON.stringify(this.addForm.controls['date'].value),
      dob: this.editForm.controls['dob'].value,
      password: this.editForm.controls['password'].value,
      confirm_password: this.editForm.controls['confirm_password'].value,
    };

    console.log('edit_form_data', edit_form_data);

    this.editForm.reset();
    this.router.navigate(['add']);
    console.log("in update",this.index_value)

    // let edit_list :any =[]
    // edit_list = edit_form_data
    this.service.list.splice(this.index_value,1,edit_form_data)
  }

  cancel() {
    this.editForm.reset();
  }
}
