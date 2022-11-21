import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DataPage from '../pages/DataPage';
import FirstPage from '../pages/FirstPage'

const AppRouter = ({ first}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage  first={first} />} />
        <Route path={`movie/:title`} element={<DataPage  first={first} />} />
      </Routes>
    </>
  );
}

export default AppRouter