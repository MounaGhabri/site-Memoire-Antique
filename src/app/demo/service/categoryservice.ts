import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Category } from '../domain/category';

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) { }


    getCategorys() {
        return this.http.get<any>('assets/demo/data/categorys.json')
        .toPromise()
        .then(res => res.data as Category[])
        .then(data => data);
    }

  
}
