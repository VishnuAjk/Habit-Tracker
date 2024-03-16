
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Homepage from "./Pages/Homepage";
import DetailsPage from "./Pages/DetailsPage";
import { Error } from "./Pages/Error";


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Navbar />,
      errorElement: <Error />,
      children:[
        {index:true, element: <Homepage />},
        {path:"/detailspage", element: <DetailsPage />},
      ]
    }
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
