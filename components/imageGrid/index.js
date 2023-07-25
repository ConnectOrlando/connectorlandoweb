import * as React from 'react';
import Masonry from 'react-masonry-css';
import imageGridStyles from '@app/components/imageGrid/imageGrid.module.css';
import { Segment } from 'semantic-ui-react';

export function ImageGrid({ numOfRows, photos }) {
  if (numOfRows == null) {
    throw new Error('Image grid component requires numOfRows');
  }
  if (photos == null) {
    throw new Error('Image grid component requires photos array');
  }
  return (
    <Segment basic textAlign="center">
      <Masonry
        className={imageGridStyles.fullWidth}
        breakpointCols={numOfRows}
        columnClassName={imageGridStyles.fullWidth}
      >
        {photos.map((photo, index) => (
          <img src={photo} key={index} height={100} width={100}></img>
        ))}
      </Masonry>
    </Segment>
  );
}
