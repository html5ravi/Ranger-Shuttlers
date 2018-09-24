import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-court-share',
  templateUrl: './court-share.component.html',
  styleUrls: ['./court-share.component.css']
})

export class CourtShareComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  foods: Food[];
  
  constructor(private formBuilder: FormBuilder) {
   
    this.foods=[
      {value: 'ashok', viewValue: 'Ashok'},
      {value: 'guru', viewValue: 'Guru'},
      {value: 'ravi', viewValue: 'Ravi'},
      {value: 'raghav', viewValue: 'Raghav'}
    ];

   }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        when: ['', Validators.required],
        courtFee: ['', Validators.required],
        courtPaidBy: ['', Validators.required],
        shuttleCost: ['', Validators.required],
        shuttleTookBy: ['', Validators.required],
        extraHours:[''],
        whoPlayed:['',Validators.required],
        extraWhoPlayed:[''],
        extraCourtFee:['']
          // email: ['', [Validators.required, Validators.email]],
          // password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

// convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        console.log(this.registerForm.value)
    }

}
