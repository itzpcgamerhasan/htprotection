(function() {
  // Original footer content that should not be changed
  var originalFooterCode = "<div class='footer-credit'>Designed and Developed by <a href='#' target='_blank'>Mahmuddd Hasan</a>.<br/><a href='mailto:kingmahmudhasansamir@gmail.com'>Contact Now</a> for design inquiries.</div>";

  // Select the footer element
  var footerElement = document.querySelector('.footer-credit');

  if (!footerElement) return;

  // Function to check if footer content matches the original code
  function checkFooterContent() {
    if (footerElement.innerHTML !== originalFooterCode) {
      // If the footer content doesn't match, redirect to the original website
      window.location.href = "https://hasantechnologyofficial.blogspot.com/";
    }
  }

  // Create a MutationObserver to watch for changes in the footer
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      checkFooterContent();
    });
  });

  // Observer configuration
  var config = { childList: true, subtree: true };
  
  // Start observing changes
  observer.observe(footerElement, config);
})();
