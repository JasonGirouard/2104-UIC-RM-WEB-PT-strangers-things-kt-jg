/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";

// Defining the starting point for our state
const initialState = {
    registerUserError: []
    // Add new data to state here
  };

// Create context is gonna set the stage, giving us a component that'll
//   contain all of our global data
const store = createContext(initialState);
const { Provider } = store;
// { Provider, Consumer };

// StateProvider is going to pass back a buffed-up version of the provider
const StateProvider = ({ children }) => {
  const [
    // State is gonna contain all of our global data
    state,
    // Dispatch is going to be a function that updates our state
    dispatch,
  ] = useReducer((oldData, action) => {
    // dispatch({
    //   // The type of action we're going to be doing / the branch we want our switch case to take
    //   type: "addFavoriteAnimal",
    //   // The new value / any new information our app might need to do the above action
    //   value: "www.animalURL.com",
    // });

    switch (action.type) {
      case "addResponses": {
        const newState = {
          ...oldData,
          registerUserError: [...oldData.registerUserError, action.value],
        };
        return newState;
      }

      // Add new state-changing methods here

      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

// case "deleteFavoriteAnimal": {
//   // Code for deleting an animal
//   return {};
// }