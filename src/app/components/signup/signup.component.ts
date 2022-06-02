import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg: any;
  form = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.min(1000000000)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required])
  })
  constructor(private userService: UserserviceService, private modalService: NgbModal) { }
  ngOnInit(): void {
  }
  get userName() {
    return this.form.get('userName');
  }
  get phone() {
    return this.form.get('phone');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
  signup(value: any) {
    let user = value.value;
    if (user.password == user.confirmPassword) {
      this.userService.signup(user).subscribe((response: any) => {
        if (response.msg == "Mobile no. already registered") {
          this.msg = response.msg;
          this.form.setErrors({ invalid: true });
        }
        else {
          this.modalService.dismissAll();
          this.modalService.open(LoginComponent);
        }
      });
    }
    else {
      this.msg = "Password not matched";
      this.form.setErrors({ invalid: true });
    }
  }
}
