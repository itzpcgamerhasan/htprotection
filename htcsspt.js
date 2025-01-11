(function() {
  var originalCode = document.querySelector('.footer-credit').innerHTML;
  var footerElement = document.querySelector('.footer-credit');
  
  // Set the original footer content as a check
  footerElement.addEventListener('DOMSubtreeModified', function() {
    if (footerElement.innerHTML !== originalCode) {
      // If the code is modified, redirect to your website
      window.location.href = "https://hasantechnologyofficial.blogspot.com/";
    }
  });
})();
