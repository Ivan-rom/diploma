   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var Carousel2 = new bootstrap.Carousel('#Carousel2', {interval: 3000, pause: false});
      var Carousel1 = new bootstrap.Carousel('#Carousel1', {interval: 3000, pause: false});
      var DropdownMenu2_dropdownToggle = document.querySelectorAll('#DropdownMenu2 .dropdown-toggle');
      DropdownMenu2_dropdownToggle.forEach(item => 
      {
         var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
      });
      var DropdownMenu2_dropdown = document.querySelectorAll('#DropdownMenu2 .dropdown');
      DropdownMenu2_dropdown.forEach(item => 
      {
         item.addEventListener('shown.bs.dropdown', function(e)
         {
            e.currentTarget.classList.add('show');
         });
         item.addEventListener('hidden.bs.dropdown', function(e)
         {
            e.currentTarget.classList.remove('show');
         });
      });
      document.addEventListener('click', function (e)
      {
         var isChildOfDropdownMenu = false;
         var target = e.target;
         while (target !== null)
         {
            if (target.classList && target.classList.contains('DropdownMenu2-navbar-collapse') && target.classList.contains('show'))
            {
               isChildOfDropdownMenu = true;
               break;
            }
            target = target.parentNode;
         }
         if (isChildOfDropdownMenu)
         {
            if (e.target.tagName.toLowerCase() === 'a' && !e.target.classList.contains('dropdown-toggle'))
            {
               const dropdownMenu = document.querySelector('.DropdownMenu2-navbar-collapse');
               if (dropdownMenu)
               {
                  const collapseInstance = bootstrap.Collapse.getInstance(dropdownMenu);
                  if (collapseInstance)
                  {
                     collapseInstance.hide();
                  }
               }
            }
         }
      });
   });
   
   $(document).ready(function()
   {
      $("a[href*='#LayoutGrid12']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid12').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid8']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid8').offset().top-88 }, 600, 'easeOutCirc');
      });
      $('#wb_LayoutGrid8').parallax();
      $("a[href*='#LayoutGrid7']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid7').offset().top-88 }, 600, 'easeOutCirc');
      });
      var sliderSlideShow1 = $('#SlideShow1-gallery').lightSlider(
      {
         controls: false,
         gallery: true,
         item: 1,
         loop: true,
         thumbItem: 3,
         thumbMargin: 5,
         galleryMargin: 5,
         pause: 3000,
         auto: true
   });
      var sliderSlideShow2 = $('#SlideShow2-gallery').lightSlider(
      {
         controls: false,
         gallery: true,
         item: 1,
         loop: true,
         thumbItem: 3,
         thumbMargin: 5,
         galleryMargin: 5,
         pause: 3000,
         auto: true
   });
      var sliderSlideShow3 = $('#SlideShow3-gallery').lightSlider(
      {
         controls: false,
         gallery: true,
         item: 1,
         loop: true,
         thumbItem: 3,
         thumbMargin: 5,
         galleryMargin: 5,
         pause: 3000,
         auto: true
   });
      var sliderSlideShow4 = $('#SlideShow4-gallery').lightSlider(
      {
         controls: false,
         gallery: true,
         item: 1,
         loop: true,
         thumbItem: 3,
         thumbMargin: 5,
         galleryMargin: 5,
         pause: 3000,
         auto: true
   });
      var sliderSlideShow5 = $('#SlideShow5-gallery').lightSlider(
      {
         controls: false,
         gallery: true,
         item: 1,
         loop: true,
         thumbItem: 3,
         thumbMargin: 5,
         galleryMargin: 5,
         pause: 3000,
         auto: true
   });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_LayoutGrid8').css('background-attachment', 'scroll');
      }
   });
