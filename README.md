# Super Simple jQuery Slideshow

Congratualtions! You've encountered one of the simplest _(and possible most fragile)_ jQuery _gallery slider_ plugins in this section of our galaxy.

This plugin will give you an image gallery sliding functionality by wrapping a div, with an id of _gallery_, with however many `img` tags you have inside it, and provide buttons to shuffle through the images.

Install:

```bash
  $ npm install super-simple-jquery-slideshow
```

Set up your images inside the div:

```html
<div id="gallery">
  <img src="image1" alt="text" />
  <img src="image2" alt="text" />
  <img src="image3" alt="text" />
</div>
```

**(This plugin is of course dependant on jQuery!)**

Inside your index.js (or wherever you may see fit):

```js
import $ from 'jquery';
import 'super-simple-jquery-slideshow/slideshow.css';

window.jQuery = $;

$('document').ready(function() {
  require('super-simple-jquery-slideshow');
  $('#gallery').slideShow();
});
```

_If you are importing jQuery as an npm dependency you need to require it when the document is loaded._

You need to import the css file `slideshow.css`in order to get the correct behaviour. It will position the images `absolute` and hide the non-active images.

THIS IS ENOUGH TO GET THE SLIDER UP AND RUNNING.

This is the result in `html`:

```html
<div id="gallery" class="_slideshow-gallery">
  <div class="_slideshow-gallery__image-container ">
    <div class="_slideshow-gallery__image-container-inner ">
      <img src="image1" alt="text" class="_slideshow-gallery__image" /><img
        src="image2"
        alt="text"
        class="_slideshow-gallery__image"
      /><img src="image3" alt="text" class="_slideshow-gallery__image" />
    </div>
  </div>

  <div class="_slideshow-gallery__slider ">
    <button id="_slideshow-gallery__prev-btn" class="">Previos</button>
    <button id="_slideshow-gallery__next-btn" class="">Next</button>
  </div>
</div>
```

It's not very impressive at first:
<img width="530" alt="Skjermbilde 2020-02-25 kl  22 26 28" src="https://user-images.githubusercontent.com/16366210/75289082-d9d2fb00-581d-11ea-96b5-04de3a71386e.png">

But you get to add classes to each of the added elements through an options object. Each class name represents an object key:
| Element | Class name |
|--------------------------------------------|---------------------|
| #gallery | galleryClass |
| .\_slideshow-gallery**image-container | containerClass |
| .\_slideshow-gallery**image-container-inner | innerContainerClass |
| .\_slideshow-gallery**slider | buttonMenu |
| .\_slideshow-gallery**prev-btn | prevBtnClass |
| .\_slideshow-gallery\_\_next-btn | nextBtnClass |
| <img>
