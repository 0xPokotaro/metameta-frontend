import { useState } from 'react'
import { Tab } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import TabPanelAllowlist from '@/components/tab/collection/TabPanelAllowlist'
import TabPanelArtwork from '@/components/tab/collection/TabPanelArtwork'
import TabPanelCollection from '@/components/tab/collection/TabPanelCollection'
import TabPanelSmartContract from '@/components/tab/collection/TabPanelSmartContract'

const TAB_NUMBER = {
  COLLECTION: '1',
  ARTWORK: '2',
  SMART_CONTRACT: '3',
  ALLOW_LIST: '4',
}

const TabContextCollection: React.FC<React.PropsWithChildren> = () => {
  const [value, setValue] = useState('1')

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList
        onChange={handleChange}
        aria-label="collection-tab"
        variant="fullWidth"
      >
        <Tab label="Collection" value={TAB_NUMBER.COLLECTION} />
        <Tab label="Artwork" value={TAB_NUMBER.ARTWORK} />
        <Tab label="Smart contract" value={TAB_NUMBER.SMART_CONTRACT} />
        <Tab label="Allow list" value={TAB_NUMBER.ALLOW_LIST} />
      </TabList>
      <TabPanelCollection value={TAB_NUMBER.COLLECTION} />
      <TabPanelArtwork value={TAB_NUMBER.ARTWORK} />
      <TabPanelSmartContract value={TAB_NUMBER.SMART_CONTRACT} />
      <TabPanelAllowlist value={TAB_NUMBER.ALLOW_LIST} />
    </TabContext>
  )
}

export default TabContextCollection
