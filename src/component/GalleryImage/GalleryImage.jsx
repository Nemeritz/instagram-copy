import { createStyles, withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import React from 'react';
import placeholder from '../../assets/logo512.png';
import zIndex from '@material-ui/core/styles/zIndex';

const theme = {
  spacing: 8,
}

const elevation = 0;

let styles = () => createStyles ({
  paper: {
    textAlign: 'center',
    position: 'relative'
  },
  image: {
    maxWidth: '100%',
  },
  hover: {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    opacity: 0.5,
    backgroundColor: 'black',
    zIndex: 1,
    position: 'absolute'
  }
})

class GalleryImage extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  onHover = () => {
    console.log('hovered');
    this.setState({hover: true})
  }

  onLeave = () => {
    console.log('left');
    this.setState({hover: false})
  }

  renderHover = () => {
    return <div className={this.props.classes.hover}></div>;
  }

  render () {
    let hoverOverElement;

    if (this.state.hover) {
      hoverOverElement = this.renderHover();
    }

    return <div className="gallery-image" onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
          <Paper className={this.props.classes.paper} elevation={elevation} onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
            <img className={this.props.classes.image} src={placeholder} alt="placeholder"  ></img>
            {this.state.hover && <div className={this.props.classes.hover}></div>}
          </Paper>
    </div>
  }
}

export default withStyles(styles)(GalleryImage);
