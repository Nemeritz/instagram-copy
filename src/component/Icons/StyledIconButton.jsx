import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';;


let styles = () => createStyles ({
  colorPrimary: {color: "black"}
})

class StyledIconButton extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render () {
    return <div className="styled-icon-button">
      <IconButton className={this.props.classes.colorPrimary}> {this.props.icon} </IconButton>
    </div>
  }
}

export default withStyles(styles)(StyledIconButton);


