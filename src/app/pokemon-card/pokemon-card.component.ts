import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: [
    './pokemon-card.component.scss',
    '../../static/styles/pokemon-types.scss',
  ],
})
export class PokemonCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
