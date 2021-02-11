import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

import logo from "../images/logo.svg"

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
  },
  appbar: {
    boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.1)",
  },
  toolbar: {
    alignContent: "flex-start",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      order: "1",
    },
  },
  mobilespacer: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  tabs: {
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  tab: {
    minWidth: "100px",
  },
  logoContainer: {
    padding: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2rem",
    },
  },
  logo: {
    height: "50px",
  },
}))

const Header = ({ siteTitle }) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [newValue, setValue] = useState(false)
  const [anchorElement, setAnchorElement] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [submenuIndex, setSubmenuIndex] = useState(0)

  const handleMenuClick = e => {
    setAnchorElement(e.currentTarget)
    setOpenMenu(true)
  }
  const handleMenuClose = e => {
    setAnchorElement(null)
    setOpenMenu(false)
  }
  const handleChange = (e, value) => {
    setValue(value)
    console.log(newValue)
  }
  const handleSubmenuClick = (e, i) => {
    // setAnchorElement(null)
    setOpenMenu(false)
    setSubmenuIndex(i)
  }

  const navLinks = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Sample",
      link: "/sample",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]

  const subMenu = [
    {
      name: "Sample",
      link: "/sample",
    },
    {
      name: "Sample Item 1",
      link: "/item1",
    },
    {
      name: "Sample Item 2",
      link: "/item2",
    },
    {
      name: "Sample Item 3",
      link: "/item3",
    },
  ]

  useEffect(() => {
    if (window.location.pathname === "/services" && newValue !== 0) {
      setValue(0)
    } else if (window.location.pathname === "/about" && newValue !== 1) {
      setValue(1)
    } else if (window.location.pathname === "/sample" && newValue !== 2) {
      setValue(2)
      setSubmenuIndex(0)
    } else if (window.location.pathname === "/item1" && newValue !== 2) {
      setValue(2)
      setSubmenuIndex(1)
    } else if (window.location.pathname === "/item2" && newValue !== 2) {
      setValue(2)
      setSubmenuIndex(2)
    } else if (window.location.pathname === "/item3" && newValue !== 2) {
      setValue(2)
      setSubmenuIndex(3)
    } else if (window.location.pathname === "/contact" && newValue !== 3) {
      setValue(3)
    }
  }, [newValue])

  const homeButton = (
    <Button
      component={Link}
      to="/"
      disableRipple
      className={classes.logoContainer}
      onClick={() => {
        setValue(false)
      }}
    >
      <img
        src={logo}
        title="Logo"
        alt="company logo"
        className={classes.logo}
      />
    </Button>
  )

  const Drawer = (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      onOpen={() => setOpenDrawer(true)}
    >
      <List disablePadding>
        {navLinks.map((navLink, i) => (
          <ListItem
            divider
            button
            key={i}
            component={Link}
            to={navLink.link}
            selected={newValue === i}
          >
            <ListItemText disableTypography>{navLink.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.mobilespacer}>&nbsp;</div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <MenuIcon />
          </IconButton>

          {homeButton}

          <Tabs
            aria-label="simple tabs example"
            size="small"
            value={newValue}
            onChange={handleChange}
            className={classes.tabs}
          >
            {navLinks.map((navLink, i) => (
              <Tab
                key={i}
                label={navLink.name}
                component={Link}
                to={navLink.link}
                className={classes.tab}
                aria-owns={anchorElement ? "simple menu" : undefined}
                aria-haspopup={anchorElement ? true : undefined}
                onMouseOver={i === 2 ? e => handleMenuClick(e) : null}
              />
            ))}
          </Tabs>

          <Menu
            id="simple-menu"
            anchorEl={anchorElement}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{ onMouseLeave: handleMenuClose }}
            elevation={0}
            keepMounted
          >
            {subMenu.map((option, i) => (
              <MenuItem
                key={i}
                component={Link}
                to={option.link}
                onClick={e => {
                  handleSubmenuClick(e, i)
                  setValue(2)
                  handleMenuClose()
                }}
                selected={i === submenuIndex && newValue === 2}
              >
                {option.name}
              </MenuItem>
            ))}
          </Menu>

          {Drawer}
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
