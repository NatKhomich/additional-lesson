import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatus } from '../../app/app-reducer'
import { handleError } from '../../common/utils/handle-error'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = await decksAPI.fetchDecks()
    //@ts-ignore
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    dispatch(setAppStatus('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    //@ts-ignore
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    //@ts-ignore
    dispatch(deleteDeckAC(res.data.id))
  })
}

//ошибки:
//case 1 - ошибка запроса (приходит с бэкэнда) - axios создает объект ошибки, в response.data помещает ответ сервера
//case 2 - network error (на стороне клиента) - axios создает объект ошибки, текст берем из message
//case 3 - ошибка вне запроса - генерируется нативными методами js throw new Error('boom'), имеет поле message

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.updateDeck(params)
    //@ts-ignore
    dispatch(updateDeckAC(res.data))
  } catch (e) {
    handleError(dispatch, e)
  }
}

