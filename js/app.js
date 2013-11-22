$(function() {
  $(".zen-mode").click(function() {
    // zen mode shall be defined as:
    // hide all elements inside <body>, except article
    $("body > :not(article)").toggle();

    // toggle the icon displayed for the zen mode button
    $("button.zen-mode > span.glyphicon").toggleClass("glyphicon-resize-small glyphicon-fullscreen");

    // swap the text of the button
    var toggleButtonText = $("button.zen-mode > span.title").text();
    $("button.zen-mode > span.title").text(toggleButtonText == "Enable Zen Mode " ? "Disable Zen Mode " : "Enable Zen Mode ");
  });
});
