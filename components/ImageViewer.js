import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
} from 'react-360';

export default class ImageViewer extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Image source={{ uri: this.props.imagePath }} style={styles.image} />
        <VrButton onClick={this.props.hideImage}>
          <Text>Close</Text>
        </VrButton>
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
  image: {
    width: 1200,
    height: 700,
  },
});
