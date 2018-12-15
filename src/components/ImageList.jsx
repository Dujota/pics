import React from 'react';

const ImageList = props => {
  // use destructuring to only pull the properties from the arg of the map which happens to be an obj passed in from the api call
  const images = props.images.map(({ description, id, urls }) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
