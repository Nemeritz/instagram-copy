import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import textLogo from '../../assets/text_logo.png';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import "./Topbar.css";
import { Box } from '@material-ui/core';
import StyledIconButton from '../Icons/StyledIconButton';
import Searchbar from '../Searchbar/Searchbar'

class Topbar extends React.Component {



  renderTopIcons = () => {
    let icons = [<HomeOutlinedIcon/>, <ExploreIcon/>, <FavoriteBorderOutlinedIcon/>, <AccountCircleOutlinedIcon/>];
    return icons.map((iconElement) => <StyledIconButton icon={iconElement}></StyledIconButton>);
  }

  render () {
    return <div className="appBar">
    <AppBar position="static" color="transparent">
      <Toolbar className="toolbar">
        <Box width="100%" alignItems="center" justifyContent="center">
          <Box display="flex" alignItems="center" justifyContent="center" margin="auto">
            <Box flexGrow={2} justifyContent="flex-start">
              <img className="logo-img" src={textLogo} alt="text logo"/>
            </Box>
            <Box className="tools" flexGrow={3} display="flex" alignItems="center" justifyContent="center">
              <Searchbar></Searchbar>
            </Box>
            <Box display="flex" flexGrow={1} alignItems="center" justifyContent="space-evenly" flexWrap="nowrap">
              {this.renderTopIcons}
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
    {/* <Box className="gallery" alignItems="center" justifyContent="center">
      <Box display="flex" alignItems="center" justifyContent="center" margin="auto" width="50%"  border="solid">
        <Box flexGrow={1} justifyContent="flex-start" alignItems="flex-start">
          <AccountCircleOutlinedIcon height="150px" width="150px"/>
        </Box>
        <Box flexGrow={2} justifyContent="flex-start" alignItems="flex-start" border="solid">
                <img className="logo-img" src={textLogo} alt="text logo"/>
        </Box>
      </Box>
    </Box> */}
    </div>
  }
}

export default Topbar;