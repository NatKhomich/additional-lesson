import axios from 'axios'

//@ts-ignore
export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<GetDecksResponse>('decks')
  },
  createDeck(name: string) {
    return instance.post<DeckType>('decks', {name})
  }
}

export type GetDecksResponse = {
  items: DeckType[]
  pagination: PaginationType
  maxCardsCount: number
}

export type DeckType = {
  author: {
    id: string
    name: string
  }
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  rating: number
  created: string
  updated: string
  cardsCount: number
}
export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}