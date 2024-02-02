import Pokemon from "../models/pokemons";

export default class PokemonService {
  static async getPokemons(): Promise<Pokemon[]> {
    return await fetch("http://localhost:3001/pokemons")
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static async getPokemon(id: number): Promise<Pokemon | null> {
    return await fetch(`http://localhost:3001/pokemons/${id}`)
      .then((response) => response.json())
      .then((data) => (this.isEmpty(data) ? null : data))
      .catch((error) => this.handleError(error));
  }

  static async updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return await fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
      method: "PUT",
      body: JSON.stringify(pokemon),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static async deletePokemon(pokemon: Pokemon): Promise<{}> {
    return await fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static async addPokemon(pokemon: Pokemon): Promise<Pokemon> {
    delete pokemon.created;

    return await fetch(`http://localhost:3001/pokemons`, {
      method: "POST",
      body: JSON.stringify(pokemon),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static async searchPokemon(term: string): Promise<Pokemon[]> { 
    return await fetch(`http://localhost:3001/pokemons?q=${term}`)
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
    console.error(error);
  }
}