import Masonry from 'react-masonry-css';
import imageGridStyles from '@app/components/imageGrid/imageGrid.module.css';
import PropTypes from 'prop-types';
import { createStyles } from '@mantine/core';
import cx from 'classnames';

ImageGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberOfColumns: PropTypes.number,
  spacing: PropTypes.number,
};

ImageGrid.defaultProps = {
  spacing: 10,
};

const defaultBreakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function ImageGrid({ photos, numberOfColumns, spacing }) {
  const useStyles = createStyles(() => ({
    columnSpacing: {
      paddingLeft: `${spacing}px`,
    },
  }));
  const { classes } = useStyles();

  const breakpointColumns = numberOfColumns
    ? { default: numberOfColumns }
    : defaultBreakpointColumns;

  return (
    <Masonry
      className={imageGridStyles.grid}
      breakpointCols={breakpointColumns}
      columnClassName={cx(imageGridStyles.column, classes.columnSpacing)}
    >
      {photos.map((photo, index) => (
        <img
          src={photo}
          key={index}
          alt=""
          style={{ marginBottom: `${spacing}px` }}
        ></img>
      ))}
    </Masonry>
  );
}
