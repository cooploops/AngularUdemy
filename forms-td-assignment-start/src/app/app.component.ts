import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSub = 'Advanced';
  @ViewChild('form') practiceForm: NgForm;
  submitted = false;

  data = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    console.log(this.practiceForm);

    this.submitted = true;
    this.data.email = this.practiceForm.value.email;
    this.data.subscription = this.practiceForm.value.Subscriptions;
    this.data.password = this.practiceForm.value.password;

    this.practiceForm.reset();
  }

}
