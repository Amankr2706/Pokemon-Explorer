import { PokemonExplorer, type Pokemon } from '@/components/pokemon-explorer'

export default async function Page() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
    next: { revalidate: 86400 },
  })
  if (!response.ok) throw new Error('Unable to load Pokémon')
  const data = await response.json()
  return <PokemonExplorer pokemons={data.results as Pokemon[]} />
}
