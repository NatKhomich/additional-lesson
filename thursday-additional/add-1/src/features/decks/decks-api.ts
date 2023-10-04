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
  }
}

type GetDecksResponse = {
  items: []
  pagination: {}
  maxCardsCount: number
}