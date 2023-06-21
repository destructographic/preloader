// declare an array of assets for preload
const assetsForPreload = [
    { src: 'assets/potato00.png', type: 'image' },
    { src: 'assets/potato01.png', type: 'image' },
    { src: 'assets/potato02.png', type: 'image' },
    { src: 'assets/potato03.png', type: 'image' },
   // { src: 'assets/track01.mp3', type: 'sound' },
   // { src: 'assets/track02.mp3', type: 'sound' },
 ];


 
// get the loader div so we can show or hide it
 const loader = document.getElementById('curtain');

// when page is loaded it will be covered by "loading..." div
loader.style.display = 'block'; 



// object to store preloaded assets
const preloadedAssets = {};



// preload the assets
function preloadAssets(callback) {
 let assetsLoaded = 0;
 const totalAssets = assetsForPreload.length;
}
// preload the assets
function preloadAssets(callback) {
  let assetsLoaded = 0;
  const totalAssets = assetsForPreload.length;
  const promises = []; // array for promises

  // loop through the asset
  assetsForPreload.forEach(asset => {
    // make sound or image element based on asset type
    console.log(`loading: ${asset.src}`);
    let element;
    if (asset.type === 'image') {
      element = new Image();
    } else if (asset.type === 'sound') {
      element = new Audio();
    }

    // set source of the element to preload asset
    element.src = asset.src;

    // create a promise for each asset
    const promise = new Promise((resolve, reject) => {
      // resolve the promise when asset loaded
      element.addEventListener('load', () => {
        preloadedAssets[asset.src] = element;
        console.log(`loaded: ${asset.src}`);
        resolve();
      });

      // if error loading asset, reject promise
      element.addEventListener('error', () => {
        console.log(`Error loading asset: ${asset.src}`);
        reject();
      });
    });

    // add the promise to the promises array
    promises.push(promise);
  });




// callback when all promises are resolved
Promise.all(promises)
.then(() => {
  console.log("All preload assets are loaded!");
  callback();
})
.catch(() => {
  console.log("There was an error loading assets.");
});
}









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
