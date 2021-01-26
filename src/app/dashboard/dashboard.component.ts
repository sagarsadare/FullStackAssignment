import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }
  userData;
  skills=[]
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log('skills==>',JSON.parse(this.userData.SKILLS) );
    this.skills=JSON.parse(this.userData.SKILLS)

  }
  logout() {
    console.log('inside logout--->>>');
    if (confirm('Are you sure want to logout?')) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }

  }
}
