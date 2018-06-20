import React from 'react';
import {
  StyleSheet,
  Text,
  VrButton,
  Image,
} from 'react-360';

export default class FileButton extends React.Component {
  getThumbnailURI() {
    const { file } = this.props;
    if ( file.attr & 0x10 ) {
      // dir
      return null;
    } else {
      const array = file.fname.split('.');
      const ext = array.length >= 2 ? array[array.length - 1] : '';
      if ( ext.toUpperCase() == 'JPG' ) {
        // .jpg
        return `/thumbnail.cgi?${file.r_uri}/${file.fname}`;
      } else {
        // other
        return null;
      }
    }
  }
  onClick = () => {
    const { file, changeDir, showImage } = this.props;
    if ( file.attr & 0x10 ) {
      // dir
      changeDir(`${file.r_uri}/${file.fname}`);
    } else {
      showImage(`${file.r_uri}/${file.fname}`);
    }
  }
  render() {
    const { file } = this.props;
    const uri = this.getThumbnailURI();
    return (
      <VrButton onClick={this.onClick} style={styles.box}>
        {uri ? (
          <Image source={{ uri }} style={styles.thumbnail} />
        ) : (
          <Text style={styles.label}>{file.fname}</Text>
        )}
      </VrButton>
    );
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 200,
    height: 200,
  },
  box: {
    width: 200,
    height: 200,
    borderColor: '#639dda',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 30,
  },
});
