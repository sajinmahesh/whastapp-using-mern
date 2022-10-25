import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h1>room name</h1>
        <p>this is the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
