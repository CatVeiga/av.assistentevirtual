$('.carousel').carousel({
    touch: true, // default
    interval: 1000,
    pause: "hover",
    keyboard: true
    })

/***
 * function to collect data into google sheets
 * 
 */
var $form = $('form#sub_form'),
    url = 'https://script.google.com/macros/s/AKfycbwbFE2NyiDPBY-CDFsvVT0PU6DjH-2CwMTM_M6ptMZNAlNe9yw/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
    
/***
 * function to collect data from contact form into google sheets
 */

var $form = $('form#contact_form'),
url = 'https://script.google.com/macros/s/AKfycbwmd1ZmTsy1az7bccbO6bM-0A3t1vBfAH_jBNNgmrYlsaTVGE5R/exec'

$('#send_form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url,
method: "GET",
dataType: "json",
data: $form.serializeObject()
}).success(
// do something
);
})