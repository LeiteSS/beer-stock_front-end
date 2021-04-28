import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBeerComponent } from "./create-beer/create-beer.component";
import { BeerListComponent } from "./beer-list/beer-list.component";
import { UpdateBeerComponent } from "./update-beer/update-beer.component";

const routes: Routes = [
  { path: '', redirectTo: 'beers', pathMatch: 'full' },
  { path: 'beers', component: BeerListComponent },
  { path: 'add', component: CreateBeerComponent },
  { path: 'update/:id', component: UpdateBeerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
