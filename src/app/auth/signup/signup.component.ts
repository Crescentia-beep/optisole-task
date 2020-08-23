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
    firstName: '',
    lastName:'',    
    email:'',
    phoneNumber:'',
    address1:'',
    address2:'',
    city:'',
    state:'',
    zipCode:'',
    country:'',
    qualification:'',
    comments:''
  }

  // User id to which the details to be updated
  public userId = null;

  // All user result
  public userResult : JSON;
  ngOnInit(): void {
    this.loadUsers();
  }
  onSubmit(UserDetails: any) {
    this.submitted = true;
    if (UserDetails.invalid) {
      return;
    }
    if(this.userId){
      this.updateUser(this.signup)
    }
    else{
      this.addUser(this.signup)
    }
  }

  addUser(datas : object){
    this.service.post('/api/users/', datas).subscribe(res => {
      alert('User details added successfully')
    })
  }

  updateUser(data : object){
    if(!this.userId){
      alert('User id is not valid')
    }
    this.service.put('/api/users/' + this.userId, data).subscribe(res => {
      alert('User details updated successfully')
    })
  }

  getUserDetailsToUpdate(userId: String) {
    this.service.get('/api/users/'+userId).subscribe(res => {
      this.userId = userId;
      this.signup = res;
    })
  }

  deleteUser(userId: String) {
    this.service.delete('/api/users/'+userId).subscribe(res => {
      alert('User deleted successfully')
      this.loadUsers();
    })
  }

  loadUsers(){
    this.service.get('/api/users/').subscribe(res => {
      this.userResult = res;
    })
  }
}