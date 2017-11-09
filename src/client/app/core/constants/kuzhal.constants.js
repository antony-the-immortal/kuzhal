(function() {
  'use strict';

  angular
    .module('app.core')
    .constant("kuzhalConstants", {
        "kuzhalData" : {
        	"phoneNumbers" : ["+91 98410 70001", "+91 98410 90001","+91 9841050002", "+91 98401 80001"],
          "email"	: "mail@kuzhal.in",
          "address" : {
            "addressLine1" : "No 10/734, 3rd Main Road, VGP Babu Nagar",
            "addressLine2" : "Medavakkam",
            "city" :"Chennai",
            "state" : "Tamil Nadu",
            "pinCode" : "600100"
          },
          "paymentUrl" : "https://www.onlinesbi.com/prelogin/icollecthome.htm?corpID=804119"
        },
        "accredition" : {
          "1" : {
            "title" : "Tamilnadu Music Education",
            "detail": "Affliated to Tamil Nadu Music and Fine Arts University (Art TN 02 E 0037089)",
            "imagePath" : "images/accredition/Annamalai_University_logo.png"
          },
          "2" :{
            "title" : "Tamilnadu Small Scale",
            "detail" : "Registered with Tamilnadu Small Industries Development Corporation Limited (33 00 321 64565)",
            "imagePath": "images/accredition/logoania1.gif"
          }
        },
        "social" : {
          "facebook" : "https://www.facebook.com/kuzhal.isaipattarai",
          "youtube" : "https://www.youtube.com/channel/UC4xZLvCLQ1Bas8ZOdxU8iUg",
          "map" : "http://www.google.co.in/search?q=Kuzhal+Isai+Pattarai,+600100,+10/734,+3rd+Main+Rd,+Babu+Nagar,+Munusamy+Nagar,+Vimala+Nagar,+Medavakkam,+Chennai,+Tamil+Nadu+600100&ludocid=9773358960266096595#lrd=0x3a525c1dee36e907:0x87a1f231610aafd3,1"
        }
	});
})();