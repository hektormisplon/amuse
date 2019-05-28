import React, { Component } from "react";

import Api from "../../services";
import MuseaMap from "../../components/musea-map";

class MuseaPage extends Component {
  state = {
    musea: []
  };

  componentWillMount() {
    // this.loadPosts(1);
  }

  loadMusea = pageIndex => {
    // console.log(pageIndex);
    // Api.findAllPosts({ limit: 3, skip: pageIndex })
    //   .then(data => {
    //     const prevPosts = this.state.posts;
    //     const newPosts = [...prevPosts, ...data.docs];
    //     this.setState(prevState => ({
    //       ...prevState,
    //       posts: newPosts,
    //       pagination: {
    //         limit: data.limit,
    //         page: data.page,
    //         pages: data.pages,
    //         total: data.total
    //       }
    //     }));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  goToMuseumDetailPage = id => {
    this.props.history.push(`/musea/${id}`);
  };

  render() {
    const { musea } = this.state;
    return <React.Fragment />;
  }
}

export default MuseaPage;
