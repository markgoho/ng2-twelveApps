import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';

import { Business } from './business';
import { Category } from './category';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  businesses: Business[];
  categories: Category[];
  appState: string;
  activeKey: string;
  
  activeCompany:string;
  activeCategory:string;
  activeYearsInBusiness:number;
  activeDescription:string;
  activePhone:string;
  activeEmail:string;
  activeStreetAddress:string;
  activeCity:string;
  activeState:string;
  activeZipcode:string;

  constructor (private firebaseService: FirebaseService) {  }

  ngOnInit() {
    this.firebaseService.getBusinesses()
      .subscribe(businesses => this.businesses = businesses);

    this.firebaseService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  changeState(state:string, key:any = null) {
    console.log(`Changing state to ${state}`);
    if (key) {
      console.log(`Changing key to ${key}`);
      this.activeKey = key;
    }
    this.appState = state;
  }

  filterCategory(category) {
    this.firebaseService.getBusinesses(category)
      .subscribe(businesses => this.businesses = businesses);
  }

  addBusiness(
    company:string,
    category:string,
    years_in_business:number,
    description:string,
    phone:string,
    email:string,
    street_address:string,
    city:string,
    state:string,
    zipcode:string
  ) {
    const created_at = new Date().toString();
    const newBusiness = {
      company,
      category,
      years_in_business,
      description,
      phone,
      email,
      street_address,
      city,
      state,
      zipcode,
      created_at
    };
    
    this.firebaseService.addBusiness(newBusiness);
    this.changeState('default');
  }

  showEdit(business:Business) {
    this.changeState('edit', business.$key);
    this.activeCompany = business.company;
    this.activeCategory = business.category;
    this.activeYearsInBusiness = business.years_in_business;
    this.activeDescription = business.description;
    this.activePhone = business.phone;
    this.activeEmail = business.email;
    this.activeStreetAddress = business.street_address;
    this.activeCity = business.city;
    this.activeState = business.state;
    this.activeZipcode = business.zipcode;
  }

  updateBusiness() {
    const updatedBusiness = {
      company: this.activeCompany, 
      category: this.activeCategory,
      years_in_business: this.activeYearsInBusiness,
      description: this.activeDescription,
      phone: this.activePhone,
      email: this.activeEmail,
      street_address: this.activeStreetAddress,
      city: this.activeCity,
      state: this.activeState,
      zipcode: this.activeZipcode,
    };
    this.firebaseService.updateBusiness(this.activeKey, updatedBusiness);
    this.changeState('default');
  }

  removeBusiness(key:string) {
    this.firebaseService.removeBusiness(key);
    this.changeState('default');
  }
}
