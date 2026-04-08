   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var DropdownMenu1_dropdownToggle = document.querySelectorAll('#DropdownMenu1 .dropdown-toggle');
      DropdownMenu1_dropdownToggle.forEach(item => 
      {
         var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
      });
      var DropdownMenu1_dropdown = document.querySelectorAll('#DropdownMenu1 .dropdown');
      DropdownMenu1_dropdown.forEach(item => 
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
            if (target.classList && target.classList.contains('DropdownMenu1-navbar-collapse') && target.classList.contains('show'))
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
               const dropdownMenu = document.querySelector('.DropdownMenu1-navbar-collapse');
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
      var elementgallery23Carousel = document.querySelector('#gallery23Carousel');
      elementgallery23Carousel.addEventListener('slid.bs.carousel', function(e)
      {
         switch(e.to)
         {
            case 0:
               $('#Carousel2').bootstrapcarousel(0);
               break;
         }
      });
      var gallery23Carousel = new bootstrap.Carousel('#gallery23Carousel', {interval: 3000, pause: false});
   });
   
   $(document).ready(function()
   {
      $("a[href*='#LayoutGrid10']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid10').offset().top }, 600, 'easeOutCirc');
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
      $("a[href*='#gallery23LayoutGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_gallery23LayoutGrid').offset().top }, 600, 'easeOutCubic');
      });
      $("a[href*='#LayoutGrid7']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid7').offset().top-88 }, 600, 'easeOutCirc');
      });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_LayoutGrid8').css('background-attachment', 'scroll');
      }
   });
