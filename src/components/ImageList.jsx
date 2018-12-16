import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  // use destructuring to only pull the properties from the arg of the map which happens to be an obj passed in from the api call
  const images = props.images.map(image => {
    return <ImageCard image={image} key={image.id} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
