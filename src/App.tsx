import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { router } from "./router";
import { AuthContextProvider } from "./context/AuthProvider";
import { SearchContextProvider } from "./context/SearchContext";

export default function App() {
  return (
    <AuthContextProvider>
      <SearchContextProvider>
        <RouterProvider router={router}/>
      <ToastContainer />
      </SearchContextProvider>
      
    </AuthContextProvider>
  )
}
