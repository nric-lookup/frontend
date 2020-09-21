import React, { useState } from 'react'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import TabPanel from './TabPanel'
import Lost from '../pages/Lost'
import Found from '../pages/Found'

function ActionTab() {
  const [value, setValue] = useState(1)

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
          <Tab value={0} label='Lost' />
          <Tab value={1} label='Found' />
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
