(function() {
  'use strict';

  angular
    .module('app.core')
    .constant("kuzhalConstants", {
        "kuzhalData" : {
        	"phoneNumbers" : ["+91 98410 70001", "+91 98410 90001", "+91 98410 80001"],
          "email"	: "mail@kuzhal.in",
          "address" : {
            "addressLine1" : "No 10/734, 3rd Main Road, VGP Babu Nagar",
            "addressLine2" : "Medavakkam",
            "city" :"Chennai",
            "state" : "Tamil Nadu",
            "pinCode" : "600100"
          }
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
          "youtube" : "https://www.youtube.com/subscribe_embed?usegapi=1&channelid=UC4xZLvCLQ1Bas8ZOdxU8iUg&layout=full&count=hidden&theme=dark&origin=https%3A%2F%2Fkuzhal.in&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.NgV8rtoUnnw.O%2Fm%3D__features__%2Fam%3DEQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCOxmWjbT0ppiQ3yLx8uFiX6FlGIZQ#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&id=I0_1508784854290&parent=https%3A%2F%2Fkuzhal.in&pfname=&rpctoken=19364368",
          "map" : "http://www.google.co.in/search?q=Kuzhal+Isai+Pattarai,+600100,+10/734,+3rd+Main+Rd,+Babu+Nagar,+Munusamy+Nagar,+Vimala+Nagar,+Medavakkam,+Chennai,+Tamil+Nadu+600100&ludocid=9773358960266096595#lrd=0x3a525c1dee36e907:0x87a1f231610aafd3,1"
        }
	});
})();