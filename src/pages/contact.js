import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { TextField, Button } from "@material-ui/core"
const Contact = () => (
  <Layout>
    <SEO title="Contact" />

    <form noValidate autoComplete="off">
      <div>
        <h1>Contact Form</h1>
        <TextField id="name" label="name" margin="normal" fullWidth required />
        <TextField
          id="email"
          label="email"
          margin="normal"
          fullWidth
          required
        />
        <TextField id="phone" label="phone" margin="normal" fullWidth />
        <TextField
          id="comment"
          label="comment"
          margin="normal"
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button variant="contained" color="secondary" size="small">
          Send
        </Button>
      </div>
    </form>
  </Layout>
)

export default Contact
