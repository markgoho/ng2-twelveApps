import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
 
  private username:string;
  private clientId = '20caf8c24b91e5b523e1';
  private clientSecret = '03a5c40c176479e446787e0b65e1ad400a0743bc';
 
  constructor(private http: Http) {
    console.log('Github service ready.');
    this.username = 'markgoho';
  }

  getUser() {
    return this.http.get(`https://api.github.com/users/${this.username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
      .map(res => res.json());
  }

  getRepos() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
      .map(res => res.json());
  }

  updateUser(username:string) {
    this.username = username;
  }

}
