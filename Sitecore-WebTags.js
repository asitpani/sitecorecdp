// Define the Boxever queue 
var _boxeverq = _boxeverq || [];

// Define the Boxever settings 
var _boxever_settings = {
    client_key: 'pqsrxehja3f17kpxeuvoare26qfmbcu0', // Replace with your client key
    target: 'https://api.boxever.com/v1.2', // Replace with your API target endpoint specific to your data center region for e.g., "https://api.boxever.com/v1.2"
    cookie_domain: 'sccdp.vercel.app', // Replace with the top level cookie domain of the website
    javascriptLibraryVersion: '1.4.9', // Replace with the latest Boxever JavaScript library version
    pointOfSale: 'alphaspingaming.com',  // Replace with the same point of sale configured in system settings
    web_flow_target: 'https://d35vb5cccm4xzp.cloudfront.net',  
};
// Import the Boxever library asynchronously 
(function() {
     var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;  
     s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.9.min.js';
     var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();

// Place an anonymous function in the Boxever queue 
_boxeverq.push(function() { 
  var viewEvent = {
      "browser_id": Boxever.getID(),
      "channel": "WEB",
      "type": "VIEW",
      "language": "EN",
      "currency": "USD",
      "page": window.location.href,
      "pos": " "  // Replace with the same point of sale configured in system settings
  };
  //Add UTM params
  viewEvent = Boxever.addUTMParams(viewEvent);
  // Invoke event create 
  // (<event msg>, <callback function>, <format>)
  Boxever.eventCreate(viewEvent, function(data){}, 'json');
});
