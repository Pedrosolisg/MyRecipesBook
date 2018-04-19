import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    saveData(data: any[]) {
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.put('https://my-recipes-book-cedba.firebaseio.com/data.json',data, { headers: headers });
    }
}