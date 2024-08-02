import React from 'react'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Shop from './pages/Shop'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Route>
    )
  )
  return (
    <>
    
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
