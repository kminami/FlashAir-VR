import config from './config';

function createAction(type, payload) {
  return { type, payload };
}

export function changeDir(dir) {
  return dispatch => {
    dispatch(createAction('CHANGE_DIR', dir));
    dispatch(getFileList(dir));
  };
};

export function showImage(path) {
  return createAction('SHOW_IMAGE', path);
};

export function hideImage() {
  return createAction('HIDE_IMAGE');
};

const mockFS = {
  '/': `WLANSD_FILELIST
,DCIM,0,16,9944,129
`,
  '/DCIM': `WLANSD_FILELIST
/DCIM,100__TSB,0,16,9944,129
/DCIM,0126_1.jpg,70408,32,17071,28040
/DCIM,0126_2.jpg,70408,32,17071,28040
/DCIM,0126_3.jpg,70408,32,17071,28040
/DCIM,0126_4.jpg,70408,32,17071,28040
/DCIM,0126_5.jpg,70408,32,17071,28040
/DCIM,0126_6.jpg,70408,32,17071,28040
/DCIM,0126_7.jpg,70408,32,17071,28040
/DCIM,0126_8.jpg,70408,32,17071,28040
/DCIM,0126_9.jpg,70408,32,17071,28040
/DCIM,0126_10.jpg,70408,32,17071,28040
/DCIM,0126_11.jpg,70408,32,17071,28040
/DCIM,0126_12.jpg,70408,32,17071,28040
/DCIM,0126_13.jpg,70408,32,17071,28040
/DCIM,0126_14.jpg,70408,32,17071,28040
/DCIM,0126_15.jpg,70408,32,17071,28040
/DCIM,0126_16.jpg,70408,32,17071,28040
/DCIM,0126_17.jpg,70408,32,17071,28040
/DCIM,0126_18.jpg,70408,32,17071,28040
/DCIM,0126_19.jpg,70408,32,17071,28040
/DCIM,0126_20.jpg,70408,32,17071,28040
`,
};
export function getFileList(dir) {
  if (config.mock) {
    const wlansd = mockFS[dir] ? mockFS[dir].split(/\n/g) : [];
    wlansd.shift();
    wlansd.pop()
    const files = convertFileList(wlansd);
    return createAction('UPDATE_FILES', files);
  }
  return dispatch => {
    dispatch(createAction('UPDATE_FILES', [])); // clear
    return fetch(`/command.cgi?op=100&DIR=${dir}`)
    .then(response => {
      if (response.status !== 200) {
        console.log('error', response.status);
      }
      response.text().then(body => {
        const wlansd = body.split(/\n/g);
        wlansd.shift();
        wlansd.pop()
        const files = convertFileList(wlansd);
        dispatch(createAction('UPDATE_FILES', files));
      });
    });
  };
};

function convertFileList(wlansd) {
  return wlansd.map(a => a.split(',')).map(elements => {
    return {
      r_uri: elements[0],
      fname: elements[1],
      fsize: Number(elements[2]),
      attr:  Number(elements[3]),
      fdate: Number(elements[4]),
      ftime: Number(elements[5]),
    }
  });
}
