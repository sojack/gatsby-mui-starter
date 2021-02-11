import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Button, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  containerStyle: {
    marginTop: "5em",
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  buttonContainer: {
    padding: "1em",
  },
}))

const Sample = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Sample " />
      <h1>Buttons</h1>

      <Grid item xs={12}>
        <Button>Default </Button>
        <Button color="primary">Primary color </Button>
        <Button color="secondary">Secondary color </Button>

        <Divider spacing={3} />

        <Button size="small">Small Default </Button>
        <Button color="primary" size="small">
          Small color{" "}
        </Button>
        <Button color="secondary" size="small">
          Small color{" "}
        </Button>

        <Divider />

        <div className={classes.buttonContainer}>
          <Button variant="contained">contained default</Button>
          <Button variant="contained" color="primary">
            contained primary
          </Button>
          <Button variant="contained" color="secondary">
            contained secondary
          </Button>
        </div>

        <Divider />

        <div className={classes.buttonContainer}>
          <Button variant="contained" size="small">
            SMALL default
          </Button>
          <Button variant="contained" color="primary" size="small">
            SMALL primary
          </Button>
          <Button variant="contained" color="secondary" size="small">
            SMALL secondary
          </Button>
        </div>

        <Divider />

        <div className={classes.buttonContainer}>
          <Button variant="outlined">outlined default</Button>
          <Button variant="outlined" color="primary">
            outlined primary
          </Button>
          <Button variant="outlined" color="secondary">
            outlined secondary
          </Button>
        </div>

        <Divider />

        <div className={classes.buttonContainer}>
          <Button variant="outlined" size="small">
            Small outlined
          </Button>
          <Button variant="outlined" color="primary" size="small">
            Small outlined
          </Button>
          <Button variant="outlined" color="secondary" size="small">
            Small outlined
          </Button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <p>xs=6</p>
      </Grid>
      <Grid item xs={6}>
        <p>xs=6</p>
      </Grid>
      <Grid item xs={12} sm={4}>
        <p>xs=12 sm=4</p>
      </Grid>
      <Grid item xs={12} sm={4}>
        <p>xs=12 sm=4</p>
      </Grid>
      <Grid item xs={12} sm={4}>
        <p>xs=12 sm=4</p>
      </Grid>
    </Layout>
  )
}

export default Sample
