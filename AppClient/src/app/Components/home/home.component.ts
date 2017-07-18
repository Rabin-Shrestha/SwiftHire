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
        

    
   // getUserInfo();

  }
  ngOnInit() {

    this.auth.handleAuthentication(); 
    this.loggedInUser=JSON.parse(localStorage.getItem('profile'));

    this.auth.loggedIn.subscribe(profile => {
      console.log("Profile fetched here");
       this.loggedInUser=(profile);
        console.log(this.loggedInUser);       
      }
    );  
  }
 
}
