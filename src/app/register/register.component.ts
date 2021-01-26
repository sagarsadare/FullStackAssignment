import { Component, OnInit, ViewChild } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FileService } from "../services/file.service";
import { IDropdownSettings } from 'ng-multiselect-dropdown';
// const countryData: any = require('./countries.json')               
const countryData: any = require('./../shared/custom-dropdown/countries.json')
declare var require: any
const skillsData: any = require('./skills.json')
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dropdownList = [];
  countries;
  selectedItems = [];
  dropdownSettings = {};
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  search;
  modalSelectedteliCode='91';
  modalSelectedCountryCode='in';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fileService: FileService
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      CountryCode: ['91', Validators.required],
      Dob: ['', Validators.required],
      gender: ['male', Validators.required],
      skills: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.pattern('^(\\+?\d{1,6}[\s-])?(?!0+\s+,?$)\\d{6,12}\s*,?$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });



  }

  public settings = {};
  @ViewChild('multiSelect', { static: false }) multiSelect;
  ngOnInit() {
    this.dropdownList = skillsData.data;
    this.countries = countryData;
    this.selectedItems = [
      { id: 0, name: 'Acquisition skills' },
      { id: 1, name: 'Analytical ability' }
    ];

    this.settings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
      selectAllText: 'Check All',
      unSelectAllText: 'Uncheck All',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 152,
      itemsShowLimit: 3,
      searchPlaceholderText: 'Search Skill',
      noDataAvailablePlaceholderText: 'Data Not Found',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false
    };

    this.getIpAdress();
  }
  get f() { return this.registerForm.controls; }
  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  ipAddress;

  onSubmit(values) {
    this.submitted = true;
    console.log('inside register submit--->>>', values);

    this.fileService.register(this.registerForm.value,this.ipAddress)
        .pipe(first())
        .subscribe(
            data => {
              //   this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
              //   this.alertService.error(error);
                this.loading = false;
            });
  }
  getIpAdress() {
    this.fileService.getIPAddress().subscribe((res: any) => {
      console.log(' ip res------>>>', res);
      this.ipAddress = res.ip;
    })
  }

  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onItemSelect(item: any) {
    console.log(item);
  }
  public onDeSelect(item: any) {
    console.log(item);
  }

  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }
  modallinkClicked(value) {

  }
}
