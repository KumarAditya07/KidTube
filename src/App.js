import React, { useState } from 'react'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen';

import { Container } from 'react-bootstrap'
import './_app.scss'
import Loginscreen from './screens/loginScreen/Loginscreen';


   const App = () => {


      const [sidebar, toggleSidebar] = useState(false)
   
      const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
   <>
      <Header handleToggleSidebar={handleToggleSidebar}></Header>

      <div className="app__container">
        <Sidebar sidebar={sidebar}
            handleToggleSidebar={handleToggleSidebar}
            ></Sidebar>
         
         <Container fluid className="app__main">

            <HomeScreen></HomeScreen>

         </Container>
      </div>

      <Loginscreen></Loginscreen>







   </>
  )
}

export default App
