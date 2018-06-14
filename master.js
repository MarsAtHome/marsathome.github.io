$("#link-field").on("click", function () {
  $(this).select();
  document.execCommand("copy");
});

function copyLink() {
  /* Get the text field */
  var copyText = document.getElementById("copy-btn");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

// funciton by: https://stackoverflow.com/a/9964945/3578289
$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}

$("#academiaEmail").enterKey(function () {
  console.log('academiaEmail here');

  submitEmail('#academiaEmail');
})

$("#developerEmail").enterKey(function () {
  console.log('developerEmail here');

  submitEmail('#developerEmail');
})

function submitEmail (id) {
  // var url = 'https://script.google.com/macros/s/AKfycbwTQWLE5P8j1J2QX_GuefVF6u3I-cuOl1wubXbQP8TqPE8XIsM/exec'
  var url = 'https://script.google.com/macros/s/AKfycbwj51UBnjABNjHUasL_v_HQGg-MPH6pkDmvftR_Rdy1jN9VBKtQ/exec';

  var email = $(id).val()

  email = email.trim()
  if (email === "") return;

  $(id).attr("disabled", true);

  var data = {Email: email, CreatedAt: new Date(), Type: id};
  // console.log(data);
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    // data: $form.serializeObject()
    data: data
  })
  .done(() => {
    // do something
    console.log('saved');
    $(id).val('');
    $(id).attr("disabled", false);
    $(id).attr("placeholder", 'Thank you!');
  });
}

$("#downloadBtn").on("click", function() {
   // chrome.webstore.install(url, successCallback, failureCallback);
    chrome.webstore.install() 
});