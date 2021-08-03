import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/Pokemon';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemons: Pokemon[] = [];
  constructor(private http: HttpClient) {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    this.http
      .get<any>(baseUrl)
      .pipe(
        map((value) => value.results),
        map((value: any) => {
          return from(value).pipe(mergeMap((v: any) => this.http.get(v.url)));
        }),
        mergeMap((value) => value)
      )
      .subscribe(
        (result: any) =>
          (this.pokemons[result.id] = {
            image: result.sprites.front_default,
            number: result.id,
            name: result.name,
            types: result.types.map((t: any) => t.type.name),
          })
      );
  }
}
