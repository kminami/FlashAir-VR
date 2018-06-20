import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import ImageViewer from './ImageViewer'
import FileList from './FileList'

class Top extends React.Component {
  componentWillMount() {
    this.props.updateFiles(this.props.dir);
  }
  render() {
    if (this.props.imagePath) {
      return <ImageViewer imagePath={this.props.imagePath} hideImage={this.props.hideImage} />;
    }
    return <FileList dir={this.props.dir} files={this.props.files} changeDir={this.props.changeDir} showImage={this.props.showImage} />;
  }
};

const mapStateToProps = state => {
  return {
    dir: state.dir,
    imagePath: state.imagePath,
    files: state.files,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeDir: dir => dispatch(actions.changeDir(dir)),
    showImage: path => dispatch(actions.showImage(path)),
    hideImage: () => dispatch(actions.hideImage()),
    updateFiles: dir => dispatch(actions.getFileList(dir)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Top);
