$(document).ready(function(){
  $("#toc").tableOfContents(null, {
    startLevel: 2
  });

  $('#toc').ddscrollSpy({
    scrollduration: 0
  });
})