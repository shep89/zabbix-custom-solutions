// Discovery Rule preprocessing JavaScript filter
// function (value) {
function convert1251toutf8(utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }

    return string;
}

  obj = JSON.parse(value);
  var ishex = /^([0-9A-F]\s*)+$/;
  obj.forEach(function (item) {
    if (ishex.test(item["{#SNMPVALUE}"]))
    {
      var hex  = item["{#SNMPVALUE}"].replace(/ /g,'');
    	var str = '';
    	for (var n = 0; n < hex.length; n += 2) {
    	  if (hex.substr(n, 2) != "00")
    		  str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    	}
    	item["{#SNMPVALUE}"] = convert1251toutf8(str);
    }
  });
// }
