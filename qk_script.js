/* JQuery Scipts below */

$(document).bind("contextmenu",function(e){
  return false;
    });
$("document").keydown(function(event) { 
    return false;
});
$('a').click(function(){
    window.open(this.href);
    return false;
  });


$('a').hover(function(event) {
  if (!event.ctrlKey) {
    var h = $(this).attr('href');
    var m = $(this).attr('href');
    $('#hrefsrc').attr('href', h);
    $('#hrefsrc').html(m);
  }
});



$(document).ready(function(){
    $("#inpt").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("div:not(#topbar, #topbar > *, #mySidenav, #mySidenav > *) a").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


$(document).ready(function(){
    $('#estt a, #acct a, #trng a, #othr a, #bams a').each(function(){
        $(this).prepend('<i class="fa fa-dot-circle-o"></i> ');
    });
});


/*  Styling for Div Classes */
$(document).ready(function() {
    $('.links').each(function() {
        var anchorTags = $(this).find('a');   
        anchorTags.addClass('w3-button w3-small w3-padding-small w3-round w3-border w3-hover-blue');
    });
});



/*  Styling for Div IDs */
$(document).ready(function() {
    function addClassesToAnchors(classNames, divId) {
        var anchors = $('#' + divId + ' a');
        anchors.addClass(classNames.join(' '));
    }
    addClassesToAnchors(['w3-button', 'w3-small', 'w3-padding-small', 'w3-round', 'w3-hover-blue', 'w3-border-bottom', 'w3-border-left'], 'estt');
    addClassesToAnchors(['w3-button', 'w3-small', 'w3-padding-small', 'w3-round', 'w3-hover-green', 'w3-border-bottom', 'w3-border-left'], 'acct');
    addClassesToAnchors(['w3-button', 'w3-small', 'w3-padding-small', 'w3-round', 'w3-hover-deep-orange', 'w3-border-bottom', 'w3-border-left'], 'trng');
    addClassesToAnchors(['w3-button', 'w3-small', 'w3-padding-small', 'w3-round', 'w3-hover-black', 'w3-border-bottom', 'w3-border-left'], 'othr');
    addClassesToAnchors(['w3-button', 'w3-small', 'w3-padding-small', 'w3-round', 'w3-hover-teal', 'w3-border-bottom', 'w3-border-left'], 'bams');
});



 // Function to update classes and add ID based on screen width
function updateClassesAndId() {
  var sidenav = document.querySelector('.dk'); // Assuming there's only one element with class 'dk'

  // Remove any existing ID
  sidenav.removeAttribute('id');

  // Check window width and add appropriate classes and ID
  if (window.innerWidth >= 601) {
    sidenav.classList.add('w3-hide-small', 'w3-hide-medium');
  } else if (window.innerWidth >= 376 && window.innerWidth <= 600) {
    sidenav.classList.add('w3-hide-large', 'w3-hide-small');
  } else {
    sidenav.classList.add('w3-hide-large', 'w3-hide-medium');
  }

  // Add the ID 'mySidenav'
  sidenav.id = 'mySidenav';
}

// Initial call to set classes and ID on page load
updateClassesAndId();

// Event listener for window resize
window.addEventListener('resize', updateClassesAndId);
