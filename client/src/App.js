import './App.css';
import { User } from './getUser/User';
import { AddUser } from './AddUser/AddUser';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';



function App() {
  const route = createBrowserRouter([
  
  {  path:"/",
     element: <User />
  },
  {  path:"/add-user",
     element: <AddUser />
  }
  
  ]);

  return (
    <div className="App">      
      <Navbar />
      <RouterProvider router={route}></RouterProvider>
      <Footer />
    </div>
  );
}

export default App;
