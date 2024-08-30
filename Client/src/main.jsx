import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store, persistor } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { HomePage, SignInPage, SignUpPage, PasswordResetPage, Theaters } from "./pages/index.js"
import ThemeProvider from "./components/ThemeProvider.jsx"
import OTPInput from './components/OTPInput.jsx'
import ChangePassword from './components/ChangePassword.jsx'
import Movies from "./components/DashBoard/Movies.jsx";
import Showtime from "./components/DashBoard/ShowTime.jsx";
export default App;
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='/' element={<HomePage />} />
            <Route path='Dashboard' element={<Movies />} />
            <Route path='Theaters' element={<Theaters />} />
            <Route path='ShowTime' element={<Showtime />} />
            <Route path='signin' element={<SignInPage />} />
            <Route path='signup' element={<SignUpPage />} />
            <Route path='password-reset' element={<PasswordResetPage />} />
            <Route path='otp/:email' element={<OTPInput />} />
            <Route path='changePassword/:email' element={<ChangePassword />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider>
                <RouterProvider router={router}>
                </RouterProvider>
            </ThemeProvider>
        </PersistGate>
    </Provider>
)
