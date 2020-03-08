import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import textLogo from '../../assets/text_logo.png';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import "./Topbar.css";
import { Box, InputAdornment } from '@material-ui/core';
import StyledIconButton from '../Icons/StyledIconButton';

class Topbar extends React.Component {

  renderTopIcons = () => {
    let icons = [<HomeOutlinedIcon/>, <ExploreIcon/>, <FavoriteBorderOutlinedIcon/>, <AccountCircleOutlinedIcon/>];
    return icons.map((iconElement) => <StyledIconButton icon={iconElement}></StyledIconButton>);
  }

  render () {
    let homeOutlinedIcon = <HomeOutlinedIcon/>;
    let searchIcon = <SearchIcon/>;

    return <div className="appBar">
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Box width="100%" alignItems="center" justifyContent="center">
          <Box display="flex" alignItems="center" justifyContent="center" margin="auto" width="50%">
            <Box flexGrow={2} justifyContent="flex-start">
              <img className="logo-img" src={textLogo} alt="text logo"/>
            </Box>
            <Box className="tools" flexGrow={3} display="flex" alignItems="center" justifyContent="center">
              <Box className="search-bar" display="flex" alignItems="center" justifyContent="center" borderRadius={10}>
                <Box display="flex" alignItems="center" justifyContent="center" margin="5px">
                  <InputAdornment position="start">
                    <IconButton>
                      {searchIcon}
                    </IconButton>
                  </InputAdornment>
                  <InputBase placeholder="Search" icon>
                  </InputBase>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexGrow={1} alignItems="center" justifyContent="space-evenly" flexWrap="nowrap">
              {this.renderTopIcons}
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
    <Box className="gallery" alignItems="center" justifyContent="center">
      <Box display="flex" alignItems="center" justifyContent="center" margin="auto" width="50%"  border="solid">
        <Box flexGrow={1} justifyContent="flex-start" alignItems="flex-start">
          <AccountCircleOutlinedIcon height="150px" width="150px"/>
        </Box>
        <Box flexGrow={2} justifyContent="flex-start" alignItems="flex-start" border="solid">
                <img className="logo-img" src={textLogo} alt="text logo"/>
        </Box>
      </Box>
    </Box>
    </div>
  }
}

export default Topbar;