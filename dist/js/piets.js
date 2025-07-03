$(function () {
  // ScrollSmoother.create({
  //   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //   effects: true, // looks for data-speed and data-lag attributes on elements
  //   smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  // });

  // Mobile Break POint
  var mediaQueryList = window.matchMedia("(min-width: 1024px)");
  // 2 Column Timeline Animations
  var imageTop = document.querySelector(".featured_image_top img");
  var title_area = document.querySelector(".title_area");

  // Nav Scroll

  const panels = document.querySelectorAll(".dark-panel");
  const nav = document.querySelector(".header");

  panels.forEach((panel) => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: panel,
      start: "top 60px",
      end: "bottom 80px",
      onEnter: () => {
        nav.classList.add("nav-color-white");
      },

      onEnterBack: () => {
        nav.classList.add("nav-color-white");
      },
      // onLeaveBack: () => {
      //   nav.classList.remove("nav-color-white");
      // },
      onLeave: () => {
        nav.classList.remove("nav-color-white");
      },
    });
  });

  if (mediaQueryList.matches) {
    // Nav Button Style per component
    if (doesClassExist("nav_button_has_border")) {
      const nbhbPanels = document.querySelectorAll(".nav_button_has_border");

      nbhbPanels.forEach((panel) => {
        const scrollTrigger = ScrollTrigger.create({
          trigger: panel,
          start: "top 60px",
          end: "bottom 80px",
          onEnter: () => {
            nav.classList.add("button-is-border");
          },
          onEnterBack: () => {
            nav.classList.add("button-is-border");
          },
          onLeaveBack: () => {
            nav.classList.remove("button-is-border");
          },
          onLeave: () => {
            nav.classList.remove("button-is-border");
          },
        });
      });
    }


    // Large balls
    // if (doesClassExist("flying_ball_animations")) {
    //   gsap.from(".flying_ball_animations img", {
    //     y: "-95vh",
    //     x: "-7%",
    //     scaleX: 1.5,
    //     scaleY: 1.5,
    //     ease: "linear",
    //     scrollTrigger: {
    //       trigger: ".large_cta_container",
    //       start: "top 100%",
    //       end: "top center",
    //       scrub: true,
    //     },
    //   });
    // }

    // Softphone Linkup Component
    // Scroll Down
    if (doesClassExist("softphone_linkup_component")) {
      // gsap.to(".softphone_linkup_component .layer_5", {
      //   rotation: -270,
      //   transformOrigin: "50% 50%",
      //   ease: "linear",
      //   scrollTrigger: {
      //     trigger: ".softphone_linkup_component",
      //     start: "top center",
      //     end: "bottom -100%",
      //     scrub: true,
      //   },
      // });
      gsap.from(".softphone_linkup_component .layer_3", {
        y: "-60px",
        ease: "linear",
        scrollTrigger: {
          trigger: ".softphone_linkup_component",
          start: "top 40%",
          end: "center 60%",
          scrub: true,
          // markers: true,
        },
      });
      gsap.from(".softphone_linkup_component .layer_1", {
        y: "60px",
        ease: "linear",
        scrollTrigger: {
          trigger: ".softphone_linkup_component",
          start: "top 40%",
          end: "center 60%",
          scrub: true,
        },
      });

      // Scroll UP
      gsap.to(".softphone_linkup_component .layer_3", {
        y: "-60px",
        ease: "linear",
        scrollTrigger: {
          trigger: ".softphone_linkup_component",
          start: "top -200px",
          end: "bottom 80%",
          scrub: true,
        },
      });
      gsap.to(".softphone_linkup_component .layer_2", {
        y: "-40px",
        ease: "linear",
        scrollTrigger: {
          trigger: ".softphone_linkup_component",
          start: "top -200px",
          end: "bottom 80%",
          scrub: true,
        },
      });
      gsap.to(".softphone_linkup_component .layer_1", {
        y: "10px",
        ease: "linear",
        scrollTrigger: {
          trigger: ".softphone_linkup_component",
          start: "top -200px",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }

    // Banner
    if (doesClassExist("two_column_image_timeline_top")) {
      gsap.to(imageTop, {
        autoAlpha: 0,
        y: "10%",
        width: "100%",
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_top",
          start: "top 65%",
          end: "40% 75%",
          scrub: true,
        },
      });
      gsap.to(title_area, {
        autoAlpha: 1,
        visibility: "visible",
        y: 0,
        // duration: 4,
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_top",
          start: "top 60%",
          end: "20% 50%",
          scrub: true,
        },
      });
    }

    // 2 Column Timeline
    if (doesClassExist("two_column_image_timeline_inner")) {
      gsap.to(".pinnableSection", {
        scrollTrigger: {
          trigger: ".two_column_image_timeline_inner",
          end: "bottom 120%",
          toggleActions: "play none none reverse",
          pin: true,
          pin: ".pinnableSection",
          pinSpacing: false,
        },
        duration: 0.4,
      });

      const tctRows = document.querySelectorAll(
        ".two_column_image_timeline_wrapper .timeline_row"
      );
      const tctOthers = document.querySelectorAll(
        ".two_column_image_timeline_wrapper .pinnableSection_img"
      );

      tctRows.forEach((row, i) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top center",
          end: "bottom center",
          onEnter: () => tctOthers[i].classList.add("active"),
          onLeave: () => tctOthers[i].classList.remove("active"),
          onEnterBack: () => tctOthers[i].classList.add("active"),
          onLeaveBack: () => tctOthers[i].classList.remove("active"),
        });
      });


    }
    /////////

    if(mediaQueryList){
      if(doesClassExist("two_column_image_timeline_simple")) {
        setTimeout(function() {
          console.log('setting it now');
          $('.two_column_image_timeline_simple .timeline_row .container .col_right').css('margin-bottom', '-150px');
        }, 1000);
      }
    }

    // 2 Column Timeline Simpole

    if (doesClassExist("title_area_image")) {
      gsap.to(".title_area_image", {
        autoAlpha: 0,
        y: "650px",
        x: "200px",
        width: "100%",
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_simple ",
          start: "top top",
          end: "20% 40%",
          scrub: true,
        },
      });
    }

    if (doesClassExist("space_first_item")) {
      gsap.from(".space_first_item", {
        y: "20%",
        ease: "linear",
        scrollTrigger: {
          trigger: ".timeline_simple",
          start: "top center%",
          end: "top top",
          scrub: true,
        },
      });
    }
    if (doesClassExist("tctsPinnableSection")) {
      gsap.to(".tctsPinnableSection", {
        scrollTrigger: {
          trigger: ".timeline_simple",
          end: "bottom 120%",
          toggleActions: "play none none reverse",
          pin: true,
          pin: ".tctsPinnableSection",
          pinSpacing: false,
        },
        duration: 0.4,
      });

      const tctsRows = document.querySelectorAll(
        ".timeline_simple .timeline_row"
      );
      const tctsOthers = document.querySelectorAll(
        ".timeline_simple .pinnableSection_img"
      );

      tctsRows.forEach((row, i) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top center",
          end: "bottom center",
          // markers: true,
          onEnter: () => tctsOthers[i].classList.add("active"),
          onLeave: () => tctsOthers[i].classList.remove("active"),
          onEnterBack: () => tctsOthers[i].classList.add("active"),
          onLeaveBack: () => tctsOthers[i].classList.remove("active"),
        });
      });
      gsap.to(".tlsmp_first", {
        // y: "50vh",
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_simple",
          start: "top top",
          end: "40% 120%",
          scrub: true,
          // markers: true,
          onEnter: () => tctsOthers[i].classList.add("active"),
          onLeave: () => tctsOthers[i].classList.remove("active"),
        },
      });
      gsap.from(".tlsmp_first img", {
        scaleX: 1.5,
        scaleY: 1.5,
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_simple",
          start: "top top",
          end: "40% 90%",
          scrub: true,
        },
      });
    }

    /////////

    // Incentive Scroll
    // if (doesClassExist("incentive_block")) {
    //   gsap.to(".incentive_block", {
    //     left: "40%",
    //     ease: "power2.out",
    //     margin: "0",
    //     scrollTrigger: {
    //       trigger: ".incentive_panel",
    //       start: "top top",
    //       pin: true,
    //       pinSpacing: true,
    //       scrub: true,
    //     },
    //   });
    //   gsap.to(".incentive_panel .title_area", {
    //     ease: "power2.out",
    //     y: "-200px",
    //     autoAlpha: "0",
    //     scrollTrigger: {
    //       trigger: ".incentive_panel",
    //       start: "top top",
    //       scrub: true,
    //     },
    //   });
    //   gsap.to(".incentive_panel .incentive_cta", {
    //     ease: "power2.out",
    //     y: "200px",
    //     autoAlpha: "0",
    //     scrollTrigger: {
    //       trigger: ".incentive_panel",
    //       start: "top top",
    //       scrub: true,
    //     },
    //   });
    // }
  } else {
    if (doesClassExist("title_area_image")) {
      gsap.to(".title_area_image", {
        autoAlpha: 0,
        y: "650px",
        x: "200px",
        width: "100%",
        ease: "linear",
        scrollTrigger: {
          trigger: ".two_column_image_timeline_simple ",
          start: "top top",
          end: "20% 40%",
          scrub: true,
        },
      });
    }
    if (doesClassExist("two_column_image_timeline_top")) {
      // gsap.to(imageTop, {
      //   autoAlpha: 0,
      //   width: "auto",
      //   height: "60vh",
      //   y: 0,
      //   x: "20%",
      //   scrollTrigger: {
      //     trigger: ".two_column_image_timeline_top",
      //     start: "top 65%",
      //     end: "40% 55%",
      //     scrub: true,
      //   },
      // });
      // gsap.to(title_area, {
      //   autoAlpha: 1,
      //   visibility: "visible",
      //   y: 0,
      //   scrollTrigger: {
      //     trigger: ".two_column_image_timeline_top",
      //     start: "top 50%",
      //     end: "20% 50%",
      //     scrub: true,
      //   },
      // });
    }
  }

  // Video Modal
  if (doesClassExist("video_panel")) {
    var videoId = $("#video-container").data("video");

    // var videoId = 'VIDEO_ID';

    // Construct the YouTube embed URL with autoplay enabled
    var embedUrl =
      "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1";

    // Create the iframe element and set its attributes
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", embedUrl);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("title", "Popup Video");
    iframe.setAttribute("allowfullscreen", "");

    // Append the iframe to the background video container
    document.getElementById("video-container").appendChild(iframe);


    $(window).on("blur", function () {
      iframe.setAttribute("allow", "autoplay");
    });

    // // Resume playing the video when the window regains focus
    // $(window).on("focus", function () {
    //   player.play();
    // });

    var videoOpen = document.querySelector(".watch_video_open");
    var videoClose = document.querySelector(".watch_video_close");

    $(videoOpen).on("click", function () {
      $("body").addClass("video_active");
      $(".video_modal").addClass("active");
    });
    $(videoClose).on("click", function () {
      $(".video_modal").removeClass("active");
      $("body").removeClass("video_active");
      // player.pause();
    });
  }

  // Page Take Over Banner

  var outerWrapper = document.querySelector(".take_over_banner_gradient");

  var swiperDots = new Swiper(".page_take_over_slider_dots", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 8,
    watchSlidesProgress: true,
  });

  var swiper = new Swiper(".page_take_over_slider_images", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiperDots,
    },
  });

  swiper.on("slideChange", function () {
    // Get the current active slide
    var activeSlide = swiper.slides[swiper.activeIndex];

    // Get the desired background color from the data attribute
    var bgColor = activeSlide.getAttribute("data-bg-color");

    // Get the outer wrapper
    var outerWrapper = document.querySelector("#take_over_banner_gradient");

    // Update the background color of the outer wrapper
    // outerWrapper.style.backgroundColor = bgColor;
    outerWrapper.style.background = "linear-gradient(0deg, "+bgColor+" 50%, #201632 85%)";

  });

  // FAQ Accordion
  $(".faq_title").click(function () {
    if ($(this).parent(".faq_row").hasClass("active")) {
      $(this).parent(".faq_row").removeClass("active");
      return;
    }
    $(".faq_row").removeClass("active");

    $(this).parent(".faq_row").addClass("active");
  });

  // Incentive Panel

  const blocks = document.querySelectorAll(".incentive_block_clickable");
  const firstBlock = document.querySelector(".block1");
  const build_it_yourself_total = document.querySelector(".build_it_yourself_total");
  const cloud_softphone_total = document.querySelector(".cloud_softphone_total");

// Function to format numbers as currency
  const formatCurrency = (number) => {
    return '$' + number.toLocaleString('en-US');
  };

// Function to update totals based on blocks that have the 'active' class
  const updateTotals = () => {
    let buildItYourselfTotalAmount = 0;
    let cloudSoftphoneTotalAmount = 0;

    const firstBlockAmount = parseFloat(firstBlock.getAttribute('data-amount') || '0');
    const firstCloudAmount = parseFloat(firstBlock.getAttribute('data-cloud_amount') || '0');

    // Always include the first block in the total calculation
    buildItYourselfTotalAmount += firstBlockAmount;
    cloudSoftphoneTotalAmount += firstCloudAmount;

    blocks.forEach(block => {
      if (block.classList.contains("active")) {
        const builtItYourselfAmount = parseFloat(block.getAttribute('data-amount') || '0');
        const cloudSoftphoneAmount = parseFloat(block.getAttribute('data-cloud_amount') || '0');

        buildItYourselfTotalAmount += builtItYourselfAmount;
        cloudSoftphoneTotalAmount += cloudSoftphoneAmount;
      }
    });

    // Add 🔥 if the cloud_softphone_total is greater than block-1's value
    const fireSymbol =  "<span>🔥</span>";

    // Update the display inside each total area with formatted currency
    build_it_yourself_total.querySelector('.total_block').innerHTML = formatCurrency(buildItYourselfTotalAmount);
    cloud_softphone_total.querySelector('.total_block').innerHTML = formatCurrency(cloudSoftphoneTotalAmount) + fireSymbol;
  };

// Initialize totals
  if (doesClassExist("total_block")) {
    updateTotals();
  }

  blocks.forEach((block, index) => {
    block.addEventListener("click", () => {
      // Toggle the 'active' class on the clicked block
      block.classList.toggle("active");

      // Update totals based on the new set of active blocks
      updateTotals();
    });
  });


  // demo_on_demand_banner

  var swiperDots = new Swiper(".row_3_slider_slider", {
    loop: false,
    spaceBetween: 16,
    slidesPerView: 1.2,
    breakpoints: {
      480: {
        slidesPerView: 1.8,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
  // function openVideo(id) {
  //   console.log("asd");
  //   // const vid = document.querySelectorAll("#video_modal_" + id);

  //   // console.log(id);
  // }

  // csf_video_open;
  const csf_videos = document.querySelectorAll(".csf_video_open");
  csf_videos.forEach((block, index) => {
    // console.log(block.dataset.videoid);
    block.addEventListener("click", () => {
      let vid = document.querySelectorAll(block.dataset.videoid);
      vid[0].classList.add("active");
      // console.log(vid[0]);
    });
  });

  // const csf_video_close = document.querySelectorAll(".csf_watch_video_close");
  // csf_video_close.forEach((block, index) => {
  //   // console.log(block.dataset.videoid);
  //   block.addEventListener("click", () => {
  //     var iframeSrc = $("iframe").attr("src");
  //     $("iframe").attr("src", "");
  //     $("iframe").attr("src", iframeSrc);
  //
  //     $(".csf_video_modal").removeClass("active");
  //     // console.log(vid[0]);
  //   });
  // });

  $('.csf_watch_video_close').on('click', function(){
    var wrapper = $(this).closest('.csf_video_modal');
    var iframe = wrapper.find('iframe');
    var video = wrapper.find('video');
    var iframeSrc = iframe.attr('src');
    iframe.attr('src', '');
    iframe.attr('src', iframeSrc);
    if(video.length > 0){
      var videoSrc = video.attr('src');
      video.attr('src', '');
      video.attr('src', videoSrc);
    }
    wrapper.removeClass('active');
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      $(".csf_video_modal").removeClass("active");
    }
  });

  // Blog posts
  if (!mediaQueryList.matches) {
    const post_blocks = document.querySelectorAll(".post_block");

    for (let i = 0; i < post_blocks.length; i++) {
      if ((i + 1) % 4 === 1) {
        post_blocks[i].classList.add("large_card");
      } else {
        post_blocks[i].classList.add("small_card");
      }
    }
  }

  if ($('.acro_form_6_wrapper').length === 0) {
    // If it doesn't exist, initialize selectric
    $("select").selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    });
  }

  // Make recomended posts small
  if (!mediaQueryList.matches) {
    const recomended = document.querySelectorAll(
      ".post_recomended .post_block"
    );
    for (let i = 0; i < recomended.length; i++) {
      recomended[i].classList.add("small_card");
    }
  }

  //
});
