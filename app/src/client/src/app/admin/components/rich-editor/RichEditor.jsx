import React from "react";
import PropTypes from "prop-types";
import { Editor } from "draft-js";

class RichEditor extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  onChange = editorState => {
    this.props.onChange("editorState", editorState);
  };

  render() {
    const { editorState } = this.props;
    return (
      <Editor
        editorState={editorState}
        onChange={this.onChange}
        placeholder="Tell a story..."
        ref="editor"
        spellCheck={true}
      />
    );
  }
}

export default RichEditor;
