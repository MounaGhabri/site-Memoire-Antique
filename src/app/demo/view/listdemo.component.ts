import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {BreadcrumbService} from '../../breadcrumb.service';
import {Product} from '../domain/product';
import {ProductService} from '../service/productservice';
import { NgForm } from '@angular/forms';
import {CategoryService} from '../service/categoryservice';
import { Category } from '../domain/category';
@Component({
    templateUrl: './listdemo.component.html',
    styleUrls: ['../../../assets/demo/badges.scss']
})
export class ListDemoComponent implements OnInit {

    products: Product[];
    c=new Category();

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

    sourceCities: any[];

    targetCities: any[];

    orderCities: any[];
    sortKey: any
afficherFormulaire: any;
produitCourant = new Product();
idAct: any ;



    constructor(private productService: ProductService,private categoryService: CategoryService, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'UI Kit' },
            { label: 'List', routerLink: ['/uikit/list'] }
        ]);
    }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.sourceCities = [
            {name: 'San Francisco', code: 'SF'},
            {name: 'London', code: 'LDN'},
            {name: 'Paris', code: 'PRS'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Berlin', code: 'BRL'},
            {name: 'Barcelona', code: 'BRC'},
            {name: 'Rome', code: 'RM'}];
        this.targetCities = [];

        this.orderCities = [
            {name: 'San Francisco', code: 'SF'},
            {name: 'London', code: 'LDN'},
            {name: 'Paris', code: 'PRS'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Berlin', code: 'BRL'},
            {name: 'Barcelona', code: 'BRC'},
            {name: 'Rome', code: 'RM'}];

        this.sortOptions = [
            {label: 'Prix décroissants', value: '!prix'},
            {label: 'Prix croissants', value: 'prix'}
        ];
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
    editProduct(product: any) {
        this.produitCourant = { ...product };
      }
    
    editer(product: Product) {
        this.afficherFormulaire = true;
        this.produitCourant.id = this.idAct=product.id;
        this.produitCourant.code = product.code;
        this.produitCourant.designation = product.designation;
        this.produitCourant.description = product.description;
        this.produitCourant.prix = product.prix;
        this.produitCourant.categorie = product.categorie;
        this.produitCourant.image = product.image;

      }
      validerFormulaire(form: NgForm) {
        console.log(form.value); 
        const p = new Product();
        p.id = this.idAct; 
        p.code = form.value.code;
        p.designation = form.value.designation;
        p.prix = form.value.prix;
        p.image = form.value.image;
        p.description = form.value.description;

        this.categoryService.getCategoryByLibelle(form.value.categorie).then(data => {
            this.c = data;
            console.log("mes details", this.c);
            p.categorie = this.c; 
            console.log("mes details2", p);
            
            //
            this.mettreAJour(p);

            this.afficherFormulaire = false;
        });
    }
      mettreAJour(nouveau: Product) {

        const ancien = this.products.find(p => p.id === nouveau.id);
        if (ancien) {
          console.log('ancien');
          console.log(ancien.categorie);
          const reponse: boolean = confirm(" Confirmez-vous la mise à jour ?" );
    
          if (reponse) {
           // this.http.put<Array<Produit>>(`http://localhost:3333/produits/${nouveau.id}`, nouveau)
           this.productService.updateProduit( nouveau)
    
              .subscribe({
                next: updatedProduit => {
                  console.log("Succès PUT");
                  ancien.id=nouveau.id;
                  ancien.code = nouveau.code;
                  ancien.designation = nouveau.designation;
                  ancien.prix = nouveau.prix;
               ancien.categorie=nouveau.categorie;
             //  console.log(ancien.category);
               ancien.image=nouveau.image;
              //    ancien.libelle=nouveau.libelle;
                  console.log('Mise à jour du produit:' + ancien.designation);
                  alert("Produit mis à jour avec succès")
                },
                error: err => {
                  console.log("Erreur PUT");
                }
              });
          } else {
            console.log("Mise à jour annulée");
           // 
          }
        }else{
        console.log("essai d'ajout");
      }
      }


      supprimerProduit(produit: Product) {
        const reponse: boolean = confirm("Voulez-vous supprimer le produit :" + produit.designation + " ?");
        if (reponse) {
          this.productService.deleteProduit(produit)
    
         // this.http.delete(`http://localhost:3333/produits/${produit.id}`)
            .subscribe({
              next: () => {
                console.log("Succès DELETE");
                this.products = this.products.filter(p => p.id !== produit.id);
                console.log("Suppression du produit avec l'ID: " + produit.id);
              },
              error: err => {
                console.log("Erreur DELETE");
              }
            });
        }
      }
      







}
