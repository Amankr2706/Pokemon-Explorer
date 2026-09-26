import Link from 'next/link'
import { ArrowLeft, Ruler, Scale } from 'lucide-react'

async function getPokemon(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    next: { revalidate: 86400 },
  })
  if (!response.ok) return null
  return response.json()
}

export default async function PokemonPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params
  const pokemon = await getPokemon(name)
  if (!pokemon)
    return (
      <main className="grid min-h-screen place-items-center bg-[#f7f5f0] font-serif text-3xl text-[#16232e] dark:bg-[#0f1b2b] dark:text-[#eaf0f6]">
        Pokémon not found
      </main>
    )
  const artwork = pokemon.sprites.other['official-artwork'].front_default
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#16232e] transition-colors dark:bg-[#0f1b2b] dark:text-[#eaf0f6]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-[#5f6b78] dark:text-[#b7c4d3]"
        >
          <ArrowLeft size={17} /> Back to collection
        </Link>
        <span className="font-serif text-xl font-bold">Pokémon Explorer</span>
        <span className="text-xs font-bold tracking-[0.16em] text-[#8b96a3] uppercase dark:text-[#b7c4d3]">
          No. {String(pokemon.id).padStart(3, '0')}
        </span>
      </header>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pt-10 pb-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 lg:pt-20">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-10 rounded-full bg-[#dbe7f0]" />
          <div className="relative aspect-square rounded-[45%_55%_48%_52%] bg-[#e7f0f7] p-10">
            <img
              src={artwork}
              alt={pokemon.name}
              className="size-full object-contain drop-shadow-[0_30px_22px_rgba(39,70,50,0.2)]"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {pokemon.types.map((item: { type: { name: string } }) => (
              <span
                key={item.type.name}
                className="rounded-full bg-[#dfeadd] px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#2f4a63] uppercase"
              >
                {item.type.name}
              </span>
            ))}
          </div>
          <h1 className="mt-5 font-serif text-7xl tracking-[-0.06em] capitalize sm:text-8xl">
            {pokemon.name}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#5f6b78] dark:text-[#b7c4d3]">
            A fascinating specimen from the Kanto region. Study its habits, abilities, and natural
            strengths.
          </p>
          <div className="mt-10 grid max-w-lg grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-5 dark:bg-[#1c2e42]">
              <Ruler className="mb-5 text-[#d66e4b]" size={20} />
              <p className="text-xs font-bold tracking-[0.15em] text-[#8b96a3] uppercase dark:text-[#b7c4d3]">
                Height
              </p>
              <p className="mt-1 font-serif text-2xl">{pokemon.height / 10} m</p>
            </div>
            <div className="rounded-2xl bg-white p-5 dark:bg-[#1c2e42]">
              <Scale className="mb-5 text-[#d66e4b]" size={20} />
              <p className="text-xs font-bold tracking-[0.15em] text-[#8b96a3] uppercase dark:text-[#b7c4d3]">
                Weight
              </p>
              <p className="mt-1 font-serif text-2xl">{pokemon.weight / 10} kg</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-[#dde3ea] bg-[#fbfaf7] px-5 py-16 transition-colors sm:px-8 lg:px-12 dark:border-[#28405a] dark:bg-[#14233a]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#d66e4b] uppercase">
              Natural abilities
            </p>
            <h2 className="font-serif text-4xl">
              What makes it <em className="font-normal">unique</em>
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              {pokemon.abilities.map((item: { ability: { name: string } }) => (
                <span
                  key={item.ability.name}
                  className="rounded-xl border border-[#dadfe6] px-4 py-3 text-sm capitalize dark:border-[#3d4f63]"
                >
                  {item.ability.name.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#d66e4b] uppercase">
              Base stats
            </p>
            <div className="flex flex-col gap-4">
              {pokemon.stats.map((item: { stat: { name: string }; base_stat: number }) => (
                <div
                  key={item.stat.name}
                  className="grid grid-cols-[90px_1fr_35px] items-center gap-3 text-xs capitalize"
                >
                  <span className="text-[#5f6b78] dark:text-[#b7c4d3]">
                    {item.stat.name.replace('-', ' ')}
                  </span>
                  <div className="h-2 overflow-hidden rounded-full bg-[#e3e7ee] dark:bg-[#28405a]">
                    <div
                      className="h-full rounded-full bg-[#d66e4b]"
                      style={{ width: `${Math.min(item.base_stat, 150) / 1.5}%` }}
                    />
                  </div>
                  <span className="text-right font-bold">{item.base_stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
