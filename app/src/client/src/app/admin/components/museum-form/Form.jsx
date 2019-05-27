import React, { Component } from "react";

// Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

// import RichEditor from "../rich-editor";

class Form extends Component {
  change = (name, e) => {
    e.persist();
    this.props.handleChange(e);
    this.props.setFieldTouched(name, true, false);
  };

  render() {
    const {
      values: { shortName, name, coords, categoryId },
      errors,
      touched,
      // handleChange,
      // handleSubmit,
      isValid,
      // setFieldTouched,
      categories,
      classes
    } = this.props;
    return (
      <form
        onSubmit={e => {
          this.props.handleSubmit(e);
        }}
        method="POST"
      >
        <TextField
          id="shortName"
          name="shortName"
          helperText={touched.shortName ? errors.shortName : ""}
          error={touched.shortName && Boolean(errors.shortName)}
          label="Museum abbreviation"
          value={shortName}
          onChange={this.change.bind(null, "shortName")}
          fullWidth
        />
        <TextField
          id="name"
          name="name"
          helperText={touched.name ? errors.name : ""}
          error={touched.name && Boolean(errors.name)}
          label="Synopsis"
          fullWidth
          multiline
          rows="4"
          value={name}
          onChange={this.change.bind(null, "name")}
        />
        <TextField
          id="coords"
          name="coords"
          helperText={touched.coords ? errors.coords : ""}
          error={touched.coords && Boolean(errors.coords)}
          label="Body"
          fullWidth
          multiline
          rows="10"
          value={coords}
          onChange={this.change.bind(null, "coords")}
        />
        <FormControl>
          <InputLabel htmlFor="categoryId">Category</InputLabel>
          <Select
            className={classes.selectCategories}
            value={categoryId}
            onChange={this.change.bind(null, "category")}
            inputProps={{
              name: "categoryId",
              id: "categoryId"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {categories &&
              categories.map((category, index) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={!isValid}
        >
          Create
        </Button>
      </form>
    );
  }
}

const styles = {
  selectCategories: {
    minWidth: 240
  }
};

export default withStyles(styles)(Form);
