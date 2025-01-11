<script>
  // The original footer HTML content that you want to protect
  const originalFooterHTML = `
    <div class="footer-credit">
      Designed and Developed by <a href="#" target="_blank">Mhaddd Hasan</a>.
      <br/><a href="mailto:kingmahmudhasansamir@gmail.com">Contact Now</a> for design inquiries.
    </div>
  `;

  // Function to monitor the footer for changes
  function checkFooterChanges() {
    const footer = document.querySelector('.footer-credit');
    
    // If the footer element is found and its content has changed, redirect
    if (footer && footer.innerHTML !== originalFooterHTML) {
      window.location.href = 'https://hasantechnologyofficial.blogspot.com/';
    }
  }

  // Continuously check for changes in the footer every second
  setInterval(checkFooterChanges, 1000);
</script>
