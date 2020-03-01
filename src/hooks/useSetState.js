import { useReducer } from 'react';

export const useSetState = initialState => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState,
  );
  return [state, setState];
};
