(function(win){
  if ( "serviceWorker" in navigator )
  {
    navigator.serviceWorker.register( "serviceworker.js" );
  }
}(this));
