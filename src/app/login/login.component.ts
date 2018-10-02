import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login={

  };
  constructor(private allService: AuthService) { 

  }

  ngOnInit() {
  }

  verify(){
    this.allService.authorize(this.login);
    
  }
}
