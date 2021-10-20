$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    event.preventDefault();
    const entryInput = $("input#entry").val();
    $(".entry").text(entryInput.toUpperCase());
    $("#story").show();
  });
});