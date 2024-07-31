import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
    <Layout>
    <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Layout>
     
    </>
  )
}

export default App
