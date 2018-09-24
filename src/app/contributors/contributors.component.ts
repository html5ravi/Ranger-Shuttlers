import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
export interface peopleList {
  name: string;
  id:number;
}
@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})

export class ContributorsComponent implements OnInit {
  addPlayerForm: FormGroup;
  submitted = false;
  people: peopleList[];
  
  constructor(private formBuilder: FormBuilder) {
   
   this.people=[
       {id:1,name:"Ravi"},
       {id:2,name:"Raghav"},
       {id:3,name:"Ashok"},
       {id:4,name:"Guru"}
   ]

   }

  ngOnInit() {
      this.addPlayerForm = this.formBuilder.group({
        name: ['', Validators.required]
      });
  }

// convenience getter for easy access to form fields
    get f() { return this.addPlayerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.addPlayerForm.invalid) {
            return;
        }
        this.addPlayerForm.value.id ="rs"+1; 
        this.people.push(this.addPlayerForm.value);

        console.log(this.addPlayerForm.value)
    }

}
