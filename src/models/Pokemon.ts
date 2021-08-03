export interface Pokemon {
  number: number;
  name: string;
  image: string;
  types: string[];
}

export function getPokemonImage(pokemon: Pokemon): string {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonNumber(
    pokemon
  )}.png
  `;
}

export function getPokemonNumber(pokemon: Pokemon): string {
  return leadingZero(pokemon.number);
}

function leadingZero(str: string | number, size = 3): string {
  let s = String(str);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }

  return s;
}
