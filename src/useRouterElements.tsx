import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'
import Profile from './pages/Profile'

// Nếu người dùng login thành công thì cho người dùng thao tác tiếp còn ko thì ở nguyên trang login
const isAuthenticated = true
function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

// Khi người dùng login rồi thì ko cần cho người dùng vào trang login nữa, nếu người dùng cố vào trang register sẽ cho nó chuyển đến trang home
// Nếu người dùng login rồi thì cho vào -> còn ko thì cho vào trang list sản phẩm
function RejectedRoute() {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouterElements() {
  const routerElement = useRoutes([
    {
      index: true,
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '/',
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])

  return routerElement
}
