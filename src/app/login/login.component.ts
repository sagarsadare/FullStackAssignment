import { Component, OnInit } from '@angular/core';
// import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FileService } from "../services/file.service";
// import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  processing: Boolean = false;
  error: Boolean = false;
  ipAddress;
  constructor(private router: Router, private _fileService: FileService, private fb: FormBuilder) {

    this.loginForm = fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });

  }

  ngOnInit() {
    this.getIpAdress()
  }



  onSubmitButtonClicked(values) {
    console.log('inside on submit values--->>', values);
    this.error = false;
    this.processing = false;
    if (this.loginForm.valid) {
      this.login(values);
    }
  }

  private login(values) {
    console.log('inside login');
    this.processing = true;
    let data = {
      ipAddress: this.ipAddress,
      logindata: values,
    }
    this._fileService.myLogin(data).subscribe(res => {
      console.log('res---->>>', res);
      if (res.status == 'success') {
        // this.toastr.success(res.message)
        this.handleLoginSuccess(res);
      } else {
        console.log('inside else');
        // this.toastr.error(res.message)
        this.handleLoginError(res);

      }

    });
  }

  private handleLoginSuccess(res) {
    console.log('inside handle success');
    this.processing = false;
    this.error = false;
    localStorage.setItem('Token', res.Token);
    localStorage.setItem('userData', JSON.stringify(res.userData[0]));
    this.router.navigate(['/dashboard']);
  }
  invalidCredentials = false
  private handleLoginError(res) {
    this.invalidCredentials = true;
    alert(res.message)
  }


  ngOnDestroy() {
    // console.log('Service destroy');
  }


  get registerFormControl() {
    return this.loginForm.controls;
  }


  getIpAdress() {
    this._fileService.getIPAddress().subscribe((res: any) => {
      console.log('ip res------>>>', res);
      this.ipAddress = res.ip;
    })
  }



}
