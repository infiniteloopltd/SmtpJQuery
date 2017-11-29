# SmtpJQuery
A Jquery plugin for http://www.SMTPJS.com

It is a simple wrapper for the SmtpJs library suitable for JQuery, sample usage is as follows:

```
   $.fn.Email.send("from@you.com",
        "to@them.com",
        "Subject line",
        "Body in HTML",
        {
            token: "GUID from SMTPJS.com",
            callback: function done(message) { alert(message) }
        });
```

