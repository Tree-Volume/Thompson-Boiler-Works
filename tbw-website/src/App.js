import React, {Component} from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <Toolbar>
            <Typography>{this.props.title}</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
