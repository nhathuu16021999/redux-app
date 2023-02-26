import { Button } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import { authActions } from 'features/auth/authSlice';
import LoginPage from 'features/auth/pages/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();

  return (
    <>
      <Button variant='contained' color='primary' onClick={() => dispatch(authActions.logout())}>
        Logout
      </Button>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin' element={<PrivateRoute children={<AdminLayout />} />} />
        <Route path='/' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
