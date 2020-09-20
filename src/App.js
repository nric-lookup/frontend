import React from 'react'
import './App.css'

import { makeStyles } from '@material-ui/core/styles'
import Topbar from './components/Topbar'
import ActionTab from './components/ActionTab'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '450px',
    margin: '0 auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Topbar classes={classes} />
      <ActionTab />
    </div>
  )
}

export default App
