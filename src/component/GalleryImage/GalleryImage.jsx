import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import zIndex from '@material-ui/core/styles/zIndex';
const placeHolder = require('../../assets/logo512.png');

const theme = {
  spacing: 8,
}

const elevation = 0;

let styles = () => createStyles ({
  paper: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
  },
  hover: {
    height: '100%',
    maxWidth: '100%',
    opacity: 0.5,
    backgroundColor: 'black', 
  }
})

class GalleryImage extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {hover: true};
  }

  onHover = () => {
    this.setState({hover: true})
  }

  onLeave = () => {
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
          <Paper className={this.props.classes.paper} elevation={elevation}>
            <img className={this.props.classes.image} src={placeHolder} alt="placeholder" onMouseEnter={this.onHover} onMouseLeave={this.onLeave}></img>
            <div className={this.props.classes.hover}></div>
          </Paper>
    </div>
  }
}

export default withStyles(styles)(GalleryImage);


