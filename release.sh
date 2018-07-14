DIR=FlashAirVR
VERSION=v1.0.1
ZIPFILE=FlashAirVR-$VERSION.zip

npm install
npm run bundle
rm -rf $DIR
mkdir -p $DIR/SD_WLAN
cp build/index.html $DIR/SD_WLAN/List.htm
cp build/*.js $DIR/
cp -r static_assets $DIR/
rm -f $ZIPFILE
zip -r $ZIPFILE $DIR
