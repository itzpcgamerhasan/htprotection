(function() {
  // The original footer content you want to protect
  var originalFooterCode = "<div class='footer-credit'>Designed and Developed by <a href='#' target='_blank'>Mahmuddd Hasan</a>.<br/><a href='mailto:kingmahmudhasansamir@gmail.com'>Contact Now</a> for design inquiries.</div>";

  // Get the footer element
  var footerElement = document.querySelector('.footer-credit');

  // Function to check if the footer content is modified
  function checkFooterModification() {
    if (footerElement.innerHTML !== originalFooterCode) {
      // If the content is modified, redirect to the desired website
      window.location.href = "https://hasantechnologyofficial.blogspot.com/";
    }
  }

  // Listen for changes in the footer content
  footerElement.addEventListener('DOMSubtreeModified', checkFooterModification);

})();
