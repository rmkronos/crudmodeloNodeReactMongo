import './App.css';
import { User } from './getUser/User';
import { addUser } from './addUser/addUser';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import {createBrowserRouter, RouterProvider} from "react-router-dom";



function App() {
  const route = createBrowserRouter([
  
  {  path:"/",
     element: <User />
  },
  {  path:"/add-user",
     element: <addUser />
  }
  
  ]);

  return (
    <div className="App mt-5">      
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
