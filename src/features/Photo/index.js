import React from 'react'
import {Routes, Route, useMatch} from 'react-router-dom'
import MainPage from './pages/Main/MainPage'
import AddEditPage from './pages/AddEdit/AddEditPage'
import NotFound from 'components/NotFound'

function Photo(props) {
  
  return (
    <>
      <Routes>
        <Route path='/*' element={<MainPage />} />
        <Route path='add' element={<AddEditPage />} />
        <Route path=':id' element={<AddEditPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )

}

export default Photo