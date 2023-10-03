var language = $("html").attr("lang");

$(document).ready(function () {
  $("#hide-after-reveal").css("display", "none");
});

function formatRemainingTime(milliseconds) {
  var minutes = Math.floor(milliseconds / 60 / 1000);
  var seconds = Math.floor((milliseconds / 1000) % 60);
  var ms = Math.floor((milliseconds % 1000) / 10);
  if (!minutes) {
    return leftPad(seconds) + ":" + leftPad(ms);
  } else {
    return leftPad(minutes) + ":" + leftPad(seconds);
  }
}

function leftPad(number) {
  return number.toString().length < 2 ? "0" + number : number;
}

function getPrefix(language, relative) {
  if (relative) {
    return "in";
  }

  if (language === "de-DE") {
    return "am";
  } else {
    return "on";
  }
}
