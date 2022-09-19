import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { WorldMemories } from './pages/WorlMemories/WorldMemories';
import { Error404 } from './Components/Error404/Error404';
import { CreateMemories } from './pages/CreateMemories/CreateMemories';
import { MyMemories } from './pages/MyMemories/MyMemories';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }) => {
    if(!localStorage.getItem('logged')) {
        return <Navigate to='/login' replace={true} />
    }
    return children
}


function App() {
    return (
        <Routes>
            <Route 
                path='/'
                element={
                    <RequireAuth>
                        <WorldMemories />
                    </RequireAuth>} 
            />
            <Route 
                path='/creatememories'
                element={
                    <RequireAuth>
                        <CreateMemories />
                    </RequireAuth>} 
            />
             <Route 
                path='/mymemories'
                element={
                    <RequireAuth>
                        <MyMemories />
                    </RequireAuth>} 
            />
            <Route
                path='/login'
                element={<Login />}
            />
            <Route
                path='/register'
                element={<Register />}
            />
            <Route
                path='*'
                element={<Error404 />}
            />
        </Routes>
    )
}

export default App;
