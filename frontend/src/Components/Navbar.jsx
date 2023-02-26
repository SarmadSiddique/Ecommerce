import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import './Nav.css'

// import { Search } from 'history';
const Navbar = () => {
  const Padding = {
    paddingLeft: "10px"
  }
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      color: "white"
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "white"
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  return (
    <div>
      <nav id='nav' className="navbar navbar-expand-lg navbar-light bg-success py-3 shadow-sm">
        <div className="container-fluid ">

          <div className="input d-flex align-items-center ">
            <span className="lan text-light">
              EN
            </span>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </div>
          <div className="brand">
            <NavLink className="navbar-brand  text-light fs-3 " to="#">Sar_Shopping</NavLink>
          </div>
          <div className="links">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav   mb-2 mb-lg-0">

              <li className='px-4 '>
                  <NavLink style={{ fontSize: "1.2rem" }} to="/home" className=" mt-1" >

                    Home</NavLink>
                </li>
                <li className='px-4'>
                  <NavLink style={{ fontSize: "1.2rem" }} to="/login" className=" mt-1" >

                    Login</NavLink>
                </li>
                <li className='px-4'><NavLink to="/signup" >
                  <i className='fa fa-user-plus fs-4 '></i>
                </NavLink>
                </li>
                <li className='px-4'>
                  <NavLink to="/cart"  >
                    <Badge badgeContent={4} color="error">
                      <ShoppingCartCheckoutRoundedIcon className="fs-3" />
                    </Badge>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar