import { User } from './../shared/data/users';
import { UserService } from './../shared/sevices/user.service';
import { Router } from '@angular/router';
import { Component, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit,AfterViewInit{
  user!: User;
  isLoggedIn = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private cdf: ChangeDetectorRef, private userService: UserService) {
  }
  ngOnInit(){
    this.userService.loggedInUser.subscribe(user=>{
      if(user?.name){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
    })

  }
  ngAfterViewInit(){

  }

  logout(){
    sessionStorage.removeItem('user');
    this.userService.isLoggedIn({});
    this.router.navigate(["/"]);
  }

}
