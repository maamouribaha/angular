import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResidencesComponent } from './residences/residences.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { RegisterComponent } from './register/register.component';
import { AddresidenceComponent } from './addresidence/addresidence.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  {
    path: 'residences',
    component: ResidencesComponent,
    // children: [
    //   { path: 'wishList', component: WishListComponent },
    //   { path: 'productList', component: ProductComponent },
    // ],
  },
  { path: 'addR', component: AddresidenceComponent },
  { path: 'update/:idR', component: AddresidenceComponent },

  { path: 'residences/:id', component: ResidenceDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
