import React from "react";
import "./Header.css";
import { ArrowBackIos, Forum, Person } from "@material-ui/icons";
import { Icon, IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

export default function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className='header'>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIos className='header__icon' fontSize='large' />
        </IconButton>
      ) : (
        <IconButton>
          <Person className='header__icon' fontSize='large' />
        </IconButton>
      )}
      <Link to='/'>
        <img
          className='header__logo'
          src='https://cdn.worldvectorlogo.com/logos/tinder-2.svg'
          alt='tinder-logo'
        />
      </Link>
      <Link to='/chats'>
        <IconButton>
          <Forum className='header__icon' fontSize='large' />
        </IconButton>
      </Link>
    </div>
  );
}
