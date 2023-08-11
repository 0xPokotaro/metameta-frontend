import { TabPanel } from '@mui/lab'

type Props = {
  value: string
}

const TabPanelAllowlist = (props: Props) => {
  const { value } = props

  return (
    <TabPanel value={value} sx={{ px: 0 }}>
      Item 4
    </TabPanel>
  )
}

export default TabPanelAllowlist
