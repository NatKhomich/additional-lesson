import { decksAPI } from './decks-api'
import { setDecksAC } from './decks-reducer'
import { Dispatch } from 'redux'
import { AppDispatch } from '../../app/store'

export const setDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks()
    .then((res) => {
// @ts-ignore
      dispatch(setDecksAC(res.data.items))
    })
}
export const addDecksTC = (name: string) => (dispatch: AppDispatch) => {
 return decksAPI.createDeck(name)
    .then(() => {
// @ts-ignore
      dispatch(setDecksTC())
    })
}