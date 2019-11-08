import React, {Component} from 'react';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

class CustomToolbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography class="title">{this.props.title}</Typography>
          <Button>
            About
          </Button>
          <Button>
            Services
          </Button>
          <Button>
            Projects
          </Button>
          <Button>
            Careers
          </Button>
          <Button>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default CustomToolbar;
