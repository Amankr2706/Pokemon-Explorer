'use client'

import Link from 'next/link'
import { Search, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

type Pokemon = {
  name: string
  url: string
}

const featured = [
  {
    name: 'Bulbasaur',
    type: 'Grass · Poison',
    tone: 'sage',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    tone: 'peach',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    tone: 'sky',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  },
]

export function PokemonExplorer({ pokemons }: { pokemons: Pokemon[] }) {
  const [query, setQuery] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const filtered = useMemo(
    () => pokemons.filter((pokemon) => pokemon.name.includes(query.toLowerCase())),
    [pokemons, query]
  )

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') setDarkMode(true)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f0] text-[#16232e] transition-colors dark:bg-[#0f1b2b] dark:text-[#eaf0f6]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Pokémon Explorer home">
          <span className="grid size-10 place-items-center rounded-full bg-[#1b3a5c] text-[#f5f0df]">
            <svg viewBox="0 0 180 180" width="18" height="18" fill="currentColor">
              <path d="M90 32 L101 68 L138 68 L108 90 L119 126 L90 104 L61 126 L72 90 L42 68 L79 68 Z" />
            </svg>
          </span>
          <span className="font-serif text-xl font-bold tracking-tight">Pokémon Explorer</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#5f6b78] sm:flex">
          <a href="#starters" className="text-xl transition-colors hover:text-[#1b3a5c]">
            Begin
          </a>
          <a href="#collection" className="text-xl transition-colors hover:text-[#1b3a5c]">
            Collection
          </a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden rounded-full border border-[#d7dde3] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[#5f6b78] uppercase sm:inline dark:border-[#3d4f63] dark:text-[#b7c4d3]">
            Kanto · 001—151
          </span>
          <button
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid size-10 place-items-center rounded-full border border-[#d7dde3] text-[#5f6b78] transition-colors hover:bg-[#e6ecf2] dark:border-[#3d4f63] dark:text-[#d7e2ea] dark:hover:bg-[#1c2e42]"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pt-12 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:pt-20 lg:pb-24">
        <div>
          <p className="mb-6 flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-[#d66e4b] uppercase">
            <Sparkles size={15} /> Pokémon
          </p>
          <h1 className="max-w-2xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] sm:text-8xl">
            Meet the
            <br />
            <em className="font-normal text-[#d66e4b]">wild ones.</em>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-8 text-[#5f6b78]">
            Browse all 151 original Pokémon in one place. Learn their habits, abilities, and the small details that make each one special.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#collection"
              className="rounded-full bg-[#1b3a5c] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Browse Collection <ArrowUpRight className="ml-2 inline" size={16} />
            </a>
            <span className="text-sm text-[#8b96a3]">Powered by PokéAPI</span>
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
          <div className="absolute size-[78%] rounded-full bg-[#dbe7f0] blur-[1px]" />
          <div className="relative aspect-square w-[88%] rounded-[48%_52%_54%_46%] bg-[#e7f0f7] p-5 shadow-[inset_-20px_-20px_0_rgba(181,204,181,0.25)] sm:w-[78%]">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              alt="Pikachu"
              className="relative z-10 size-full object-contain drop-shadow-[0_24px_18px_rgba(39,70,50,0.18)]"
            />
            <span className="absolute bottom-8 left-7 z-20 rounded-full bg-white/80 px-3 py-1 text-xs font-bold tracking-[0.18em] text-[#5f6b78] uppercase backdrop-blur">
              No. 025
            </span>
          </div>
        </div>
      </section>

      <section
        id="starters"
        className="border-t border-[#dde3ea] bg-[#fbfaf7] px-5 py-16 transition-colors sm:px-8 lg:px-12 lg:py-20 dark:border-[#28405a] dark:bg-[#14233a]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#d66e4b] uppercase">
                Starters
              </p>
              <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">Begin your journey</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#8b96a3]">Pick your first partner.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((pokemon) => (
              <Link
                href={`/pokemon/${pokemon.name.toLowerCase()}`}
                key={pokemon.name}
                className={`group relative overflow-hidden rounded-[2rem] p-6 ${pokemon.tone === 'sage' ? 'bg-[#dfeadd]' : pokemon.tone === 'peach' ? 'bg-[#f5dfd3]' : 'bg-[#dceaf0]'}`}
              >
                <span className="text-xs font-bold tracking-[0.18em] text-[#5f6b78] uppercase">
                  {pokemon.type}
                </span>
                <h3 className="mt-4 font-serif text-3xl">{pokemon.name}</h3>
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="mx-auto mt-2 size-48 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute right-6 bottom-6 grid size-9 place-items-center rounded-full bg-white/70 text-[#1b3a5c]">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-8 border-b border-[#dadfe6] pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#d66e4b] uppercase">
              All Pokémon
            </p>
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">Collection</h2>
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="search" className="mb-3 block text-sm font-semibold">
              Search Pokémon
            </label>
            <div className="flex items-center gap-3 rounded-full border border-[#d7dde3] bg-white px-5 py-3 shadow-sm">
              <Search size={18} className="text-[#8b96a3]" />
              <input
                id="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try “Pikachu” or “Mew”"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#a8b0b8]"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {filtered.map((pokemon) => {
            const pokemonId = pokemon.url.split('/').filter(Boolean).pop() ?? '0'
            return (
              <Link href={`/pokemon/${pokemon.name}`} key={pokemon.name} className="group">
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#eaeef3] p-4">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
                    alt={pokemon.name}
                    className="size-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-serif text-xl capitalize">{pokemon.name}</span>
                  <span className="text-xs font-bold text-[#9aa5b3]">
                    {pokemonId.padStart(3, '0')}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center font-serif text-2xl text-[#8b96a3]">
            No Pokémon found for “{query}”.
          </p>
        )}
      </section>
      <footer className="flex flex-col justify-between gap-3 border-t border-[#dde3ea] px-5 py-8 text-xs text-[#8b96a3] sm:flex-row sm:px-12">
        <span>Pokémon Explorer</span>
        <span>Data from PokéAPI</span>
      </footer>
    </main>
  )
}

export type { Pokemon }
