import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
// import { EditorState } from "draft-js";

// material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

// custom form
import Form from "./Form";

// form validation
const validationSchema = Yup.object({
  shortName: Yup.string("Enter abbreviated museum name").max(32),
  name: Yup.string("Enter museum name")
    .required("Museum name is required")
    .max(128),
  coords: Yup.string("Enter museum coordinates").required(
    "Museum coordinates are required"
  )
});

// styling
const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`
  }
});

class MuseumForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    categories: [],
    museum: { shortName: "", name: "", coords: "", categoryId: "" }
  };

  componentWillMount() {
    this.loadCategories();
    if (this.props.museumId) {
      this.loadMuseum(this.props.museumId);
    }
  }

  loadCategories = async () => {
    try {
      const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
      };
      const response = await fetch("/api/v1/categories", options);
      console.log(response);
      const responseJson = await response.json();
      if (responseJson) {
        this.setState(prevState => ({
          ...prevState,
          categories: responseJson
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  loadMuseum = async museumId => {
    try {
      const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
      };
      const response = await fetch(`/api/v1/musea/${museumId}`, options);
      const responseJson = await response.json();
      if (responseJson) {
        this.setState(prevState => ({
          ...prevState,
          museum: responseJson
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  submit = (values, actions) => {
    const { museumId } = this.props;

    if (museumId) {
      this.updateMuseum(museumId, values);
    } else {
      this.updateMuseum(values);
    }
  };

  saveMuseum = async museumData => {
    try {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(museumData),
        mode: "cors",
        cache: "default"
      };

      const response = await fetch("/api/v1/musea", options);
      const responseJson = await response.json();
      if (responseJson) {
        console.log(responseJson);
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateMuseum = async (museumId, museumData) => {
    try {
      const options = {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(museumData),
        mode: "cors",
        cache: "default"
      };

      const response = await fetch(`/api/v1/musea/${museumId}`, options);
      const responseJson = await response.json();
      if (responseJson) {
        console.log(responseJson);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { classes } = this.props;
    const { museum: values } = this.state;
    return (
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Formik
            render={props => (
              <Form {...props} categories={this.state.categories} />
            )}
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => this.submit(values, actions)}
            enableReinitialize={true}
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(MuseumForm);
