import { useReducer } from 'react';
// Layout
import HomeLayout from "./Layout/index";
// Utils
import { AppContext } from './state/context/context';
import { newsReducer, initialState } from './state/reducer/reducer';

// CSS
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// App CSS
import './App.css'


function App() {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  return (
    <>
      <AppContext.Provider value={{state, dispatch}}>
        <HomeLayout />
      </AppContext.Provider>
    </>
  )
}

export default App
