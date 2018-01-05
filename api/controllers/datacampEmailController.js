'use strict';

exports.processEmail = function(req, res) {
    const cheerio = require('cheerio');
    const $ = cheerio.load(req.body.body);
    const date = er
    var links = $('a');
    $(links).each(function(i, link){
        link_text = $(link).text();
        link_url = $(link).attr('href');
        if(link_text.length > 15){
            console.log( link_text + ':\n  ' + link_url);
        }
      });
    res.json({ message: 'Message Received' });    
};