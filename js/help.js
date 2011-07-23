/*
 * Displays a new Tip.
 *
 * resp - the Response hash
 *        tip - the String tip to display
 */
function tip(resp){
  $('.tip-body .load').hide()
  $('.tip-body > p').text(resp['tip'])
}

$(document).ready(function(){
  $(".more-info h4").click(function () {
      var contentdiv = $(this).parent().find(".more-content")
      var h4 = $(this).parent().find("h4")
      h4.toggleClass("compressed expanded")
      if (contentdiv.is(":hidden")) {
          contentdiv.slideDown("50")
      } else {
          contentdiv.slideUp("50")
      }
  })

  var new_tip = function() {
   $.ajax({
      url: 'https://github.com/tips?callback=tip',
      type: 'GET',
      dataType: 'jsonp',
      error: function(resp){
        $('.tip-body > p').text('There was a problem loading your tip.')
      }
    })
    return false
  }

  $('.tip-box > a').click(function() {
    $('.tip-body .load').show()
    $('.tip-body > p').text('Loading next tip...')
    new_tip()
    return false
  })

  new_tip()
});
