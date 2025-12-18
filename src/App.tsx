import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "./router";
import { SearchContextProvider } from "./context/SearchContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeContextProvider } from "./context/ThemContext";

const myClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={myClient}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <SearchContextProvider>
            <RouterProvider router={router} />
            <ToastContainer />
          </SearchContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
