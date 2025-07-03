var $ = jQuery;
(function ($) {

  document.querySelectorAll('.gfield_select').forEach(select => {
    select.addEventListener('change', function () {
      if (this.value) {
        this.classList.add('has-value');
      } else {
        this.classList.remove('has-value');
      }
    });
  });

  $(document).ready(function () {
    if ($('.acro_form_6_wrapper').length) {

      $('.acrobits_softphone-forms').addClass("remove-justify-content");

    }
  });



  $(document).on("click", "#gform_submit_button_8", function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'formSubmission',
      'formId': 8
    })
  });


  $(document).on("click", "#gform_submit_button_7", function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'formSubmission',
      'formId': 7
    })
  });


  $(document).on("click", "#gform_submit_button_6", function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'formSubmission',
      'formId': 6
    })
  });

  $(document).on("click", "#gform_submit_button_5", function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'formSubmission',
      'formId': 5
    })
  });

  var blockedDomains = [];
  if ($('.csf_video_modal').length) {
    $('.csf_video_modal').each(function () {
      $(this).insertAfter('#smooth-wrapper');
    });
  }

  $('.book-demo-cta').on('click', function (event) {
    // Prevent default action
    event.preventDefault();

    // Extract target id from href attribute
    var targetId = $('#stepped_form');

    // Use GSAP to smoothly scroll to the target with an offset
    gsap.to(window, { duration: 1, scrollTo: { y: targetId, offsetY: 90 } });
  });


  $('.stepFormCta').on('click', function (event) {
    // Prevent default action
    event.preventDefault();

    // Extract target id from href attribute
    var targetId = $('#stepped_form');

    // Use GSAP to smoothly scroll to the target with an offset
    gsap.to(window, { duration: 1, scrollTo: { y: targetId, offsetY: 90 } });
  });

  $('.glossary_list a').on('click', function (event) {
    // Prevent default action
    event.preventDefault();

    // Extract target id from href attribute
    var targetId = $(this).attr('href');

    // Use GSAP to smoothly scroll to the target with an offset
    gsap.to(window, { duration: 1, scrollTo: { y: targetId, offsetY: 90 } });
  });


  $('.page_cta_banner a').on('click', function (event) {
    // Prevent default action
    event.preventDefault();

    // Extract target id from href attribute
    var targetId = $(this).attr('href');
    if (targetId.includes('#')) {
      // Use GSAP to smoothly scroll to the target with an offset
      gsap.to(window, { duration: 1, scrollTo: { y: targetId, offsetY: 90 } });
    }
    else {
      window.location.href = targetId;
    }
  });

  $(document).on('change', '.hs-fieldtype-file .input input[type="file"]', function () {

    var fileName = $(this).val().split('\\').pop(); // Extract the filename from the file input

    $('.hs-fieldtype-file .input').attr('data-content', fileName); // Set the filename as a data attribute

    // Update the content of the :after pseudo-element
    $('.hs-fieldtype-file .input::after').attr('content', 'File chosen: ' + fileName);
  });

  // Assuming the iframe has a class of "ssa_booking_iframe"
  var iframe = $(".ssa_booking_iframe");

  if (iframe) {
    // Attach an event listener to the iframe contents
    iframe.on("load", function () {
      // Retrieve the iframe document object
      var iframeDoc = iframe.contents();

      // Attach a MutationObserver to detect changes in the iframe
      var observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
          // Check if the mutation added an element node
          if (
            mutation.addedNodes &&
            mutation.addedNodes.length &&
            mutation.addedNodes[0].nodeType === 1
          ) {
            var addedNode = mutation.addedNodes[0];
            // Check if the added node has the class "confirm"
            if (
              addedNode.classList &&
              addedNode.classList.contains("confirm")
            ) {
              showformStep3();
            }

            if (
              addedNode.classList &&
              addedNode.classList.contains("cust-info")
            ) {
              showformStep4();
            }
          }
        });
      });

      // Start observing the iframe contents for mutations
      observer.observe(iframeDoc[0], { childList: true, subtree: true });
    });
  }

  var observer = new MutationObserver(function (mutations) {
    if ($('.frm_page_num_2').length > 0) {
      $('.form_section .logo').hide();
      observer.disconnect();
    }

  });


  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // if ($(window).width() > 1024) {
  $(window).on("scroll", function () {
    var vh = $(window).height(); // Height of the viewport in pixels
    if ($(this).scrollTop() > 60) {
      // If the scroll top offset is greater than the viewport height
      $(".header").addClass("scrolled"); // Add the 'scrolled' class to the header
      $(".header").removeClass("nav-color-white"); // Add the 'scrolled' class to the header
    } else {
      $(".header").removeClass("scrolled"); // Otherwise, remove the 'scrolled' class
      if ($('section:first').hasClass('dark-panel')) {
        $(".header").addClass("nav-color-white");
      } else {

      }
    }
  });
  // }

  $(".burger , .close").on("click", function () {
    $(".mobile-header").toggleClass("open-mobile-header");
  });

  // When the .video_button is clicked...
  $(".video_button").click(function () {
    // If .video_popup exists...
    if ($(".video_popup").length) {
      // Move it outside the #smooth-wrapper
      $(".video_popup").appendTo("body");
    }

    // Get the data-vid_id attribute from the clicked button
    var vid_id = $(this).attr("data-vid_id");
    // Set the src of the .video_popup iframe to the vid_id
    $(".video_popup iframe").attr("src", vid_id);
    // Show the .video_popup
    $(".video_popup").show();
  });

  // When the .close-video is clicked...
  $(".close-video").click(function () {
    // Hide the .video_popup
    $(".video_popup").hide();
    // Clear the src of the .video_popup iframe
    $(".video_popup iframe").attr("src", "");
  });

  // Define a flag to keep track of the number of clicks
  var clicked = {};

  // if ($(window).width() < 1024) {
  //   // Intercept click events on the main menu items within mobile-header-holder
  //   $(".menu-item-has-children > a").on("click", function (e) {
  //     console.log("clicking");
  //     var id = $(this).parent().attr("class"); // Get the class of the parent li element
  //
  //     // If it's the first click, prevent the default action and open the submenu
  //     if (!clicked[id]) {
  //       e.preventDefault(); // Prevent navigating to the link
  //       $(this).siblings(".sub-menu").slideToggle("fast"); // Open the submenu
  //       clicked[id] = true; // Set the flag to true
  //     }
  //     // On the second click, allow the default action and reset the flag
  //     else {
  //       clicked[id] = false; // Reset the flag
  //     }
  //   });
  // }
  if (doesClassExist("load_more_posts")) {
    var loadingMore = false; // Flag to handle loading state

    var loadingMore = false; // Flag to handle loading state

    $(document).on('scroll', function () {

      if (loadingMore) return; // Return if already loading

      // Get window dimensions.
      var windowHeight = $(window).height();
      var windowScrollTop = $(window).scrollTop();
      var windowScrollBottom = windowScrollTop + windowHeight;

      // Get middle of the screen.
      var middleOfScreen = windowScrollTop + (windowHeight * 0.85);

      if (window.location.href.indexOf('blog') > -1) {
        if ($('.post_block').length >= 20) {
          $('.load_more_posts').remove();
        }
      }

      // Iterate over each '.load_more_posts' element.
      $('.load_more_posts').each(function () {
        var element = $(this);

        // Get element dimensions.
        var elementHeight = element.outerHeight();
        var elementTop = element.offset().top;
        var elementBottom = elementTop + elementHeight;

        // Check if middle of the screen is inside the element and if the text contains 'Load more'.
        if (middleOfScreen >= elementTop && middleOfScreen <= elementBottom && element.hasClass('load_more_posts') === true) {





          loadingMore = true; // Set the flag to true
          // Click the element.
          element.click();
          // Wait for a few seconds or until the operation is completed, then reset the flag
          setTimeout(function () {
            loadingMore = false; // Reset the flag
          }, 2000); // Adjust the timeout as needed
        }
      });
    });


  }



  if (doesClassExist("mobile-solution-slider")) {
    const MobileSolution = new Swiper(".mobile-solution-slider", {
      direction: "horizontal",
      slidesPerView: 1.05,
      spaceBetween: 15,
      allowTouchMove: true,
      breakpoints: {
        1024: {
          slidesPerView: 2.05,
          allowTouchMove: true,
        },
      },
    });
  }

  if (doesClassExist("info_blocks_slider")) {
    const InfoBlocks = new Swiper(".info_blocks_slider", {
      direction: "horizontal",
      slidesPerView: 1.2,
      spaceBetween: 0,
      allowTouchMove: true,
      breakpoints: {
        768: {
          allowTouchMove: false,
          slidesPerView: 2.2,
        },
        1024: {
          allowTouchMove: false,
          slidesPerView: 3.2,
        },
      },
    });
  }

  if (doesClassExist("pricing_table_slider")) {
    const InfoBlocks = new Swiper(".pricing_table_slider", {
      direction: "horizontal",
      slidesPerView: 1.05,
      spaceBetween: 15,
      allowTouchMove: true,
      breakpoints: {
        768: {
          allowTouchMove: false,
          slidesPerView: 2.2,
        },
        1024: {
          allowTouchMove: false,
          slidesPerView: 3.2,
        },
      },
    });
  }

  if (doesClassExist("bundle_items_slider")) {
    const InfoBlocks = new Swiper(".bundle_items_slider", {
      direction: "horizontal",
      slidesPerView: 1.05,
      spaceBetween: 15,
      allowTouchMove: true,
      breakpoints: {
        768: {
          allowTouchMove: true,
          slidesPerView: 2.2,
        },
        1024: {
          allowTouchMove: true,
          slidesPerView: 4.1,
        },
      },
    });
  }

  if (doesClassExist("features_list_slider")) {
    const InfoBlocks = new Swiper(".features_list_slider", {
      direction: "horizontal",
      slidesPerView: 1.05,
      spaceBetween: 15,
      allowTouchMove: true,
      breakpoints: {
        768: {
          allowTouchMove: true,
          slidesPerView: 1,
        },
        1024: {
          allowTouchMove: true,
          slidesPerView: 2,
        },
      },
    });
  }

  if (doesClassExist("expanded_features_carousel")) {
    const ExpandedFeatures = new Swiper(".expanded_features_carousel", {
      direction: "horizontal",
      slidesPerView: 1.05,
      spaceBetween: 10,
      allowTouchMove: true,
      breakpoints: {
        480: {
          allowTouchMove: false,
          slidesPerView: 1.3,
        },
        670: {
          allowTouchMove: false,
          slidesPerView: 1.7,
        },
        768: {
          allowTouchMove: false,
          slidesPerView: 2.2,
        },
        1024: {
          allowTouchMove: false,
          slidesPerView: 3.2,
        },
      },
    });
  }

  if (doesClassExist("feature_slider")) {

  }

  /* if (doesClassExist("blog_slider")) {
     const FeatureMobile = new Swiper(".blog_slider", {
       direction: "horizontal",
       slidesPerView: 1.05,
       spaceBetween: 15,
       allowTouchMove: true,
       navigation: {
         nextEl: ".next_slide",
         prevEl: ".prev_slide",
       },
       breakpoints: {
         768: {
           allowTouchMove: true,
           slidesPerView: 2.2,
         },
         1024: {
           allowTouchMove: true,
           slidesPerView: 3.2,
         },
       },
     });
   }*/

  if (doesClassExist("feature_block_tabs")) {
    $(".feature_block_tabs ul li").click(function () {

      $(".feature_block_tabs ul li").removeClass("active");

      $(this).addClass("active");

      $(".feature_list").removeClass('active_content_tab');

      var target = $(this).data("target");

      $('.feature_list[data-target="' + target + '"]').addClass('active_content_tab');
    });
  }

  if (doesClassExist("sdk_block_tabs")) {
    $(".sdk_block_tabs ul li").click(function () {
      // Remove 'active' class from all li elements
      $(".sdk_block_tabs ul li").removeClass("active");

      // Add 'active' class to the clicked li
      $(this).addClass("active");

      // Hide all li elements in .sdk_block_intros
      $(".sdk_block_intros li").hide();

      // Show only the li with the data-intro attribute matching the clicked li's data-target
      var target = $(this).data("target");
      $('.sdk_block_intros li[data-intro="' + target + '"]').show();

      // Hide all li elements in .sdk_block_codes
      $(".sdk_block_codes .code_block_li").hide();

      // Show only the li with the data-sdk attribute matching the clicked li's data-target
      $('.sdk_block_codes .code_block_li[data-sdk="' + target + '"]').show();
    });
  }

  if (doesClassExist("os_switch")) {
    $(".os_switch li").click(function () {
      // Remove 'active' class from all li elements
      $(".os_switch li").removeClass("active");

      // Add 'active' class to the clicked li
      $(this).addClass("active");

      // Hide all .android and .ios elements
      $(".android, .ios").hide();

      // Show the element with the class matching the clicked li's data-os
      var os = $(this).data("os");
      $("." + os).show();
    });
  }



  //COMPONENT SCROLLING ANIMATIONS START
  // if (doesClassExist("solutions-container")) {
  //   if ($(window).width() > 1024) {
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".solutions-container",
  //         pin: ".solutions-container",
  //         start: "3px top",
  //         // toggleClass: 'solutions-container-active',
  //         end: "bottom -150px",
  //         scrub: 1,
  //         markers: false,
  //         onEnter: () =>
  //           $(".solutions-container").addClass("solutions-container-active"),
  //         // onLeave: () => $(this).removeClass('solutions-container-active'),
  //         // onEnterBack: () => $(this).addClass('solutions-container-active'),
  //         onLeaveBack: () =>
  //           $(".solutions-container").removeClass("solutions-container-active"),
  //       },
  //     });
  //   }
  // }

  if (doesClassExist("softphone_linkup_component")) {
    // if ($(window).width() > 1024) {
    //     gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".softphone_linkup_component",
    //             start: "top 70%",
    //             end: "40% 75%",
    //             scrub: 1,
    //             markers:false,
    //         }
    //     })
    //         .to('.layer_5', {rotate:'45deg'})
    //         .to('.solutions-holder .soft_grad', {opacity:'0.1'})
    //         .to('.layer_4', {top:'.88%', left:'67.05%'})
    //         .to('.layer_3', {top:'8.75%', left:'19.33%'})
    //         .to('.layer_2', {top:'19.21%', left:'-.37%'})
    //         .to('.layer_1', {top:'22.28%', left:'0'})
    // }
    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".softphone_linkup_component",
    //         start: "top 40%",
    //         end: "bottom 40%",
    //         scrub: 0.2,
    //         markers:false,
    //     }
    // })
    //     .to('.layer_5', {rotate:'135deg'})
    //     .to('.layer_4', {top:'5.88%', left:'67.05%'})
    //     .to('.layer_3', {top:'18.75%', left:'19.33%'})
    //     .to('.layer_2', {top:'29.21%', left:'-.37%'})
    //     .to('.layer_1', {top:'32.28%', left:'0'})
  }

  if (doesClassExist("large_cta_container")) {
    if ($(window).width() > 1024) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".large_cta_container",
            start: "top 80%",
            end: "bottom 0",
            scrub: 1,
            markers: false,
          },
        })
        .to(".large_cta_container .soft_grad", { bottom: "-20%" });
    }
  }

  if (doesClassExist("sdk_info_block_container")) {
    if ($(window).width() > 1024) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sdk_info_block_container",
            start: "top 80%",
            end: "bottom 0",
            scrub: 1,
            markers: false,
          },
        })
        .to(".sdk_info_block_container .soft_grad", { top: "-60%" })
        // .to(".sdk_info_block_container .soft_grad", { top: "-20%" })
        .to(".sdk_info_block_container .soft_grad", { top: "-10%" });
    }
  }
  //COMPONENT SCROLLING ANIMATIONS END

  //FORM SUBMISSION


  $(".email_form button").click(function (e) {
    e.preventDefault(); // prevent the default form submission
    console.log(123)

    var email = $(".email_form input").val(); // get the email field value
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; // basic regex to validate an email


    if (!email) {
      // if the email field is empty
      $(".email_validation").show().text("Please provide an email address.");
    } else if (emailRegex.test(email)) {
      // if the email is valid
      var domain = email.split("@")[1]; // get the domain of the email

      if (blockedDomains.includes(domain)) {
        // if the domain is blocked
        $(".email_validation")
          .show()
          .text(
            "Sorry, please use a business email to request a demo of our platform."
          );
      } else {
        $(".email_validation").hide();
        showformStep2();
      }
    } else {
      $(".email_validation")
        .show()
        .text("The provided email address is not valid.");
    }
  });


})(jQuery);

function doesClassExist(className) {
  return $("." + className).length > 0;
}

function submitToHubSpotStep1(email) {
  var url = "https://api.hsforms.com/submissions/v3/integration/submit/5406436/f4bf7d3b-0900-4a4d-814f-736fa5681a99";
  var data = {
    action: 'form_submit_step_one',
    fields: [
      {
        name: "email",
        value: email
      }
    ],
    context: {
      pageUri: window.location.href,
      pageName: document.title
    }
  };


  $.ajax({
    url: acrobits_data.ajax_url,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    processData: false,
    success: function (response) {
      console.log("1")
      console.log('Submission to HubSpot was successful!', response);
      // Sending a Google Analytics event
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'AW-740574542');

      gtag('event', 'emailSubmission', {
        'event_category': 'Email',
        'event_label': 'emailSubmission'
      });
    },
    error: function (xhr, status, error) {
      console.error('Submission to HubSpot failed:', xhr.responseText);
    }
  });
}


function submitToHubSpotStep3(email, firstname, lastname, hubspot_owner_id, products_to_demo, demo_date) {
  // return false;
  var url = "https://api.hsforms.com/submissions/v3/integration/submit/5406436/21ec9f41-5303-4f0d-ad52-9cab6e69b864";
  var data = {
    fields: [
      {
        name: "email",
        value: email
      },
      {
        name: "firstname",
        value: firstname
      },
      {
        name: "lastname",
        value: lastname
      },
      {
        name: "hubspot_owner_id",
        value: hubspot_owner_id
      },
      {
        name: "products_to_demo",
        value: products_to_demo
      },
      {
        name: "demo_date",
        value: demo_date
      },
    ],
    context: {
      pageUri: window.location.href,
      pageName: document.title
    }
  };

  $.ajax({
    url: acrobits_data.ajax_url,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    processData: false,
    success: function (response) {
      console.log("2")
      console.log('Submission to HubSpot was successful!', response);
    },
    error: function (xhr, status, error) {
      console.error('Submission to HubSpot failed:', xhr.responseText);
    }
  });
}

// Function to get a cookie value by name
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
  return "";
}


function showformStep2() {
  $(".email_block_tab").removeClass("busy").addClass("done");
  $(".date_block_tab").removeClass("inactive").addClass("busy");
  $(".email_block").hide();
  $(".date_block").show();

  setTimeout(function () {
    $('.date_block .overlay').hide();
  }, 3000);

  // Your email value to append
  var email_val = $('#step_1_email').val();

  // Encode the email value to make sure special characters are handled correctly
  var encoded_email_val = encodeURIComponent(email_val);

  // The string to append, with the email value encoded
  var email_val_concat = "&Email=" + encoded_email_val;

  // Select the iframe by its ID
  var iframe = $('#iFrameResizer0');

  // Get the current src value
  var currentSrc = iframe.attr('src');

  // Remove trailing # and /
  currentSrc = currentSrc.replace(/\/?#\/?$/, "");

  // Append email value to the src
  var newSrc = currentSrc + email_val_concat;

  // Set the new src to the iframe
  iframe.attr('src', newSrc);

  submitToHubSpotStep1(email_val);
}

function showformStep3() {
  $(".email_block_tab").removeClass("busy").addClass("done");
  $(".date_block_tab").removeClass("busy").addClass("done");
  $(".personal_info_block_tab").removeClass("inactive").addClass("busy");
  var email_val = $('#step_1_email').val();
  // $('#iFrameResizer0').contents().find('#app #email').val(email_val);
  // $('#iFrameResizer0').contents().find('#app #email').val(email_val);
  $('#iFrameResizer0').contents().find('#product-of-interest-0').parent().parent().find('label').click();

}


function showformStep4() {
  $(".email_block_tab").removeClass("busy").addClass("done");
  $(".date_block_tab").removeClass("busy").addClass("done");
  $(".personal_info_block_tab").removeClass("inactive").addClass("done");
  $(".finish_block_tab").removeClass("inactive").addClass("done");

  var email_val = $('#step_1_email').val();
  var first_name_with_label = $('#iFrameResizer0').contents().find('.confirm .field-name-1').text();
  var first_name = first_name_with_label.replace('Name:', '').trim();
  var last_name_with_label = $('#iFrameResizer0').contents().find('.confirm .field-last-name-2').text();
  var last_name = last_name_with_label.replace('Last Name:', '').trim();
  var date = $('#iFrameResizer0').contents().find('.confirm .md-card-header-text .appointment-start-d').text();
  console.log(date)
  var productOfInterest_with_label = $('#iFrameResizer0').contents().find('.confirm .field-product-of-interest-3').text();
  var productOfInterest = productOfInterest_with_label.replace('Product of Interest:', '').trim();
  var HBID = getCookie('hubspotutk');

  var date_text = date;
  var date_object = new Date(date_text);
  var formatted_date = date_object.getFullYear() + '-' +
    ("0" + (date_object.getMonth() + 1)).slice(-2) + '-' +
    ("0" + date_object.getDate()).slice(-2);

  submitToHubSpotStep3(email_val, first_name, last_name, HBID, productOfInterest, formatted_date);

}




// Function to observe changes in iframe
function observeIframe(iframeElement) {
  var hasTriggered = false;  // Flag to keep track of whether myFunction has been triggered
  var observerAdded = false; // Flag to keep track of whether observer has been added

  // Make sure the iframe is loaded before we attach the observer
  $(iframeElement).on('load', function () {
    if (observerAdded) {
      return; // Exit if observer has already been added
    }

    var targetNode = iframeElement.contentWindow.document.body;

    // Options for the observer (which mutations to observe)
    var config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    var callback = function (mutationsList, observer) {
      for (var mutation of mutationsList) {
        if (mutation.type === 'childList') {
          // Check if the class exists within the iframe
          var elementExists = $(targetNode).find('.appointment-type-voucher-reservation .confirmation-actions').length > 0;

          if (elementExists && !hasTriggered) {
            // Find the name and email from the iframe and pass them to your function
            var name = $(targetNode).find('.field-name-0').text().replace('Name:', '').trim();
            var email = $(targetNode).find('.field-email-1').text().replace('Email:', '').trim();
            var HBID = getCookie('hubspotutk');
            console.log(HBID);
            // Trigger your function here
            myFunction(name, email, HBID);

            hasTriggered = true;  // Set the flag to true
          }
        }
      }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    observerAdded = true; // Set the flag to true
  });
}

// Your function that you want to trigger
function myFunction(name, email, HBID) {

  console.log('Unknown function fired')
  return false
  var url = "https://api.hsforms.com/submissions/v3/integration/submit/5406436/53a89f5d-8e8a-4f85-af28-cc4f6b7bc39b";
  var data = {
    fields: [
      {
        name: "email",
        value: email
      },
      {
        name: "fullname",
        value: name
      },
    ],
    context: {
      hutk: HBID,
      pageUri: window.location.href,
      pageName: document.title
    }
  };

  $.ajax({
    url: url,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    processData: false,
    success: function (response) {
      console.log("3")
      console.log('Submission to HubSpot was successful!', response);
    },
    error: function (xhr, status, error) {
      console.error('Submission to HubSpot failed:', xhr.responseText);
    }
  });
}

// Usage
$(document).ready(function () {
  var iframeElement = document.getElementById('iFrameResizer0');
  observeIframe(iframeElement);
});


(function ($) {
  $(function () {
    $(document).on('gform_page_loaded', function (event, form_id, current_page) {
      // Stop execution if the user was redirected to the landing page
      if (typeof redirectToLanding !== 'undefined' && redirectToLanding) {
        console.log("The user was redirected to the landing page. Stopping further steps.");
        return;
      }

      const formWrapper = $(`#gform_wrapper_${form_id}`)
      if (formWrapper.length > 0 && formWrapper.data('form-type') === 'softphone' && current_page == 2) {
        let $body = $(`body`)
        var email = $(`#input_${form_id}_30`).val();
        var firstname = undefined;
        var lastname = undefined;
        var primary_use_case = undefined;
        var existing_voip_infrastructure = undefined;
        var existing_infrastructure_type = undefined;
        var type_of_provider = undefined;
        var number_of_users = undefined;

        /* if (form_id === 7) {
           firstname = $(`#input_${form_id}_3`).val() || undefined;
           lastname = $(`#input_${form_id}_29`).val() || undefined;
           primary_use_case = $(`#input_${form_id}_44`).val() || undefined;
           existing_infrastructure_type = $(`#input_${form_id}_46`).val() || undefined;
           if ($(`#choice_${form_id}_37_0`).is(':checked')) {
             existing_voip_infrastructure = 'Yes'
           }
 
           if ($(`#choice_${form_id}_37_1`).is(':checked')) {
             existing_voip_infrastructure = 'No'
           }
         }*/


        if (form_id === 8) {
          firstname = $(`#input_${form_id}_3`).val() || undefined;
          lastname = $(`#input_${form_id}_29`).val() || undefined;
          type_of_provider = $(`#input_${form_id}_44`).val() || undefined;
          existing_infrastructure_type = $(`#input_${form_id}_46`).val() || undefined;
          if ($(`#choice_${form_id}_37_0`).is(':checked')) {
            existing_voip_infrastructure = 'Yes'
          }

          if ($(`#choice_${form_id}_37_1`).is(':checked')) {
            existing_voip_infrastructure = 'No'
          }

          if ($(`#choice_${form_id}_47_0`).is(':checked')) {
            number_of_users = '-50'
          }

          if ($(`#choice_${form_id}_47_1`).is(':checked')) {
            number_of_users = '+50'
          }
          console.log({
            firstname,
            lastname,
            type_of_provider,
            existing_infrastructure_type,
            existing_voip_infrastructure,
            number_of_users
          });
        }

        var industryInput = $(`#input_${form_id}_43`).val();

        if ($(`#gform_page_${form_id}_1`).length > 0) {

          var domain = email.split("@")[1]; // get the domain of the email

          if ($body.data('acro_sform_step_1_submitted') !== true) {
            CloudPhoneDemo({ email, primary_use_case, firstname, lastname, existing_infrastructure_type, existing_voip_infrastructure, type_of_provider, number_of_users })
              .then(res => {
                console.log("response")
                console.log(res)

                if (res) {
                  $body.data('acro_sform_step_1_submitted', true)
                }
              })
              .catch(err => {
                console.error(err)
              })
          }
        }
      }
      console.log("redirectToLanding in onload.js:", typeof redirectToLanding !== 'undefined' ? redirectToLanding : "undefined");
    });

    function CloudPhoneDemo({ email, firstname, lastname, products_to_demo, primary_use_case, existing_infrastructure_type, existing_voip_infrastructure, type_of_provider, number_of_users }) {
      var data = {
        action: "softphone_form_submit_step_one",
        fields: [
          {
            name: "email",
            value: email
          },
          {
            name: "firstname",
            value: firstname
          },
          {
            name: "lastname",
            value: lastname
          },
          {
            name: "products_to_demo",
            value: products_to_demo
          },
          {
            name: "existing_infrastructure_type",
            value: existing_infrastructure_type
          },
          {
            name: "primary_use_case",
            value: primary_use_case
          },
          {
            name: "existing_voip_infrastructure",
            value: existing_voip_infrastructure
          },
          {
            name: "type_of_provider",
            value: type_of_provider
          },
          {
            name: "number_of_users",
            value: number_of_users
          }
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title
        }
      };

      let p = new Promise((resolve, reject) => {
        maybeCheckRecaptcha().then(response => {
          if (response) {
            console.log("TEST")
            console.log(data)
            console.log(response)
            $.ajax({
              url: acrobits_data.ajax_url,
              type: 'POST',
              dataType: "json",
              data,
              success: function (response) {
                console.log("4")
                console.log('Submission to HubSpot was successful!', response);
                resolve(true)
              },
              error: function (xhr, status, error) {
                console.error('Submission to HubSpot failed:', xhr.responseText);
                resolve(false)
              }
            });
          } else {
            console.log('Failed to verify captcha')
          }
        })
      })



      return p
    }

    function maybeCheckRecaptcha() {
      return new Promise((resolve, reject) => {
        if (typeof grecaptcha !== 'undefined' && typeof gforms_recaptcha_recaptcha_strings !== 'undefined') {
          grecaptcha.ready(function () {
            grecaptcha.execute(gforms_recaptcha_recaptcha_strings.site_key, {
              action: 'submit'
            }).then(function (token) {
              if (token.length && typeof token === 'string') {
                $.ajax({
                  url: gforms_recaptcha_recaptcha_strings.ajaxurl,
                  type: 'POST',
                  dataType: "json",
                  data: {
                    action: 'softphone_form_check_recaptcha',
                    token
                  },
                  success: function (response) {
                    console.log(response)
                    resolve(response.success)
                  },
                  error: function () {
                    resolve(false)
                  }
                })
              }
            });
          });
        } else {
          resolve(true)
        }
      })
    }

    if (typeof gform !== "undefined") {
      gform.addFilter('gform_spinner_target_elem', function (a) {
        console.log(a)

        return a
      })
    }

    $(document).on('gform_page_loaded', function (event, form_id, current_page) {
      if ($('.stepped_form .form_tabs').length > 0) {
        $(`.stepped_form .form_tabs ul li:nth-child(${current_page})`).addClass('busy').prevAll().removeClass('busy').removeClass('done').addClass('done');
      }
    });
  })

  $(document).ready(function () {
    $('.toggle-list__label').on('click', function () {
      $(this).closest('.toggle-list').find('.toggle-list__list').slideToggle();
    })


    var stickyDiv = $('.acro-compare-table-block_1 .acro-compare-table-block__table__items .heading-row');
    if (stickyDiv.length && $(document).width() >= 768) {
      var parentDiv = stickyDiv.closest('.acro-compare-table-block__table__items');
      var stickyDivTop = stickyDiv.offset().top + 88;

      $(window).scroll(function () {
        var stickyDivWidth = parentDiv.width();
        var scrollDistance = $(window).scrollTop();
        var parentBottom = parentDiv.offset().top + parentDiv.outerHeight() - stickyDiv.outerHeight();

        if (scrollDistance >= stickyDivTop && scrollDistance <= parentBottom) {
          stickyDiv.css({ position: 'fixed', top: '88px', width: stickyDivWidth + 'px' });
          stickyDiv.addClass('sticky-row');
        } else if (scrollDistance > parentBottom) {
          stickyDiv.css({ position: 'absolute', top: parentBottom - parentDiv.offset().top + 'px' });
          stickyDiv.removeClass('sticky-row');
        } else {
          stickyDiv.css({ position: 'static' });
          stickyDiv.removeClass('sticky-row');
        }
      });
    }
    $(document).ready(function () {
      $('.mobile-header-holder .menu-item-has-children').on('click', function (e) {
        $(this).find('.sub-menu').first().slideToggle();
        $(this).toggleClass('active');
      })

      $('.left-header .menu > li > a').hover(function () {
        $('.left-header .menu').addClass('hovered')
      },
        function () {
          $('.left-header .menu').removeClass('hovered')
        })
    });
  })





  

})(jQuery)


