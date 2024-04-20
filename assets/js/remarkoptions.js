remark.macros.scale = function (percentage) {
    const url = this
    return '<img src="' + url + '" style="width: ' + percentage + '" />'
}

/*
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
})
let sURL = params.p || 'praesentation.md'
if (!sURL.endsWith('.md'))
  sURL += '.md'
*/
let sURL = 'praesentation.md'
if (document.getElementById("source") != null)
  sURL = null

const slideshow = remark.create({
    // Set the slideshow display ratio
    // Default: '4:3'
    // Alternatives: '16:9', ...
    ratio: '4:3',

    ...(sURL != null && {sourceUrl: sURL}),

    // Navigation options
    navigation: {
        // Enable or disable navigating using scroll
        // Default: true
        // Alternatives: false
        scroll: true,

        // Enable or disable navigation using touch
        // Default: true
        // Alternatives: false
        touch: true,

        // Enable or disable navigation using click
        // Default: false
        // Alternatives: true
        click: false
    },

    // Customize slide number label, either using a format string..
    slideNumberFormat: 'Slide %current% of %total%',
    // .. or by using a format function
    slideNumberFormat: function (current, total) {
        return '' + current + '/' + total;
    },

    // Enable or disable counting of incremental slides in the slide counting
    countIncrementalSlides: true
})

// don't let mermaid automatically load on start
mermaid.initialize({
    startOnLoad: false,
    cloneCssStyles: false,
  })

  
  function initMermaidInSlide(slide) {
    var slideIndex = slide.getSlideIndex();
    // caution: no API to get the DOM element of current slide in remark, this might break in the future
    var currentSlideElement = document.querySelectorAll(".remark-slides-area .remark-slide")[slideIndex];
    var currentSlideMermaids = currentSlideElement.querySelectorAll(".mermaid");
    if (currentSlideMermaids.length !== 0) {
      mermaid.init(undefined, currentSlideMermaids);
    }
  }
  
  // first starting slide won't trigger the slide event, manually init mermaid
 // initMermaidInSlide(slideshow.getSlides()[slideshow.getCurrentSlideIndex()])
  // on each slide event, trigger init mermaid
  slideshow.on('afterShowSlide', initMermaidInSlide);
