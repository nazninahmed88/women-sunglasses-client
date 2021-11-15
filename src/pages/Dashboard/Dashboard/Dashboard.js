import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AdminRoute from '../../Login/AdminRoute/AdminRoute'
import Toolbar from '@mui/material/Toolbar';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Purchases from '../../Purchase/Purchases/Purchases';
import Pay from '../../Pay/Pay';
import Review from '../../Review/Review';
import { Typography } from '@mui/material';
import Makeadmin from '../MakeAdmin/Makeadmin';
import Addproduct from '../Addproduct/Addproduct';
import './Dashboard.css';


import ManageOrders from '../../Manage/ManageOrders/ManageOrders';
import ManageProducts from '../../ManageProduct/ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='text-center fs-5 text-uppercase'>
            <Toolbar />
            <Divider />
            <Link className='decoration' to={`${url}/purchase`}>My Orders</Link><hr />

            <Link className='decoration' to={`${url}/pay`}>Pay</Link>
            <hr />
            <Link className='decoration' to={`${url}/review`}>Review</Link>
            <hr />
            {admin &&
                 <Box>
                    <Link className='decoration' to={`${url}/makeadmin`}>Make Admin</Link>
                    <hr />
                    <Link className='decoration' to={`${url}/addproduct`}>Add Product</Link>
                    <hr />
                    <Link className='decoration' to={`${url}/manageorder`}>Manage All Orders</Link>
                    <hr />
                    <Link className='decoration' to={`${url}/manageproducts`}>Manage Products</Link>
                    <hr />
                </Box>
            }
            <Link className='decoration' to='/home'>Home</Link>
            <hr />
            <Link className='decoration' to={`${url}/logout`}>Logout</Link>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            className='bg-light'
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>

                        </Route>
                        <Route path={`${path}/purchase`}>
                            <Purchases></Purchases>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <Makeadmin></Makeadmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addproduct`}>
                            <Addproduct></Addproduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageorder`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                    </Switch>

                </Box>
            </Box>
        </div>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
