import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {BreadcrumbService} from '../../breadcrumb.service';
import {Product} from '../domain/product';
import {ProductService} from '../service/productservice';
import { NgForm } from '@angular/forms';
import {CategoryService} from '../service/categoryservice';
import { FormsModule } from '@angular/forms';
import { ListDemoComponent } from './listdemo.component';
import { Category } from '../domain/category';

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent {
  nouveauProduit=new Product();
  c=new Category();
  products: Product[];
  categorys: Category[];
    p=new ListDemoComponent( this.productService,this.categoryService , this.breadcrumbService);  

    constructor(private productService :ProductService, private categoryService: CategoryService,private breadcrumbService: BreadcrumbService) {   
      this.breadcrumbService.setItems([
        { label: 'UI Kit' },
        { label: 'List', routerLink: ['/uikit/list'] }
    ]);



    }
    validerFormulaire(form: NgForm) {
        console.log(form.value);
          const p1=new Product();

p1.description=form.value.description;
p1.designation=form.value.designation;
p1.image=form.value.image;
p1.prix=form.value.prix;

this.categoryService.getCategoryByLibelle(form.value.categorie).then(data => {
  this.c = data;
  console.log("mes details", this.c);
  p1.categorie = this.c; 
  console.log("mes details2", p1);
 
 this.ajouterProduit(p1);


});


        
      }
      ngOnInit(): void {
        this.productService.getProducts().then(data => this.products = data);
        this.categoryService.getCategorys().then(data => this.categorys = data);
      }
   //  nouveauProduit=new Product();
     ///
     ajouterProduit(nouveau: Product) {
    
    
      this.productService.addProduit(nouveau).subscribe({
        next: (addedProduit: Product) => {
          console.log("Succès POST", addedProduit);
         // if (addedProduits && addedProduits.length > 0) {
          //  const addedProduit = addedProduits[0];
            this.products.push({
          //    id: addedProduit.id,
              code: addedProduit.code,
              designation: addedProduit.designation,
              prix: addedProduit.prix,
              categorie:addedProduit.categorie,
              description:addedProduit.description,
              image:addedProduit.image
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
