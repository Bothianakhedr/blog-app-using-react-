import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "./router";
import { SearchContextProvider } from "./context/SearchContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemContext";

const myClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={myClient}>
      <AuthContextProvider>
        <ThemeProvider>
          <SearchContextProvider>
            <RouterProvider router={router} />
            <ToastContainer />
          </SearchContextProvider>
        </ThemeProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
