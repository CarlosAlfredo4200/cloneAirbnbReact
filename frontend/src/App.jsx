import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import "./App.css";
 

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import { Layout } from "./components/Layout";
import RegisterPage from "./pages/RegisterPage";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Route>
  )
)

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
