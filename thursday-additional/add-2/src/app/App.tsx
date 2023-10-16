import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { useAppSelector } from './store'
import { LinearLoader } from '../common/components/Loader/LinearLoader'
import { selectAppStatus } from './app-selectors'

export const App = () => {
  //@ts-ignore
  const appStatus = useAppSelector(selectAppStatus)

  return (
    <div>
      {appStatus === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
    </div>
  )
}
