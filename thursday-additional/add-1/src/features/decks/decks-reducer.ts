import { decksAPI, DeckType } from './decks-api'
import { Dispatch } from 'redux'

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: ActionsType): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      return { ...state, decks: action.decks }
    }
    // case 'ADD-DECKS': {
    //   return {...state, decks: [action.deck, ...state.decks]}
    // }
    default:
      return state
  }
}

export const setDecksAC = (decks: DeckType[]) => ({ type: 'SET-DECKS', decks } as const)
// export const addDecksAC = (deck: DeckType) => ({ type: 'ADD-DECKS', deck } as const)

type SetDecksType = ReturnType<typeof setDecksAC>
// type AddDecksType = ReturnType<typeof addDecksAC>
type ActionsType = SetDecksType