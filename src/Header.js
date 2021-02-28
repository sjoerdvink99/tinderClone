import React from "react";
import "./Header.css";
import { Forum, Person } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

export default function Header() {
  return (
    <div className='header'>
      <IconButton>
        <Person className='header__icon' fontSize='large' />
      </IconButton>
      <img
        className='header__logo'
        src='https://cdn.worldvectorlogo.com/logos/tinder-2.svg'
        alt='tinder-logo'
      />
      <IconButton>
        <Forum className='header__icon' fontSize='large' />
      </IconButton>
    </div>
  );
}
