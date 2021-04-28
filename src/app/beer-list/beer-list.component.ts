import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerService } from '../beer.service';
import { Beer } from '../beer';
import { Router } from '@angular/router'

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers: Observable<Beer[]>;
  quantity: any;

  constructor(private beerService: BeerService, private router: Router) { this.quantity = 1; }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.beers = this.beerService.getBeers();
  }
  
  deleteBeer(id : number) {
    this.beerService.deleteBeer(id).subscribe(
      data => { 
        console.log(data); 
        this.reloadData(); 
      },
      error => console.log(error)
    );
  }

  updateBeer(id : number) {
    this.router.navigate(['update', id]);
  }

  newQty: number;

  incrementQty(id: number, quantity: number){
    this.newQty = quantity + 1;
    this.beerService.incrementQty(id, this.newQty)
    .subscribe(
        data => {
          console.log(data);
          this.reloadData();
      },
      error => console.log(error)
    );
  }
  
  decrementQty(id: number, quantity: number){
    this.newQty = quantity - 1;
    this.beerService.decrementQty(id, quantity)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
}
