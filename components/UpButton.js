import React from 'react';
import {
  StyleSheet,
  Text,
  VrButton,
} from 'react-360';

export default class UpButton extends React.Component {
  onClick = () => {
    const { dir, changeDir } = this.props;
    const i = dir.lastIndexOf('/');
    const parentDir = dir.substr(0, i) || '/';
    changeDir(parentDir);
  };
  render() {
    if (this.props.dir == '/') {
      return null;
    }
    return (
      <VrButton onClick={this.onClick} style={styles.box}>
        <Text style={styles.label}>..</Text>
      </VrButton>
    );
  }
}

const styles = StyleSheet.create({
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
