import React, { useState } from 'react'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import TabPanel from './TabPanel'
import Lost from '../pages/Lost'
import Found from '../pages/Found'

function ActionTab() {
  const [value, setValue] = useState(0)

  return (
    <>
      <Paper square>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          variant='fullWidth'
          indicatorColor='secondary'
          textColor='secondary'
        >
          <Tab label='Lost' />
          <Tab label='Found' />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Lost />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Found />
      </TabPanel>
    </>
  )
}

export default ActionTab
