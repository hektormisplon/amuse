import React, { Component } from "react";

import "./MuseaMap.sass";

class MuseaMap extends Component {
  markerDetailHandler = (ev, id) => {
    ev.preventDefault();
    if (typeof this.props.onReadMore === "function") {
      this.props.onReadMore(id);
    }
  };
  render() {
    const { musea } = this.props;
    return (
      <React.Fragment>
        {musea && musea.map((museum, index) => console.log(museum))}
      </React.Fragment>
    );
  }
}

export default MuseaMap;
