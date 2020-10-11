import React, { useContext } from 'react'
import FullScreen from 'react-full-screen'
import Sidebar from '../components/Sidebar'
import Metronomo from '../components/Metronomo'
import Controls from '../components/Controls'
import { LayoutContext } from '../contexts/LayoutContext'

const Layout = () => {
  const { isFullScreen } = useContext(LayoutContext)
  return (
    <FullScreen enabled={isFullScreen}>
      <Sidebar />
      <Metronomo />
      <Controls />
    </FullScreen>
  )
}

export default Layout