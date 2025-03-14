import { Route } from '@angular/router';
<<<<<<< HEAD
import { UserListComponent } from './Components/Users/user-list/user-list.component';
import { HomePageComponent } from './Components/home-page/home-page.component'
import { ApartmentDetailsComponent } from './Components/apartment-details/apartment-details.component';
import { BuyHomesComponent } from './Components/buy-homes/buy-homes.component';
import { RentHomesComponent } from './Components/rent-homes/rent-homes.component';

export const routes: Route[] = [
  
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },  
  { path: 'user-list', component: UserListComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'apartment-details', component: ApartmentDetailsComponent },
  { path: 'buy-homes', component: BuyHomesComponent },
  { path: 'rent-homes', component: RentHomesComponent },
=======
import { LoginComponent } from './Components/LoginPage/login/login.component';
import { UserListComponent } from './Components/Users/user-list/user-list.component';

export const routes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent },
>>>>>>> 05c252d67367c7e9626d7a87bac2f0c0122f73b3

];
