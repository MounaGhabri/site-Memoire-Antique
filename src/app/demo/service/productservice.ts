import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../domain/product';

@Injectable()
export class ProductService {
  
  urlHote="http://localhost:3333/produits/";

  deleteProduit(produit: Product) {


    return this.http.request('delete', this.urlHote, { body: produit });
}


  updateProduit( nouveau: Product)
  {

 //return this.http.put(this.urlHote+idP,nouveau);
 return this.http.request('put', this.urlHote, { body: nouveau });
 }

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
    }

   // getProducts() {
    //    return this.http.get<any>('assets/demo/data/products.json')
      //  .toPromise()
      //  .then(res => res.data as Product[])
      //  .then(data => data);
 //   }




    getProducts() {
       
        return this.http.get<any[]>('http://localhost:3333/produits/')
     .toPromise()
     .then(apiData => {
       // Parcourir les données et assigner à une variable Category
       const products: Product[] = apiData.map(item => {
         const product: Product = {
           id: item.id,
          designation: item.designation,
           description: item.description,
           image: item.image,
           prix: item.prix,
           code:item.code,
         categorie:item.categorie
                        
          
           // Assignez d'autres attributs si nécessaire
         };
         return product;
       });

       return products;
    });
      }
  


    

    getProductsMixed() {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
        .toPromise()
        .then(res => res.data as Product[])
        .then(data => data);
    }

    addProduit(nouveau: Product)
    {
   return this.http.post<Product> (this.urlHote,nouveau);
   }



}
