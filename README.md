# preloader.js

Preload image and sound assets via JS.

Place desired assets to be preloaded into the "assetsForPreload" array. While loading, main content will be curtained by "loader" div which is z-indexed above @ 9999. When the assets are finished loading, the "loader" div will hide to reveal the underlying "main-content" div.

For demonstration purposes this repository has a few images to load. Most likely your internet connection is too fast though and you may not even see the loading screen. To solve this problem, use your browser's developer tools to disable cache and simulate a slower connection (aka throttle). In Chrome/Chromium browser throttling can be accomplished as pictured below. 
<p align="center">
	Open your browser's developer tools (usually F12 button). Click "Network".<br />
  <img width="460" height="300" src="https://destructographic.github.io/preloader/assets/throttle1.png"> <br />
	Then disable cache and select a slower connection such as "Good 3G": <br />
  <img width="460" height="300" src="https://destructographic.github.io/preloader/assets/throttle2.png"> <br />
  Press reload (usually F5 button). <br />
  ![this is alt text](https://destructographic.github.io/preloader/assets/potato00.png?raw=true)
</p>
<img src="./assets/potato00.png">

https://destructographic.com/preloader/blob/2a92193bf42560ec461531874e439bdd16c54926/assets/potato00.png