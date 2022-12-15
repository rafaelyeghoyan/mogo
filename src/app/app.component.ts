import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AppComponent {
  title = 'MoGo';
  form = this.fb.group({
    email:['',[Validators.pattern(/^[a-z,0-9,\.]+@[a-z]+\.+[a-z]{2,4}$/),Validators.required]]
  })
  constructor(private fb:FormBuilder,private el:ElementRef){
  }
  resuestSubscribe(){
    alert("Your request has been sent successfully !!!")
  }
  dropdownOpen(){
    this.el.nativeElement.querySelector('.dropdown_menu').style.display = "block"
  }
  dropdownClose(){
    this.el.nativeElement.querySelector('.dropdown_menu').style.display = "none"
  }
}
