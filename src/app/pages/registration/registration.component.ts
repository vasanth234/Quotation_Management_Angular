import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { IApiResponse, Register } from '../../Model/User';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  registerform:Register=new Register();
  userService=inject(UserService)

  setRole(role:string){
    this.registerform.role=role;
  }

  onSave(){
    this.userService.onRegister(this.registerform).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert("Registration Success");
        this.registerform=new Register();
      }
      else{
        alert(res.message);
      }
    })
  }

}
