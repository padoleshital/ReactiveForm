import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false; 

  //Minimum eight characters, at least one letter, one number and one special character:
  patternMedium: any = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$";
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fName: ['',Validators.required],
      lastname:['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,
                    Validators.minLength(6),
                    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      phone: ['',[Validators.required,Validators.pattern("[0-9 ]{12}")]],      
      city:['',Validators.required],
      state:['',Validators.required],
      DOB:['',Validators.required],
      gender:['',Validators.required]
    });
    
  }
  get f()
  {
    return this.userForm.controls;
  }
  onSubmit()
  {
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
    }

  }
}
