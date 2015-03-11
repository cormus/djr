/*!	
* FitText.js 1.0 no jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com 
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/
function FitText(el, kompressor, options)
{
    function addEvent(el, type, fn) 
    {
        if (el.addEventListener)
            el.addEventListener(type, fn, false);
        else
            el.attachEvent('on'+type, fn);
    }

    function extend(obj,ext)
    {
        for(key in ext)
          if(ext.hasOwnProperty(key))
            obj[key] = ext[key];
        return obj;
    }
    
    function fit(el) 
    {
        
      var resizer = function() 
      {
        el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
      };

      // Call once to set.
      resizer();

      // Bind events
      // If you have any js library which support Events, replace this part
      // and remove addEvent function (or use original jQuery version)
      addEvent(window, 'resize', resizer);
    }
    
    var compressor = kompressor || 1;

    var settings = extend({
        'minFontSize' : Number.NEGATIVE_INFINITY,
        'maxFontSize' : Number.POSITIVE_INFINITY
    },options);

    if (el.length)
      for(var i=0; i<el.length; i++)
        fit(el[i]);
    else
        fit(el);

    // return set of elements
    return el;
}
