import React from "react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer>
      <p className={classes.root}>©{new Date().getFullYear()} company</p>
    </footer>
  )
}

export default Footer
