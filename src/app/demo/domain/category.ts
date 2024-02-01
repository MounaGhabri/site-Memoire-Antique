import { Product } from "./product";

export class Category{
    id?: number;
    code?: string;
    description?: string;
    libelle?: String;
    image?: string;
    Products?:Product[];
}
