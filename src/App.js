import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Items from './pages/Home/Items/Items';
import Products from './pages/Products/Products';
import Purchases from './pages/Purchase/Purchases/Purchases';
import Orders from './pages/Orders/Orders';
import ManageOrders from './pages/Manage/ManageOrders/ManageOrders';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Pay from './pages/Pay/Pay';
import Logout from './pages/Logout/Logout';
import Review from './pages/Review/Review';
import Rate from './pages/Rate/Rate';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import DisplayReviews from './pages/DisplayReview/DisplayReviews/DisplayReviews';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/items'>
              <Items></Items>
            </Route>
            <Route path='/products'>
              <Products></Products>
            </Route>
            <PrivateRoute path='/purchase'>
              <Purchases></Purchases>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/pay'>
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path='/logout'>
              <Logout></Logout>
            </PrivateRoute>
            <PrivateRoute path='/review'>
              <Review></Review>
            </PrivateRoute>
            <Route path='/orders'>
              <Orders></Orders>
            </Route>
            <Route path='/rate'>
              <Rate></Rate>
            </Route>
            <Route path='/manage'>
              <ManageOrders></ManageOrders>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/review'>
              <DisplayReviews></DisplayReviews>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
