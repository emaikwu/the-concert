import React from 'react'
import { Button } from '@material-ui/core';
import ticket from '../../resources/images/icons/ticket.png';

const MyButton = ({ value, bck }) => {
  return (
    <Button
      href="#"
      variant='contained'
      size="small"
      style={{background:bck, color: 'white'}}
    >
      <img src={ticket} alt=""
        className="iconImage"
      />
      {value}
    </Button>
  )
}

export default MyButton;
