// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (3 images)
const slides = [
{ src: 'images/images01.jpg', 
  alt: 'FirstSet',
  caption: 'This was my first lego set I ever got as a kid.'
},
{ src: 'images/images02.jpg', 
  alt: 'LegoStarWars',
  caption: 'And from that point onward I always had a fondness for collecting.'
},
{ src: 'images/images04.jpg', 
  alt: 'Halo',
  caption: 'And then I would expand from Star Wars and Legos to other figure I like.'
},
{ src: 'images/images06.jpg', 
  alt: 'FirstTransformers',
  caption: 'My collection would expand and grow bringing in more brands like Transformers.'
},
{ src: 'images/images05.jpg', 
  alt: 'StarWarsLegion',
  caption: 'Then I got into tabletop with my friends which grew my collection more.'
},
{ src: 'images/images03.jpg', 
  alt: 'MoreLegos',
  caption: 'I would keep collecting more things through the years.'
},
{ src: 'images/images08.jpg', 
  alt: 'Autobots',
  caption: 'And even when I got to college I still collected more figures.'
},
{ src: 'images/images07.jpg', 
  alt: 'Aerialbots',
  caption: 'I like collecting because it lets me get a physical copies of my favorite characters.'
},
{ src: 'images/images10.jpg', 
  alt: 'Primes',
  caption: 'I also like to collect more obscure character that do not get many figures of them.'
},
{ src: 'images/images09.jpg', 
  alt: 'Battle',
  caption: 'I still collect figures to this day and enjoy putting them in poses and scenes.'
},
];
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
	const slide = slides[index];
	mainImage.src = slide.src; // replaces the image
	mainImage.alt = slide.alt; // replaces the alt of the image
	caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);