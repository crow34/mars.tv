import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class VideoSidebar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <section className='video-sidebar'>
      </section>
    );
  }
};

VideoSidebar.PropTypes = {

};

function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoSidebar);
