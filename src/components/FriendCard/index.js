import React from "react";
import "./style.css";
import { Table, Button } from "react-bootstrap";

function FriendCard(props) {
  return (

    <div className="table">
      <Table striped bordered hover id='employees'>
      <thead>
        <tr>
          <th><Button variant="secondary" value="sortByName" onClick={() => props.sortNameColumn(props.name)}>Name  ↕</Button></th>
          <th><Button variant="secondary" value="sortByOccupation" onClick={() => props.sortOccupationColumn(props.friends)}>Occupation  ↕</Button></th>
          <th><Button variant="secondary" value="sortByLocation" onClick={() => props.sortLocationColumn(props.location)}>Location  ↕</Button></th>
          <th>X</th>
        </tr>
      </thead>

        {props.children}
      
      </Table>
    </div>
  );
}

export default FriendCard;
