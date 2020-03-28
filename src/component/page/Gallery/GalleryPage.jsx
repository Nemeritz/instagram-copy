import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GalleryImage from '../../GalleryImage/GalleryImage';
import '../Gallery/GalleryPage.css'

const theme = {
  spacing: 8,
}

let styles = () => createStyles ({
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
          <GalleryImage></GalleryImage>
        </Grid>
        <Grid item xs={4}>
          <GalleryImage></GalleryImage>
        </Grid>
        <Grid item xs={4}>
          <GalleryImage></GalleryImage>
        </Grid>
      </Grid>
    </div>
  }
}

export default withStyles(styles)(GalleryPage);


