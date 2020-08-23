import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public submitted: boolean;

 
  constructor(private service:CommonService) { }
  public signup: any = {
   lname:'',
    username: '',
    line1:'',
    line2:'',
    email:'',
    phone:'',
    city:'',
    state:'',
    zip:'',
    country:'',
    qualification:'',
    comment:''
  }
  ngOnInit(): void {
    
  }
  onSubmit(Signup: any) {
    this.submitted = true;
    if (Signup.invalid) {
      return;
    }
    var datas = {
      firstName: this.signup.username,
      lastName:this.signup.lname,
      email: this.signup.email,
      phoneNumber: this.signup.phone,
      address1:this.signup.line1,
      address2:this.signup.line2,
      city:this.signup.city,
      state:this.signup.state,
      zipCode:this.signup.zip,
      country:this.signup.country,
      qualification:this.signup.qualification,
      comments:this.signup.comment    
    }
    console.log('hello', datas)
    this.service.postresult('/api/users', datas).subscribe(res => {
      console.log('yes', res)
      
        window.alert('user added successfully');

        

      
      // else if (res.status == false) {
      //   alert(res.message);
      //   Signup.resetForm();
      // }
  })

}
}