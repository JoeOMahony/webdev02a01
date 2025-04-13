images = document.querySelectorAll('img');
images = document.querySelectorAll('img');

let thisimage; // Avoid implicitly declaring as a global variable
let newimage; // Avoid implicitly declaring as a global variable
const mouseE = (evt) => {
    evt.target.className = "animate"
    thisimage = evt.target.getAttribute('src');
    newimage = thisimage.replace('thumbnail', 'bw')
    evt.target.setAttribute('src', newimage)
};

const mouseL = (evt) => {
    evt.target.className = "animate2"
    evt.target.setAttribute('src', thisimage)
};

images.forEach((item) => {
    item.addEventListener('mouseenter', mouseE);
    item.addEventListener('mouseleave', mouseL)
});

lightGallery(document.querySelector('#gallery'), {
    plugins: [lgZoom, lgThumbnail, lgFullscreen],
    thumbWidth: 80,
    controls: true,
    getCaptionFromTitleOrAlt: true,
    loop : true,
    actualSize: false,
    counter: true,
    fullScreen: true,
    zoom: true,
    mode: 'lg-fade'
});

/* IMAGE ROLLOVER 2
const mouseE = (evt) => {
    thisImage = evt.target.getAttribute('src');
    newImage = thisImage.replace('thumbnail', 'bw');
    evt.target.setAttribute('src', newImage);
};

const mouseL = (evt) => {
    evt.target.setAttribute('src', thisImage);
};

images.forEach((image) => {
    image.addEventListener('mouseenter', mouseE);
    image.addEventListener('mouseleave', mouseL);
})
*/
/* IMAGE ROLLOVER 1
let images = document.querySelectorAll('img');

images.forEach((image) => {
   image.addEventListener('mouseenter', (evt) => {
       evt.target.style.opacity = '.3';
   });

   image.addEventListener('mouseleave', (evt) => {
       evt.target.style.opacity = '1';
   });
});
*/