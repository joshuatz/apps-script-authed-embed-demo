function doGet(e) {
    var email = Session.getActiveUser().getEmail();

    if (e.queryString && 'jsonpCallback' in e.parameter){
        // JSONP callback
        // Get the string name of the callback function
        var cbFnName = e.parameter['jsonpCallback'];
        // Prepare stringified JS that will get evaluated when called from <script></script> tag
        var scriptText = "window." + cbFnName + "('" + email + "');";
        // Return proper MIME type for JS
        return ContentService.createTextOutput(scriptText).setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    else if (e.queryString && ('auth' in e.parameter || 'redirect' in e.parameter)){
        // Script was opened in order to auth in new tab
        var rawHtml = '<p>You have successfully authorized the widget. You can now close this tab and refresh the page you were previously on.</p>';
        if ('redirect' in e.parameter){
            rawHtml += '<br/><a href="' + e.parameter['redirect'] + '">Previous Page</a>';
        }
        return HtmlService.createHtmlOutput(rawHtml);
    }
    else {
        // Display HTML in iframe
        var email = Session.getActiveUser().getEmail();
        var template = HtmlService.createTemplateFromFile('output');
        template.authedEmail = email;
        return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }
}