# FlashAir VR

## 使い方

https://github.com/kminami/FlashAir-VR/releases からzipファイルをダウンロード・展開し、FlashAirVRフォルダの中身を丸ごとFlashAirのルートにコピーします。
WebブラウザでFlashAirのWebサーバにアクセスすれば、VR空間内でコンテンツを参照することができます。

## How to use

```bash
$ npm install
$ npm run bundle
$ cp build/index.html $FLASHAIR/SD_WLAN/List.htm
$ cp build/*.js $FLASHAIR/
$ cp -r static_assets $FLASHAIR/
$ open http://flashair
```

## License

Copyright (c) 2018 Keisuke Minami

MIT
