import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ["Stable", "Critical", "Finished"];
  badProjectName = "test";

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectname': new FormControl(null, Validators.required, this.notGoodProjectName.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(this.statuses[0])
    });

    this.projectForm.valueChanges.subscribe(
      (val) => console.log(val)
    );
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    if (this.badProjectName === control.value){
      return {"badProjectName": true};
    }
  }

  notGoodProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if ('test' === control.value){
          resolve({"badProjectName": true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }

}
