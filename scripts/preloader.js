// declare an array of assets for preload
const assetsForPreload = [
    { src: 'assets/potato00.png', type: 'image' },
    { src: 'assets/potato01.png', type: 'image' },
    { src: 'assets/potato02.png', type: 'image' },
    { src: 'assets/potato03.png', type: 'image' },
   // { src: 'assets/track01.mp3', type: 'sound' },
   // { src: 'assets/track02.mp3', type: 'sound' },
 ];



 

// display or hide the loading curtain
function loaderCurtain(action) {
  const curtainElement = document.getElementById('curtain');
  if (action === 'show') {
    curtainElement.style.display = 'block';
  } else if (action === 'hide') {
    curtainElement.style.display = 'none';
  } else {
    console.error('Invalid action provided. Use "show" or "hide".');
  }
}






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





loaderCurtain('hide'); // Hide the curtain


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
