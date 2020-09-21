import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

function Topbar({ classes }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Jumpa IC
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
        <div className={classes.list} onClick={() => setOpen(false)}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InfoOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='About' />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  )
}

export default Topbar
