var firstnameInput = document.getElementById('firstname')
var lastnameInput = document.getElementById('lastname')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var aboutInput = document.getElementById('about')
var htmlPreview = document.getElementById('html')
var rawhtmlPreview = document.getElementById('rawhtml')

/* What changes on the page */
var updatePreviewhtml = function () {
  var firstname = firstnameInput.value
  var lastname = lastnameInput.value
  var email = emailInput.value
  var phone = phoneInput.value
  var about = aboutInput.value
  var profileInfo =
    '<h1>Hi,my name is ' + firstname + ' ' + lastname + '!</h1>' +
    '<p>' + about + '</p>' +
    '<p>If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
    ' or give me call at ' + '<a href="PHONE_NUMBER:' + phone +
    '" target="_blank">' + phone + '</a>' + '</p>'
  htmlPreview.innerHTML = profileInfo
  rawhtmlPreview.textContent = profileInfo
}

/* Event Listeners */
firstnameInput.addEventListener('input', updatePreviewhtml)
lastnameInput.addEventListener('input', updatePreviewhtml)
emailInput.addEventListener('input', updatePreviewhtml)
phoneInput.addEventListener('input', updatePreviewhtml)
aboutInput.addEventListener('input', updatePreviewhtml)
