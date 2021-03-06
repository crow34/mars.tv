import React from 'react';
import _ from 'lodash';

import ChannelListing from './channelListing';

const ChannelListings = props => (
  <div className={props.left}>
    {_.map(props.categories, (category, key) => (
       <div key={key}>
         <div className='category'>
           {category}
         </div>
         <ChannelListing channel={props.data[category]} />
       </div>
     ))}
  </div>
);

export default ChannelListings;
