import React from 'react';

import { useHistory } from 'react-router-dom'

const InfoPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>Info</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate odio sed lectus ornare auctor. Etiam id ex quis nisl ultrices vehicula. Proin dapibus, erat porta tempor iaculis, mauris orci varius augue, non dapibus sapien dolor congue leo. Nullam aliquam fermentum magna. Aenean iaculis leo ac felis sodales, a bibendum ipsum luctus. Maecenas vitae congue sem. Ut consectetur felis quis volutpat dictum. Nulla ligula metus, placerat eget bibendum eu, hendrerit eu diam. Suspendisse at massa convallis, faucibus neque vitae, posuere nunc. Vivamus placerat sed purus in facilisis. Pellentesque ut augue elit. Pellentesque tempus erat euismod nisl rhoncus, vitae tincidunt dolor dignissim. Nam mattis ante vel metus convallis, eu luctus ex convallis. In eu consequat justo, at consectetur libero. Vivamus pulvinar arcu sodales laoreet tristique. Vivamus interdum mi tempor sem vestibulum, at pulvinar nisi vulputate.</p>
      <button className="btn" onClick={() => history.push('/')}>Go back</button>
    </>
  );
};

export default InfoPage;