import {Component, OnInit} from '@angular/core';
import { ProductService } from '../service/productservice';
import { PhotoService } from '../service/photoservice';
import { Product } from '../domain/product';
import { BreadcrumbService } from 'src/app/breadcrumb.service';
import { Category } from '../domain/category';
import {CategoryService} from '../service/categoryservice';


@Component({
    selector: 'app-media-demo',
    templateUrl: './mediademo.component.html',
    styleUrls: ['../../../assets/demo/badges.scss']
})
export class MediaDemoComponent implements OnInit{
    categorys:Category[];
    products: Product[];

    images: any[];

    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    carouselResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    constructor(private breadcrumbService: BreadcrumbService,
                private productService: ProductService, private categoryService: CategoryService,private photoService: PhotoService) {
        this.breadcrumbService.setItems([
            { label: 'UI Kit' },
            { label: 'Media', routerLink: ['/uikit/media'] }
        ]);
    }

    ngOnInit() {
        this.productService.getProductsSmall().then(products => {
            this.products = products;
        });

        this.categoryService.getCategorys().then(data => this.categorys = data);

        this.photoService.getImages().then(images => {
            this.images = images;
        });
    }
}
