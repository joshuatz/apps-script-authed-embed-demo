Demo to show detecting a logged out / unauthorized Google user and avoiding the X-Frame-Options error inside an iframe embed of your Google Apps Script by either:

 - Passing back success data and toggling an overlay (via JSONP) - [folder](./jsonp-callback)
     - OR
 - Using the `{iframeElement}.contentWindow.length` trick - [folder](./contentWindow-length)

See [joshuatz.com/posts/2019/google-apps-script-authorization-in-a-cross-origin-iframe/](https://joshuatz.com/posts/2019/google-apps-script-authorization-in-a-cross-origin-iframe/) for full details.