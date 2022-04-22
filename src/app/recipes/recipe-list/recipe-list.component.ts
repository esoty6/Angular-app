import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Noodles", "Tasty Noodles",
      "https://organic24.pl/uploads/blog/main/177-Makaron-sojowy-dowiedz-sie-czy-jest-zdrowy-i-jakie-ma-wlasciwosci.jpg")

    ,new Recipe("Noodles", "Tasty Noodles",
      "https://organic24.pl/uploads/blog/main/177-Makaron-sojowy-dowiedz-sie-czy-jest-zdrowy-i-jakie-ma-wlasciwosci.jpg")

    ,new Recipe("Noodles", "Tasty Noodles",
      "https://organic24.pl/uploads/blog/main/177-Makaron-sojowy-dowiedz-sie-czy-jest-zdrowy-i-jakie-ma-wlasciwosci.jpg")

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
