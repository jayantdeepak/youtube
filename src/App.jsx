import Head from './components/head'
import './App.css'
import Sidebar from './components/sidebar'
import Body from './components/body'
import {Provider} from "react-redux"
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/maincontainer'
import Watchpage from './components/watchpage';
import Error from './components/Error'
import { AllVideoContextProvider } from './context/all vedio_context'
const router= createBrowserRouter([
  {path:"/" ,
  element:<Body/>,
   children:[
           {path:"/",
           element:<Maincontainer/>},
           {
            path:"watch",
            element:<Watchpage/>
           }
               ],
              errorElement:<Error/>}
]              )


function App() {
 

  return ( <>
 
    <Provider store={store}>
    
    <Head/>
    <RouterProvider router={router}/>
    
    </Provider>
  
    </>
  )
}

export default App
