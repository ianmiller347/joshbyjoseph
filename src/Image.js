import React from 'react';

const Image = (props) => {

  return (
    <img
      alt={props.alt}
      style={
        {
          maxWidth: '100%',
          height: 'auto',
        }
      }
      {...props}
    />
  );
};

export default Image;