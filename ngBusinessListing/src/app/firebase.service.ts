import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Business } from './business';
import { Category } from './category';

@Injectable()
export class FirebaseService {
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;
 
  
  constructor(private af: AngularFire) { }

  getBusinesses(category:string = null) {
    if (category !== null) {
      this.businesses = this.af.database.list('/businesses', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as FirebaseListObservable<Business[]>
    } else {
      this.businesses = this.af.database.list('/businesses') as FirebaseListObservable<Business[]>
    }
      return this.businesses;
  }

  getCategories() {
    this.categories = this.af.database.list('/categories') as FirebaseListObservable<Category[]>
    return this.categories;
  }

  addBusiness(business:Business) {
    return this.businesses.push(business);
  }

  updateBusiness(key:string, business:Business) {
    return this.businesses.update(key, business);
  }

  removeBusiness(key:string) {
    return this.businesses.remove(key);
  }

}
