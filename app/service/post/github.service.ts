import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from '../../../node_modules/rxjs/Observable.d';
import 'rxjs/add/operator/map';

@Injectable()

export class GitHubService{
  private _baseUrl = "https://api.github.com/users/";

  constructor(private _http: Http){}

  getUsers(username){
    return this._http.get(this._baseUrl+username)
      .map(res => res.json());
  }
  getFollower(username){
    return this._http.get(this._baseUrl+username+"/followers")
      .map(res => res.json());
  }

}
