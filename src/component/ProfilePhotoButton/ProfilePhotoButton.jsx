import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


let styles = () => createStyles ({
  colorPrimary: {color: "black"}
})

class ProfilePhotoButton extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.setState({getmeout: this.props.link});
  }

  renderIcon = () => {
    return this.props.icon ? this.props.icon : <AccountCircleOutlinedIcon/>;
  }

  render () {
    return <div className="styled-icon-button">
      <IconButton className={this.props.classes.colorPrimary} onClick={this.handleClick}> 
        {this.renderIcon()}
      </IconButton>
    </div>
  }
}

export default withStyles(styles)(ProfilePhotoButton);


