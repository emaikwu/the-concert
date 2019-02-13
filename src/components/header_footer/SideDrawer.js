import React from 'react'
import {Drawer, Divider, List, ListItem} from '@material-ui/core';
import {scroller} from 'react-scroll'

const SideDrawer = (props) => {

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -89
    })
  }

  return (
    <div>
      <Drawer
      anchor={props.side}
      open={props.open}
      onClose={props.onClose}
      >
        <List
          component="nav"
          >
          <ListItem button onClick={() => {
            scrollToElement("home");
          }}
          style={{
            textAlign:"center",
            display: "inline-block"
          }}
          >Home</ListItem>
          <Divider/>
          <ListItem button onClick={() => {
            scrollToElement('venue')
          }}
          style={{
            textAlign:"center",
            display: "inline-block"
          }}
          >Venue Info</ListItem>
          <ListItem button onClick={() => {
            scrollToElement('highlights')
          }}
          style={{
            textAlign:"center",
            display: "inline-block"
          }}
          >Highlights</ListItem>
          <ListItem button onClick={() => {
            scrollToElement('tickets')
          }}
          style={{
            textAlign:"center",
            display: "inline-block"
          }}
          >Tickets</ListItem>
          <ListItem button onClick={() => {
            scrollToElement("location")
          }}
          style={{
            textAlign:"center",
            display: "inline-block"
          }}
          >Location</ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default SideDrawer
