import React, {Component} from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class CustomToolbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography>{this.props.title}</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default CustomToolbar;
