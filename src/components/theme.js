import { createMuiTheme } from "@material-ui/core/styles"

const myPrim = "#2c2a4b"
const mySec = "#d60825"

export default createMuiTheme({
  overrides: {},
  common: {
    myPrim: myPrim,
  },
  palette: {
    primary: {
      main: myPrim,
    },
    secondary: {
      main: mySec,
    },
  },
  props: {
    MuiTextField: {
      InputLabelProps: {
        shrink: true,
      },
      variant: "outlined",
    },
  },
})
