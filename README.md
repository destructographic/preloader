# preloader

Preload image and sound assets via JS.

Place desired assets to be preloaded into the "assetsForPreload" array. While loading, main content will be curtained by "loader" div which is z-indexed above @ 9999. When the assets are finished loading, the "loader" div will hide to reveal the underlying "main-content" div.
