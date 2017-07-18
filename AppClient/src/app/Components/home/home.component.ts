import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private loggedInUser;

  constructor(private auth: AuthService) {
    this.auth.handleAuthentication();
    
  }

  ngOnInit() {
    this.getUserInfo();
  }
  getUserInfo() {
    if (this.auth.isAuthenticated()) {
     // console.log("User information ::!!");
      
      this.loggedInUser=this.auth.getUser();
      
      console.log(this.loggedInUser);
      console.log("logged in user is :"+this.loggedInUser.name);
      console.log("logged in user is :"+this.loggedInUser.nickname);
    }
  }

}
