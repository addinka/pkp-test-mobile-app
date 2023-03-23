import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'https://dummyjson.com';
  imageUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  getPokemon(offset = 0) {
    return this.http
    .get(`${this.baseUrl}/products?offset=${offset}&limit=25`)
    .pipe(
      map(result => {
        return result ['products'];
      }),
      map(pokemons => {
        return pokemons.map((poke, index) => {
        
          return poke;
        });
      })
    )
  }

  getPokeImage(index) {
    return `${this.imageUrl}${index}.png`;
  }

  findPokemon(search) {
    return this.http.get(`${this.baseUrl}/products/${search}`).pipe(
      map(poke => {
        poke['title'] = poke['title'];
        return poke;
      })
    );
  }




  
  getBlogDetails(index) {
    return this.http.get(`${this.baseUrl}/products/${index}`)
	 .pipe(
      map(poke => {
   
        return poke;
      })
    );
  }

 

}
