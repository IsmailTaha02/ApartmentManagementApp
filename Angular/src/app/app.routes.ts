import { Route } from '@angular/router';
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
]
