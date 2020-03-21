import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const placeHolder = require('../../../assets/logo512.png');

const theme = {
  spacing: 8,
}

const elevation = 0;

let styles = () => createStyles ({
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  image: {
    maxWidth: '100%',
  }
})

class GalleryPage extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render () {
    return <div className="gallery page">
      <Grid container spacing={3} t={2} alignContent="center" alignItems="center">
        <Grid item xs={12}></Grid>
        <Grid item xs={4}>
          <Paper className={this.props.classes.paper} elevation={elevation}>
            <img className={this.props.classes.image} src={placeHolder} alt="placeholder"></img>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={this.props.classes.paper} elevation={elevation}>
            <img className={this.props.classes.image} src={placeHolder} alt="placeholder"></img>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={this.props.classes.paper} elevation={elevation}>
            <img className={this.props.classes.image} src={placeHolder} alt="placeholder"></img>
          </Paper>
        </Grid>
      </Grid>
    </div>
  }
}

export default withStyles(styles)(GalleryPage);


