import React from 'react'
import { Container, Grid, Toolbar, Typography, Button } from '@material-ui/core'
import { LocalLibrary, CloudCircle } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import Routes from './Routes'
const useStlyes = makeStyles((theme) => ({
  heroSection: {
    backgroundColor: theme.palette.grey[500],
    padding: theme.spacing(15, 0),
  },
  heroTxt: {
    textAlign: 'center',
    color: 'white',
  },
  itemtext: {
    justifyContent: 'center',
    padding: theme.spacing(10, 7),
    textAlign: 'center',
    alignItems: 'center',
  },
  itemSec2: {
    justifyContent: 'space-between',
    padding: theme.spacing(3, 14),
    textAlign: 'center',
    alignItems: 'center',
  },
}))
export default function Homelayout() {
  const classes = useStlyes()
  return (
    <Container maxWidth="false" disableGutters>
      <Toolbar></Toolbar>
      <Grid container className={classes.heroSection}>
        <Grid item lg={12}>
          <Typography className={classes.heroTxt} component="h1" variant="h2">
            Cyber Security Training
          </Typography>
        </Grid>
        <Grid item lg={12}>
          <Typography className={classes.heroTxt} component="h2" variant="h5">
            Making it easier to break into security
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.itemtext}>
        <Grid item lg={2}>
          <LocalLibrary style={{ fontSize: 100 }}></LocalLibrary>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h4">Guides</Typography>
          <Typography>
            Develop your skill workking througth Develop your skill workking
            througth Develop your skill workking througth
          </Typography>
        </Grid>
        <Grid item lg={2}>
          <CloudCircle style={{ fontSize: 100 }}></CloudCircle>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h4">Guides</Typography>
          <Typography>
            Develop your skill workking througth Develop your skill workking
            througth Develop your skill workking througth
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.itemSec2}>
        <Grid item lg={10}>
          <Typography variant="h4" align="left">
            Guides
          </Typography>

          <Typography align="left" style={{ marginTop: 15 }}>
            Develop your skill workking througth Develop your skill workking
            througth Develop your skill workking througth througth Develop your
            skill workking througth
          </Typography>
        </Grid>
        <Grid item lg={1}>
          <LocalLibrary style={{ fontSize: 100 }}></LocalLibrary>
        </Grid>
      </Grid>
      <Grid container className={classes.itemSec2}>
        <Grid item lg={1}>
          <LocalLibrary style={{ fontSize: 100 }}></LocalLibrary>
        </Grid>
        <Grid item lg={10}>
          <Typography variant="h4" align="right">
            Guides
          </Typography>

          <Typography align="left" style={{ marginTop: 15 }}>
            Develop your skill workking througth Develop your skill workking
            througth Develop your skill workking througth througth Develop your
            skill workking througth
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
