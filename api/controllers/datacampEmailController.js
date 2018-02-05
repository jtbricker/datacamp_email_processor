'use strict';

exports.processEmail = function(req, res) {
    const cheerio = require('cheerio');
    const $ = cheerio.load(req.body.body);
    const date = req.body.date;
    const subject = req.body.subject;

    var links = $('a');
    $(links).each(function(i, link){
        var link_text = $(link).text();
        var link_url = $(link).attr('href');
        if(link_text.length > 20){
            console.log( link_text);
        }
      });
    
    console.log(date);
    console.log(subject);
    res.json({ message: 'Message Received' });    
};