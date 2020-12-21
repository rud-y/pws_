var showText = function (target, message, index, interval) {   
    const message = "AHOJ";
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$(function () {
  showText(document.getElementById('output'), "Hello, World!", 0, 500);   
});