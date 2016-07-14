import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Clock from '../components/guide/clock';
import ChannelListings from '../components/guide/channelListings';
import EpisodeListings from '../components/guide/episodeListings';

import { updateVideo } from '../actions/player';

import Data from '../database/data';

export class Guide extends Component {

  render () {
    return (
      <div className='mars-guide'>
        <div className='guide-pane'>
          <div className='guide-header'>
            <div className='timeline'>
              <div className='left'>
                <Clock />
              </div>
              <div className='right'></div>
            </div>
            <div className='last-watched'></div>
          </div>
          <div className='guide-scroller'>
            <div className='guide-viewport'>
              <ChannelListings left='left' categories={Object.keys(Data)} data={Data} />
              <EpisodeListings
                right='right'
                updateVideo={this.props.updateVideo}
                categories={Object.keys(Data)}
                data={Data} />
              <div className='footer'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps (state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps, {updateVideo: updateVideo})(Guide);
