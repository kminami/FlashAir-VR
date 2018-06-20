import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-360';

import UpButton from './UpButton'
import FileButton from './FileButton'

export default class ImageList extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.greeting}>
          FlashAir VR - {this.props.dir}
        </Text>
        <View style={styles.list}>
          <UpButton dir={this.props.dir} changeDir={this.props.changeDir} />
          {this.props.files.map(file => (
            <FileButton
              key={file.fname} file={file}
              changeDir={this.props.changeDir}
              showImage={this.props.showImage}
            />
          ))}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1200,
    height: 720,
    //backgroundColor: 'rgba(255, 255, 255, 0.4)',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  greeting: {
    fontSize: 30,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
