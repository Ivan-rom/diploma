   
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
   });
   
   $(document).ready(function()
   {
      $("a[href*='#LayoutGrid15']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid15').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid11']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid11').offset().top-88 }, 600, 'easeOutCirc');
      });
      $('#wb_LayoutGrid11').parallax();
      $("a[href*='#LayoutGrid13']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid13').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid14']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid14').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid7']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid7').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[data-rel='PhotoGallery1']").attr('rel', 'PhotoGallery1');
      $("#PhotoGallery1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='PhotoGallery2']").attr('rel', 'PhotoGallery2');
      $("#PhotoGallery2").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_LayoutGrid11').css('background-attachment', 'scroll');
      }
   });
