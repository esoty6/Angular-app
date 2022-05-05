import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Noodles", "Tasty Noodles",
      "https://organic24.pl/uploads/blog/main/177-Makaron-sojowy-dowiedz-sie-czy-jest-zdrowy-i-jakie-ma-wlasciwosci.jpg")

    ,new Recipe("Noodles 2", "Tasty Noodles",
      "https://organic24.pl/uploads/blog/main/177-Makaron-sojowy-dowiedz-sie-czy-jest-zdrowy-i-jakie-ma-wlasciwosci.jpg")

    ,new Recipe("Noodles 3", "Tasty Noodles",
      "https://organic24.pl/uploads/blog/main/177-Makaron-sojowy-dowiedz-sie-czy-jest-zdrowy-i-jakie-ma-wlasciwosci.jpg")

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    // @ts-ignore
    this.recipeWasSelected.emit(recipe);
  }

}
