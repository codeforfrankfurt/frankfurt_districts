$(document).ready(function() {
  $(".district").on('click', function() {
    $(this).attr("fill", '#000');
    console.log($(this).attr('id'));
  })
});
