function init ()
{
  $(document).ready()
  {
    $('#close-btn').click(function()
    {
      $('.sidebar-wrapper').toggleClass('open');
    });

      $('#hamburger').click(function()
      {
        $('.sidebar-wrapper').toggleClass('open');
      });
  }
}

init();
