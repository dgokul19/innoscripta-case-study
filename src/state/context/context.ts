import { createContext } from 'react';

// Utils
import { InitialStateType } from '../../Types';
import { initialState } from '../reducer/reducer';
import { Actions } from '../actions/action';


// Define the type for our context data
type AppContextType = {
  state: InitialStateType,
  dispatch: React.Dispatch<Actions>,
};

const initalContectValue = {
  state : initialState,
  dispatch: () => null
}

export const AppContext = createContext<AppContextType>(initalContectValue);
