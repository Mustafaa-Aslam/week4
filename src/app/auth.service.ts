import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user=[];
  constructor() { }
  register(payload){
  this.user.push({id:payload.id,name:payload.name,email:payload.email,password:payload.password})
  console.log(this.user)
  console.log(payload);
  }
  
    authorize(payload){
      
        this.user.forEach(element => {
        if(this.user['email']== payload.email && this.user['password']==payload.password ){
          console.log(true);
          return true;
          
        }else{
        console.log("false")
        return false;
        }
      });
    }
}
