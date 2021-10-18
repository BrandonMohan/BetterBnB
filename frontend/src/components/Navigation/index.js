import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from '../../store/session'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();


const demoUser = async () => {
  return dispatch(sessionActions.login({credential: "Demo-lition", password: 'password'}))
}


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
              <a id='github' href='https://github.com/BrandonMohan' target="_blank">GitHub</a>
              <a id='linkedin' href='https://www.linkedin.com/in/brandon-mohan-ba3282212/' target="_blank">LinkedIn</a>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
              <a id='github' href='https://github.com/BrandonMohan' target="_blank">GitHub</a>
              <a id='linkedin' href='https://www.linkedin.com/in/brandon-mohan-ba3282212/' target="_blank">LinkedIn</a>
        <button onClick={ () => demoUser()}>Demo</button>
      </>
    );
  }

  return (
    <ul className="nav_ul">
      <li className="nav">
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
