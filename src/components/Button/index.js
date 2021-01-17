import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";

function RestoreBtn(props) {
  return (

      <Button className='restorebutton' variant='primary' onClick={() => props.restoreFriendList(props.friends)}>
      Restore Employee List
      </Button>
  );
}

export default RestoreBtn;