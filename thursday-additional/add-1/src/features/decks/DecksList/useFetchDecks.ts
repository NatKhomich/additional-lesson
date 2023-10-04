import { AppRootState, useAppDispatch } from '../../../app/store'
import { DeckType } from '../decks-api'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { setDecksTC } from '../decks-thunks'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useSelector<AppRootState, DeckType[]>(state => state.decks.decks)

  useEffect(() => {
    dispatch(setDecksTC())
  }, [])

  return {
    decks
  }
}

export default useFetchDecks