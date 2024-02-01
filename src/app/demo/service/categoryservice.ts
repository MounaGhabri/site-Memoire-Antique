import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Category } from '../domain/category';

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) {
     }
    getCategorys() {
       
     return this.http.get<any[]>('http://localhost:3333/categories/')
  .toPromise()
  .then(apiData => {
    // Parcourir les données et assigner à une variable Category
    const categories: Category[] = apiData.map(item => {
      const category: Category = {
        id: item.id,
          code:item.code,
        libelle: item.libelle,
        description: item.description,
        image: item.image,
        
        // Assignez d'autres attributs si nécessaire
      };
      return category;
    });

    return categories;
  });
    }
    getCategoryByLibelle(libelle: string): Promise<Category> {
      return this.http.get<any>('http://localhost:3333/categories/' + libelle)
        .toPromise()
        .then(apiData => {
          const category: Category = {
            id: apiData.id,
            code: apiData.code,
            libelle: apiData.libelle,
            description: apiData.description,
            image: apiData.image,
            // Assignez d'autres attributs si nécessaire
          };
          return category;
        });
    }

}

