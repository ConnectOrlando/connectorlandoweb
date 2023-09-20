import * as React from 'react';
import Masonry from 'react-masonry-css';
import imageGridStyles from '@app/components/imageGrid/imageGrid.module.css';
import PropTypes from 'prop-types';

ImageGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberOfColumns: PropTypes.number,
};

const defaultBreakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function ImageGrid({ photos, numberOfColumns }) {
  if (photos == null) {
    throw new Error('Image grid component requires photos array');
  }

  const breakpointColumns = numberOfColumns
    ? { default: numberOfColumns }
    : defaultBreakpointColumns;

  return (
    <Masonry
      className={imageGridStyles.grid}
      breakpointCols={breakpointColumns}
      columnClassName={imageGridStyles.column}
    >
      {photos.map((photo, index) => (
        <img src={photo} key={index} alt=""></img>
      ))}
    </Masonry>
  );
}
