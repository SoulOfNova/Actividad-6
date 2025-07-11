import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

export const routes: Routes = [
    {

        path: "",
        redirectTo: "/products",
        pathMatch:"full"
    },
    {
        path: "products",
        component: ProductListComponent
    },
    {

        path: "products/new",
        component: ProductFormComponent
    }
];
