

import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { Box, InputAdornment } from '@material-ui/core';

let styles = () => createStyles ({
  color: {"background-color": "#fafafa",
          "border": "1px solid"}
})

class Searchbar extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return <Box className="search-bar" display="flex" alignItems="center" justifyContent="center" borderRadius={10}>
    <Box display="flex" alignItems="center" justifyContent="center" margin="5px">
      <InputAdornment position="start">
        <IconButton>
          <SearchIcon/>
        </IconButton>
      </InputAdornment>
      <InputBase placeholder="Search" icon>
      </InputBase>
    </Box>
    </Box>
  }
}

export default withStyles(styles)(Searchbar);;