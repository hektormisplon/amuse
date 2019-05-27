import React, { Component } from 'react'

export default class GoldenLayout extends Component {
  render() {
    return (
      <div className={'container_full'}>
        <div className={'golden-grid_2'}>
          <main>
            {this.props.children}
          </main>
          </div>
          <div className="circle"></div>
      </div>
    )
  }
}
