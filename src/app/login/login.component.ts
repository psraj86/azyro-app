import { UserService } from './../shared/sevices/user.service';
import {users} from './../shared/data/users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usersData=users;
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  errMsg='';
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private cdf: ChangeDetectorRef,
      private userService: UserService
  ) {

  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });


  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit


      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      const {username,password} = this.loginForm.value;
      const userFound = users.find(user=>user.username===username && user.password===password);
      if(userFound){
        this.loading = true;
        sessionStorage.setItem("user",JSON.stringify(userFound));
        this.userService.isLoggedIn(userFound);
        this.router.navigate(["/dashboard"]);
      }else{
        this.errMsg='Usename and password is not matched!';
        this.cdf.detectChanges();
      }

  }

}
