import { isAxiosError } from 'axios'
import { Dispatch } from 'redux'
import { setAppError } from '../../app/app-reducer'

export const handleError = (dispatch: Dispatch, e: unknown) => {
  let errorMessage = ''
  if (isAxiosError<ErrorType>(e)) {
    errorMessage = e.response
      ? e.response.data.errorMessages[0].message //case 1
      : e.message //case 2
  } else {
    //case 3
    errorMessage = (e as Error).message
  }
  //@ts-ignore
  dispatch(setAppError(errorMessage))
}

export type ErrorType = {
  errorMessages: [{
    message: string
    field: string
  }]
}