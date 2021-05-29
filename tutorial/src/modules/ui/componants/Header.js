import React from 'react'
import { AppBar, Toolbar, Link, IconButton } from '@material-ui/core'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import logo from 'assets/images/logo.png'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
  },
  logoImage: {
    with: '40px',
    height: '40px',
  },
  logolink: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  menuHeader: {
    color: '#fff',
    fontWeight: 600,
  },
  spacer: {
    marginRight: theme.spacing(2),
  },
}))
export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Link component={RouterLink} to="/" className={classes.logolink}>
          <img src={logo} alt="" className={classes.logoImage} />
        </Link>

        <Link component={RouterLink} to="/" className={classes.menuHeader}>
          Login
        </Link>
        <div className={classes.spacer}></div>

        <Link component={RouterLink} to="/" className={classes.menuHeader}>
          Join now
        </Link>
      </Toolbar>
    </AppBar>
  )
}
