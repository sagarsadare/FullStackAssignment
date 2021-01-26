import { Component, OnInit } from '@angular/core';
declare var require: any
const countryData: any = require('./countries.json')
@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent implements OnInit {
  countries;
  search;
  constructor() { }

  ngOnInit() {
    this.countries = countryData;
  }

  selectedCountry;
  modalflagClicked;
  modalSelectedteliCode='91';
  modalSelectedCountryCode='in';
  modalSelectedCode='in';
  CountryName='india';
  modallinkClicked(value) {
    console.log('country data ==========>>',countryData);
    console.log('selected country--->>>',value.code);
    this.selectedCountry.emit(value)
    // this._commonService.loginSelectedCountry.next(value.code)
    this.modalflagClicked = false;
    this.modalSelectedCountryCode = value.CountriCode;
    this.modalSelectedteliCode = value.code;
    this.modalSelectedCode = value.CountriCode;
    this.CountryName=value.name
    // this.modalDropdown.nativeElement.classList.toggle("show", false);
  }

}
