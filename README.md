# HtmlRenderer
Very simple html renderer. It DOES NOT use WebView. Instead it uses htmlparser2 under the hood and transform the parsed dom tree to react native views.
For now it works well with tags

1. <p></p>
2. <i></i>
3. <b></b>
4. <br />

## Screenshot
![Yep, all this is native views](https://raw.githubusercontent.com/Slowyn/HtmlRenderer/master/screen.png)

## Running

```
git clone https://github.com/Slowyn/HtmlRenderer.git
cd HtmlRenderer
npm install
react-native run-ios
```

All should work fine :)