
$(function () {
  
		var controller = new ScrollMagic.Controller(); // 1. create a scroll container

		// tween 1: define movement of panels
		var tween1 = new TimelineMax()
			.to("#slideContainer", 1, {x: "-25%"})
  		.to("#slideContainer", 1, {x: "-50%"})
  		.to("#slideContainer", 1, {x: "-75%"})
      .to(".last-scene", 1, {y: "-100%"})
    
		// scene 1: create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: 0,
				duration: "500%"
			})
			.setPin("#pinContainer")
			.setTween(tween1)
      .addIndicators() 
			.addTo(controller);

    // build tween for animations on sectionTwo
    var tween2 = new TimelineMax ()
      .add([
        TweenMax.fromTo("#parallaxTwo .layer1", 1, {
          scale:0.5, left: 0
        }, {
          scale:1, left: "-25%"
        }),
        TweenMax.fromTo("#parallaxTwo .layer2", 1, {
          opacity: 0, left: 0
        }, {
          opacity:1, left: "-50%"
        })
      ]);

    // build scene for tween2
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer", 
      duration: "200%", 
      offset: "200%" // durations and offsets are based on the timing of your panels built on tween1
    })
    .setTween(tween2)
    .addTo(controller); //add this scene to the same scroll container
  
    // build tween for animations on sectionThree
    var tween3 = new TimelineMax ()
      .add([
        TweenMax.fromTo("#parallaxThree .layer1", 1, {
          scale:10, left: 0
        }, {
          scale:0, left: "-50%"
        }),
        TweenMax.fromTo("#parallaxThree .layer2", 1, {
          opacity: 1, scale:0, left: 0
        }, {
          opacity:0, scale:2, left: "-30%"
        })
      ]);

    // build scene for tween3
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer", 
      duration: "300%", 
      offset: "300%"
    })
    .setTween(tween3)
    .addTo(controller);
  
  
	// define images for Image Sequence feature. Google Drive doesn't allow embed. Used example images instead for this demo.
	var images = [
		"https://scrollmagic.io/assets/img/example_imagesequence_01.png",
		"https://scrollmagic.io/assets/img/example_imagesequence_02.png",
		"https://scrollmagic.io/assets/img/example_imagesequence_03.png",
		"https://scrollmagic.io/assets/img/example_imagesequence_04.png",
		"https://scrollmagic.io/assets/img/example_imagesequence_05.png",
		"https://scrollmagic.io/assets/img/example_imagesequence_06.png",
		"https://scrollmagic.io/assets/img/example_imagesequence_07.png"
	];

	// Cycle through the array above
	var obj = {curImg: 0};

	// Create tween
	var tween4 = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 3,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	// build scene for tween 4
  new ScrollMagic.Scene({
      triggerElement: "#pinContainer", 
      duration: "100%", 
  })
	.setTween(tween4)
	.addTo(controller);
  
  //tooltips handler
  tippy('.custom-tooltip', {
    trigger: 'click',
    interactive: true,
    animation: 'shift-away',
    content(reference) {
      const id = reference.getAttribute('data-template');
      const template = document.getElementById(id);
      return template.innerHTML;
    }
  });
  
  //lightbox handler
  $(document).on('click', '[data-lightbox]', lity);
  
});
