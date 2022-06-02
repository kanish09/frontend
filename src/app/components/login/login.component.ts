import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { Cookie } from 'ng2-cookies/ng2-cookies'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg = '';
  form = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.min(1000000000)]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
  }
  get phone() {
    return this.form.get('phone');
  }
  get password() {
    return this.form.get('password');
  }
  login(value: any) {
    let user = value.value;
    this.userService.login(user).subscribe((response: any) => {
      if (response.msg) {
        this.msg = response.msg;
        this.form.setErrors({ invalid: true });
      }
      else {
        Cookie.set('token', response.token);
        window.location.reload();
      }
    });
  }
}
