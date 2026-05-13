import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../store/authSlice'

// Sirf logged-in users access kar sakte hain
export function ProtectedRoute() {
  const isAuth = useSelector(selectIsAuth)
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />
}

// Logged-in user login/register page par nahi jaa sakta
export function GuestRoute() {
  const isAuth = useSelector(selectIsAuth)
  return isAuth ? <Navigate to="/home" replace /> : <Outlet />
}
