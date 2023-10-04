import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from '../decks-api'

export const DecksList = () => {

  useEffect(() => {
    decksAPI.fetchDecks()
      .then((res) => {
        res.data
      })
  }, [])

  return <ul className={s.list}></ul>
}
