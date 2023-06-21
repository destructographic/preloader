// declare an array of assets for preload
const assetsForPreload = [
    { src: 'assets/potato00.png', type: 'image' },
    { src: 'assets/potato01.png', type: 'image' },
    { src: 'assets/potato02.png', type: 'image' },
    { src: 'assets/potato03.png', type: 'image' },
   // { src: 'assets/track01.mp3', type: 'sound' },
   // { src: 'assets/track02.mp3', type: 'sound' },
 ];

 

// object to store preloaded assets
const preloadedAssets = {};



// preload the assets
function preloadAssets(callback) {
 let assetsLoaded = 0;
 const totalAssets = assetsForPreload.length;

 // loop over each asset
 assetsForPreload.forEach(asset => {
   // make sound or image element based on asset type
   console.log(`loading: ${asset.src}`);
   let element;
   if (asset.type === 'image') {
     element = new Image();
   } else if (asset.type === 'sound') {
     element = new Audio();
   }

   // set the source of the element to preload the asset
   element.src = asset.src;

   // when an asset is loaded store it in preloadedAssets
   element.addEventListener('load', () => {
     preloadedAssets[asset.src] = element;
     console.log(`loaded: ${asset.src}`);

     assetsLoaded++;
     if (assetsLoaded === totalAssets) {
       // all assets are loaded so execute the callback function
       console.log("All preload assets are loaded!");
       callback();
     }
   });

   element.addEventListener('error', () => {
     console.log(`Error loading asset: ${asset.src}`);
     assetsLoaded++;
     if (assetsLoaded === totalAssets) {
       // all assets are loaded (including any that failed to load) so execute the callback function
       console.log("All preload assets are loaded!");
       callback();
     }
   });
 });
}




// call it as an object
const loader = document.getElementById('loader');

// when page is loaded it will be covered by "loading..." div
loader.style.display = 'block';

// ok to remove the "loading..." curtain now
preloadAssets(() => {
 loader.style.display = 'none';
 // ok to use preloadedAssets to access the assets now
});





// get the destination <div> element
const imageContainer = document.getElementById('image-container');

// create and append <img> elements
function displayPreloadedImages() {
 console.log("called: displayPreloadedImages");
 console.log("imageContainer:", imageContainer);
 console.log("preloadedAssets:", preloadedAssets);

 // get an array of the preloaded images
 const images = Object.values(preloadedAssets);

 // append the images to image-container
 images.forEach((image) => {
   imageContainer.appendChild(image);
 });
}


displayPreloadedImages();
