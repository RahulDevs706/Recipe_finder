import React from 'react'
import Header from './components/layout/header/Header'
import {Switch, Route} from "react-router-dom"
import Home from './components/Home/Home'
import Footer from './components/layout/Footer/Footer'
import ProtectedRoutes from './Routes/ProtectedRoutes'
import SearchResult from './components/Search/SearchResult/SearchResult'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoutes exact path="/search" component={SearchResult} />
      </Switch>
      <Footer />

     <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App