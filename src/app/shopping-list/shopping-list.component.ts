import { Component, OnInit } from '@angular/core';
import { Igredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Igredient[] = [
    new Igredient('Spaghetti Noodle', 1),
    new Igredient('Tomatoes', 4)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
