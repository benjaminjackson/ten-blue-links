chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Check if the URL is a Google search
    if (details.url.indexOf('https://www.google.com/search?') === 0) {
      // Check if the udm parameter already exists
      if (details.url.indexOf('&udm=') === -1) {
        // If not, add the udm=14 parameter
        return { redirectUrl: details.url + '&udm=14' };
      }
    }
  },
  // Filters
  {
    urls: ['https://www.google.com/search?*'],
    types: ['main_frame']
  },
  // Options
  ['blocking']
);