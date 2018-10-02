import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user={
    
   
  };
  constructor(private allService: AuthService) {

     


   }

  ngOnInit() {
  }

  submit(){
    this.allService.register(this.user);
    
  }

}
