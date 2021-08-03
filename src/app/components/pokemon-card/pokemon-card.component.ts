import { Component, Input } from '@angular/core';
import {
  Pokemon,
  getPokemonImage,
  getPokemonNumber,
} from '../../../models/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: [
    './pokemon-card.component.scss',
    '../../../static/styles/pokemon-types.scss',
  ],
})
export class PokemonCardComponent {
  @Input()
  public pokemon: Pokemon;

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;
}
