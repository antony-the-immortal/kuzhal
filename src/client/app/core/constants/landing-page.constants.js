/* global toastr:false, moment:false */
(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('landingPageContent',
        {
            "aboutUs": {
                "mainHeading": "About us",
                "tagLine": "Serving music lovers and students since 1999.",
                "descr": "<b>Kuzhal Isai Pattarai</b> provides a platform for the children and adults to achieve their music interests, making them learn different form of music through various music instruments.",
                "sub": [{
                    "heading": "The Training",
                    "desc": "Kuzhal Isai Pattarai trains students to pursue music as their career and make them excel in the industry. Today many of the Kuzhal Isai Pattarai students are performing in various music orchestras. Kuzhal Isai Pattarai provides very deep musical knowledge to the students and mold them to be outstanding performers. Special classes are getting conducted for the students who prepare for diploma, B music and M music in the music industry."
                },
                {
                    "heading": "The Trainer",
                    "desc": "The chief faculty and Founder of Kuzhal Isai Pattarai is Dr.T.S.Parthepan. He completed his PhD in music. Being a Lecture in the music, he performed several stage programs and now he is into training students by sharing his knowledge and experience."
                }]
            },
            "gallery": {
                "mainHeading": "Gallery",
                "tagLine": "A splash of our music school",
                "descr": "<b>Kuzhal Isai Pattarai</b> provides a platform for the children and adults to achieve their music interests, making them learn different form of music through various music instruments.",
            },
            "social" : {
                "mainHeading" :"Social Media",
                "tagLine" :"We publish our music videos in youtube and facebook",
                "youtube" : {
                    "subscription" : "https://www.youtube.com/subscribe_embed?usegapi=1&channelid=UC4xZLvCLQ1Bas8ZOdxU8iUg&layout=full&count=hidden&theme=dark&origin=https%3A%2F%2Fkuzhal.in&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.NgV8rtoUnnw.O%2Fm%3D__features__%2Fam%3DEQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCOxmWjbT0ppiQ3yLx8uFiX6FlGIZQ#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&id=I0_1508784854290&parent=https%3A%2F%2Fkuzhal.in&pfname=&rpctoken=19364368",
                    "video" : "https://www.youtube.com/embed/tqT8zhqFplI"
                }
            },
            "ourClasses": {
                "mainHeading": "Our Music Classes",
                "tagLine": "We'll make your music more harmonious every class.",
                "descr": "",
                "classes": [{
                    "id": "vocal",
                    "name": "Vocal",
                    "imagePath": "images/classes/vocal.jpg"
                },
                {
                    "id": "violin",
                    "name": "Violin",
                    "imagePath": "images/classes/violin.jpg"
                },
                {
                    "id": "veena",
                    "name": "Veena",
                    "imagePath": "images/classes/veena.jpg"
                },
                {
                    "id": "sax",
                    "name": "Saxophone",
                    "imagePath": "images/classes/sax.jpg"
                },
                {
                    "id": "keyboard",
                    "name": "KeyBoard",
                    "imagePath": "images/classes/keyboard.jpg"
                },
                {
                    "id": "guitar",
                    "name": "Guitar",
                    "imagePath": "images/classes/guitar.jpg"
                },
                {
                    "id": "flute",
                    "name": "Flute",
                    "imagePath": "images/classes/flute.jpg"
                },
                {
                    "id": "drums",
                    "name": "Drums",
                    "imagePath": "images/classes/drums.jpg"
                },
                {
                    "id": "lightmusic",
                    "name": "Light Music",
                    "imagePath": "images/classes/lightmusic.jpg"
                }]
            },
            "instruments": {
                "mainHeading": "Instruments",
                "tagLine": "Get trusted and tested instruments from the experts.",
                "descr": "",
                "items": {
                    "drum": {
                        "label": "Drum",
                        "from": "18000",
                        "imagePath": "images/instruments/drum.jpg"
                    },
                    "flute": {
                        "label": "Flute",
                        "from": "200",
                        "imagePath": "images/instruments/flute.jpg"
                    },
                    "keyboard": {
                        "label": "Keyboard",
                        "from": "4000",
                        "imagePath": "images/instruments/keyboard.jpg"
                    },
                    "violin": {
                        "label": "Violin",
                        "from": "4500",
                        "imagePath": "images/instruments/violin.jpg"
                    },
                    "guitar": {
                        "label": "Guitar",
                        "from": "5000",
                        "imagePath": "images/instruments/guitar.jpg"
                    },
                    "tanpura": {
                        "label": "Tanpura",
                        "from": "5000",
                        "imagePath": "images/instruments/thampora.jpg"
                    },
                    "sax": {
                        "label": "Saxophone",
                        "from": "8000",
                        "imagePath": "images/instruments/sax.jpg"
                    },
                    "veenai": {
                        "label": "Saxophone",
                        "from": "15000",
                        "imagePath": "images/instruments/veena.jpg"
                    }
                }
            }
        })
})();
