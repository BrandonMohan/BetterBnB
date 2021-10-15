import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { allSpots } from './store/spots'
import { allReviews } from './store/reviews'
import SpotsBrowser from "./components/Spots";
import SingleSpot from "./components/SingleSpot"
import Reviews from "./components/Reviews";
import CreateSpotForm from "./components/CreateSpotForm";
import EditSpotForm from "./components/UpdateSpotForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/spots/:id'>
          <SingleSpot />
          <EditSpotForm />
          <Reviews />
          </Route>
          <Route path='/'>
            <h1>Home page</h1>
            <SpotsBrowser />
            <CreateSpotForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
