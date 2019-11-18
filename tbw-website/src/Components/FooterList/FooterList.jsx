import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import "./FooterList.scss";

const FooterList = () => (
  <List component="nav">
    <ListItem>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
  </List>
);

export default FooterList;
