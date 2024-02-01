import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {BreadcrumbService} from '../../breadcrumb.service';
import {Product} from '../domain/product';
import {ProductService} from '../service/productservice';
import { NgForm } from '@angular/forms';
import {CategoryService} from '../service/categoryservice';
import { FormsModule } from '@angular/forms';
import { ListDemoComponent } from './listdemo.component';

@Component({
    templateUrl: './ajProduit.component.html',
    styleUrls: ['../../../assets/demo/badges.scss']
})
export class AjProduitComponent implements OnInit {

    p=new ListDemoComponent( this.productService,this.categoryService , this.breadcrumbService);  
  
    effacer() {
    throw new Error('Method not implemented.');
    }
    validerFormulaire(form: NgForm) {
    
      console.log(form.value);
    
    //  if (form.value.id != undefined) { // id existe dans la zone du texte 
        console.log("id non vide...");
        this.ajouterProduit(form.value);
     // } else {
      //  console.log("id vide...");
       // this.ajouterProduit(form.value);
    //   }
    
    }
      constructor(private productService :ProductService, private categoryService: CategoryService,private breadcrumbService: BreadcrumbService)
      {
      }
      ngOnInit(): void {
       
        this.productService.getProducts();
      }
     nouveauProduit=new Product();
     ///
     ajouterProduit(nouveau: Product) {
    
    
      this.productService.addProduit(nouveau).subscribe({
        next: (addedProduit: Product) => {
          console.log("Succès POST", addedProduit);
         // if (addedProduits && addedProduits.length > 0) {
          //  const addedProduit = addedProduits[0];
            this.p.products.push({
          //    id: addedProduit.id,
              code: addedProduit.code,
              designation: addedProduit.designation,
              prix: addedProduit.prix
            });
            console.log("Ajout d'un nouveau produit:" );
    
            alert("Produit ajouté avec succès");
        //  } else {
         //   console.log("Aucun produit ajouté ou ajout incorrect");
       //   }
        },
        error: err => {
          console.log("Erreur POST", err);
        }
      });
    
     }
    
    
   
     

   


}
