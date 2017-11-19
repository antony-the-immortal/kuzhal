/* global toastr:false, moment:false */
(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('landingPageContent',
        {
            "marquee": {
                title: "12/12/2017",
                info: " Classes will be on holiday from 12/12/2017 to 15/12/2017"
            },
            "aboutUs": {
                "mainHeading": "About us",
                "tagLine": "Serving music lovers and students since 1999.",
                "descr": "<b>Kuzhal Isai Pattarai</b> provides a platform for the children and adults to achieve their music interests, making them learn different form of music through various music instruments.",
                "sub": [{
                    "heading": "The Training",
                    "desc": "<strong>Kuzhal Isai Pattarai</strong> trains students to pursue music as their career and make them excel in the industry. Today many of the Kuzhal Isai Pattarai students are performing in various music orchestras. Kuzhal Isai Pattarai provides very deep musical knowledge to the students and mold them to be outstanding performers. Special classes are getting conducted for the students who prepare for diploma, B music and M music in the music industry."
                },
                {
                    "heading": "The Trainer",
                    "desc": "The chief faculty and Founder of Kuzhal Isai Pattarai is <strong>Dr.T.S.Parthepan</strong>. He completed his PhD in music. Being a Lecture in the music, he performed several stage programs and now he is into training students by sharing his knowledge and experience."
                }]
            },
            "gallery": {
                "mainHeading": "Gallery",
                "tagLine": "A splash of our music school",
                "descr": "<b>Kuzhal Isai Pattarai</b> provides a platform for the children and adults to achieve their music interests, making them learn different form of music through various music instruments."
            },
            "social": {
                "mainHeading": "Social Media",
                "tagLine": "We publish our music videos in youtube and facebook",
                "youtube": {
                    "subscription": "https://www.youtube.com/subscribe_embed?usegapi=1&channelid=UC4xZLvCLQ1Bas8ZOdxU8iUg&layout=full&count=hidden&theme=dark&origin=https%3A%2F%2Fkuzhal.in&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.NgV8rtoUnnw.O%2Fm%3D__features__%2Fam%3DEQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCOxmWjbT0ppiQ3yLx8uFiX6FlGIZQ#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&id=I0_1508784854290&parent=https%3A%2F%2Fkuzhal.in&pfname=&rpctoken=19364368",
                    "videoID": "tqT8zhqFplI",
                    "video": "https://www.youtube.com/embed/tqT8zhqFplI?rel=0"
                    
                },
                "gmap": {
                    "apiKey": "AIzaSyDPR6zPXtIspAs3ompKuu4fIYumXsVzbWw,",
                    "urlWithKey": "https://www.google.com/maps/embed/v1/place?key=AIzaSyDPR6zPXtIspAs3ompKuu4fIYumXsVzbWw&q=Kuzhal+Isai+Pattarai+600100",
                    "embedUrl": "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d15555.512714131168!2d80.17231871571275!3d12.915550419215704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d12.9122328!2d80.17227749999999!4m5!1s0x3a525c1dee36e907%3A0x87a1f231610aafd3!2sKuzhal+Isai+Pattarai+600100!3m2!1d12.913031199999999!2d80.1882755!5e0!3m2!1sen!2sin!4v1508953497750",
                    "map": "http://www.google.co.in/search?q=Kuzhal+Isai+Pattarai,+600100,+10/734,+3rd+Main+Rd,+Babu+Nagar,+Munusamy+Nagar,+Vimala+Nagar,+Medavakkam,+Chennai,+Tamil+Nadu+600100&ludocid=9773358960266096595#lrd=0x3a525c1dee36e907:0x87a1f231610aafd3,1"
                }
            },
            "ourClasses": {
                "mainHeading": "Our Music Classes",
                "tagLine": "We'll make your music more harmonious every class.",
                "descr": "",
                "classes": [{
                    "id": "vocal",
                    "name": "Vocal",
                    /* "imagePath": "images/classes/vocal_class.jpg", */
                    "imagePath": "images/classes/violin.jpg",
                    "tutorial": "https://www.youtube.com/playlist?list=PLq2pC9LK8Wg2vr9sqHe4x_3CHcbNtHJ7I",
                    "desc": ["In many traditional cultures, Vocal have a symbolic function and are used in religious ceremonies. Vocal are often used in music therapy, vocal music is probably the oldest form of music, since it does not require any instrument besides the human voice."],
                    "syllabus": [{
                        "grade": "Grade 1",
                        "content": ["Sarali Varisai", "Jandai Varisai", "Melsthayi", "Keel swara Varisai", "Sanchari Geetham", "Thevaram"]
                    },
                    {
                        "grade": "Grade 2",
                        "content": ["Thattu Varisaigal - 2", "Alangarangal", "Sanchari Geetham - 2", "Swarajati -1", "Thevaram"]
                    },
                    {
                        "grade": "Grade 3",
                        "content": ["Thirupugazh - 1", "Divya prabandam - 1", "Lakshana Geetham - 1", "Jatiswaram", "Thiruvarutpa"]
                    },
                    {
                        "grade": "Grade 4",
                        "content": ["Tana Varnam", "Ata Tala Varnam", "Alwar Pesuram"]
                    },
                    {
                        "grade": "Grade 5",
                        "content": ["Tamizh Krithis", "Krithis", "Kavadichindhu"]
                    }]
                },
                {
                    "id": "violin",
                    "name": "Violin",
                    "imagePath": "images/classes/violin.jpg",
                    "tutorial" : "https://www.youtube.com/embed/videoseries?list=PLq2pC9LK8Wg2y4TqYPKjb4mFfjOSHaYGS",
                    "desc": ["The violin can be a very intimidating musical instrument to begin – Beyond the technical challenges there are the simple logistics of finding the right instrument, teacher, music books and more. What if you could take away all those worries? For one week in a group camp setting, your child could have use of a violin, have music and assignments printed out for them, and learn about making music in a fun, low-pressure setting with their peers. In small group classes of similar age kids, the students quickly learn the most important aspects of music and violin playing through great music and fun games.",
                            "Our Violin Programme teaches students the basics of playing on the violin, getting to know the scales and strings, understanding the bow and how to use it, as well as how to take care of the violin and its various components."],
                            "syllabus": [{
                                "grade": "Grade 1",
                                "content": ["Sarali Varisai", "Jandai Varisai", "Melsthayi", "Keel swara Varisai", "Thattu Varisaigal - 2", "Alangarangal"]
                            },
                            {
                                "grade": "Grade 2",
                                "content": ["Sanchari Geetham - 2", "Jathiswaram - 1", "Swarajati -1"]
                            },
                            {
                                "grade": "Grade 3",
                                "content": ["Sanchari Geetham - 2", "Jathiswaram - 1", "Ata Tala Varnam"]
                            },
                            {
                                "grade": "Grade 4",
                                "content": ["Ata Tala Varnam - 2", "Krithis - 4", "Thevaram - 1", "Keethanas - 4", "Thiruppugazh - 1"]
                            },
                            {
                                "grade": "Grade 5",
                                "content": ["Tana Varnam - 2", "Navaragamaliga Varnam -1", "Keethanas - 4", "Aazhvaar pasuram", "Patriotic Songs - 2"]
                            }]
                },
                {
                    "id": "veena",
                    "name": "Veena",
                    "imagePath": "images/classes/veena.jpg",
                    "desc": ["The learning levels in Veena instrumental music lessons offer a complete learning as a hobby with the instrumental music education curriculum and a complete well-defined Veena musical instrument studying syllabus for a promising career in music as Veena musical instrument performer or teaching Veena musical instrument. The famous, experienced, senior Indian Veena instrumental music teachers in Kuzhal IsaiPattarai - the Veena gurus teach us how to play Veena and technique of playing the traditional classical Indian instrumental music.",
                            "Our professional Veena instructors are experienced in guiding students who have no prior background knowledge. For those who have some Veena skills and experience, our instructors will help them achieve their potential in expressing themselves fully. To find out more, feel free to drop us an enquiry"],
                    "tutorial" : "https://www.youtube.com/embed/videoseries?list=PLq2pC9LK8Wg1ccQpY16LZVFI_Mhagvhhb",
                    "syllabus": [{
                        "grade": "Grade 1",
                        "content": ["Sarali Varisaigal", "Jandai Varisaigal", "Melsthayi Varisai", "Keel swara Varisai", "Thattu Varisaigal - 2", "Alankarangal"]
                    },
                    {
                        "grade": "Grade 2",
                        "content": [ "Sanchari Geetham - 2", "Jathiswaram - 1", "Swarajati -1"]
                    },
                    {
                        "grade": "Grade 3",
                        "content": ["Sanchari Geetham - 2", "Jathiswaram - 1", "Athi thaala Varnam"]
                    },
                    {
                        "grade": "Grade 4",
                        "content": ["Athi thaala Varnam - 2", "Krithis - 4", "Thevaram - 1", "Keethanas - 4","Thirupugazh - 1"]
                    },
                    {
                        "grade": "Grade 5",
                        "content": ["Thana Varnam - 2", "Navaragamaliga Varnam -1","Keerthanas - 4", "Aazhvaar pasuram", "Patriotic Songs - 2"]
                    }]
                },
                {
                    "id": "sax",
                    "name": "Saxophone",
                    "imagePath": "images/classes/sax.jpg",
                    "desc": ["Our Saxophone Programme teaches students how to be able to achieve the learning goals above, through the use of simple and easy-to-understand learning materials and teaching techniques.Our professional Saxophone instructors are experienced in guiding students who have no prior background knowledge. For those who have some Saxophone skills and experience, our instructors will help them achieve their potential. To find out more, feel free to drop us an enquiry."],
                    "syllabus": [{
                        "grade": "Grade 1",
                        "content": ["Sarali Varisaigal", "Jandai Varisaigal", "Melsthayi Varisai", "Keel swara Varisai", "Thattu Varisaigal - 2", "Alankarangal"]
                    },
                    {
                        "grade": "Grade 2",
                        "content": [ "Sanchari Geetham - 2", "Jathiswaram - 1", "Swarajati -1"]
                    },
                    {
                        "grade": "Grade 3",
                        "content": ["Sanchari Geetham - 2", "Jathiswaram - 1", "Athi thaala Varnam"]
                    },
                    {
                        "grade": "Grade 4",
                        "content": ["Athi thaala Varnam - 2", "Krithis - 4", "Thevaram - 1", "Keethanas - 4","Thirupugazh - 1"]
                    },
                    {
                        "grade": "Grade 5",
                        "content": ["Thana Varnam - 2", "Navaragamaliga Varnam -1","Keerthanas - 4", "Aazhvaar pasuram", "Patriotic Songs - 2"]
                    }]
                },
                {
                    "id": "keyboard",
                    "name": "KeyBoard",
                    "imagePath": "images/classes/keyboard.jpg",
                    "desc": ["This course aims to prepare students to perform in musical productions of different genres and styles. This course focuses heavily on instrumental performance. The students will gain solid foundations and the ability to perform in various roles, such as soloist, accompaniment and rehearsals. They will also acquire the skills necessary to become a professional in music instructor. During the course students will be given plenty of opportunities to take part in a lot of hands-on activities.",
                        "Our Keyboard Programme teaches students how to be able to achieve the learning goals above, through the use of simple and easy-to-understand learning materials and teaching techniques.Our professional Keyboard instructors are experienced in guiding students who have no prior background knowledge. For those who have some Keyboard skills and experience, our instructors will help them achieve their potential in expressing themselves fully."],
                    "tutorial" : "https://www.youtube.com/embed/videoseries?list=PLq2pC9LK8Wg3IDYqVQwEsjKcjLJpQ9pB7",
                    "syllabus": [{
                        "grade": "Grade 1",
                        "content": ["Sarali Varisaigal", "Jandai Varisaigal", "Melsthayi Varisai", "Keel swara Varisai", "Thattu Varisaigal - 2", "Alankarangal"]
                    },
                    {
                        "grade": "Grade 2",
                        "content": [ "Sanchari Geetham - 2", "Jathiswaram - 1", "Swarajati -1"]
                    },
                    {
                        "grade": "Grade 3",
                        "content": ["Sanchari Geetham - 2", "Jathiswaram - 1", "Athi thaala Varnam"]
                    },
                    {
                        "grade": "Grade 4",
                        "content": ["Athi thaala Varnam - 2", "Krithis - 4", "Thevaram - 1", "Keethanas - 4","Thirupugazh - 1"]
                    },
                    {
                        "grade": "Grade 5",
                        "content": ["Thana Varnam - 2", "Navaragamaliga Varnam -1","Keerthanas - 4", "Aazhvaar pasuram", "Patriotic Songs - 2"]
                    }]
                },
                {
                    "id": "guitar",
                    "name": "Guitar",
                    "imagePath": "images/classes/guitar.jpg",
                    "desc": ["We have a guitar teachers here in Chennai that go all out in helping you learn the guitar effectively. We have a proper structure in ensuring that you learn the proper techniques in playing the guitar, yet giving you the liberty to choose the style of playing you want to learn. Some students want to learn how to strum and sing yet some prefer learning how to finger pluck to their favourite songs.",
                            "These are the guitar lessons that should be done first, even if you are an experienced guitar or bass player you may find something here that helps you understand this music course better. The beginner guitar lessons here cover the basics of learning to play guitar or bass, as well as an introduction to the learn guitar course. The information in these music lessons ranges from instruction on stringing and tuning your guitar or bass to hand positioning, playing chords using guitar chord charts, and other music lesson information and techniques."],
                    "tutorial" : "https://www.youtube.com/embed/videoseries?list=PLq2pC9LK8Wg20f_Ngxrl7y7ljrv2Osxm6",
                    "syllabus": [{
                        "grade": "Grade 1",
                        "content": ["Sarali Varisaigal", "Jandai Varisaigal", "Melsthayi Varisai", "Keel swara Varisai", "Thattu Varisaigal - 2", "Alankarangal"]
                    },
                    {
                        "grade": "Grade 2",
                        "content": [ "Sanchari Geetham - 2", "Jathiswaram - 1", "Swarajati -1"]
                    },
                    {
                        "grade": "Grade 3",
                        "content": ["Sanchari Geetham - 2", "Jathiswaram - 1", "Athi thaala Varnam"]
                    },
                    {
                        "grade": "Grade 4",
                        "content": ["Athi thaala Varnam - 2", "Krithis - 4", "Thevaram - 1", "Keethanas - 4","Thirupugazh - 1"]
                    },
                    {
                        "grade": "Grade 5",
                        "content": ["Thana Varnam - 2", "Navaragamaliga Varnam -1","Keerthanas - 4", "Aazhvaar pasuram", "Patriotic Songs - 2"]
                    }]
                },
                {
                    "id": "flute",
                    "name": "Flute",
                    "imagePath": "images/classes/flute.jpg",
                    "desc": [ "Flute, one of the most beautiful and enchanted sound created. With it’s mid to high pitch sound, it’s often relate to singing of the birds, painting a beautiful picture of an enchanted forest with trees, flowers, waterfalls and streams. Aside from the voice, flutes are the earliest known musical instruments. A number of flutes dating to about 35,000 to 40,000 years ago have been found in the Swabian Alb region of Germany. These flutes demonstrate that a developed musical tradition existed from the earliest period of modern human presence in Europe.",
                    "Our professional Flute instructors are experienced in guiding students with no prior background knowledge. For those who have some Flute skills and experience, our instructors will help them achieve their potential in expressing themselves fully."],
                    "tutorial" : "https://www.youtube.com/embed/videoseries?list=PLq2pC9LK8Wg2oXYyfITJMPam7UiDHAe97",
                    "syllabus": [{
                        "grade": "Grade 1",
                        "content": ["Sarali Varisaigal", "Jandai Varisaigal", "Melsthayi Varisai", "Keel swara Varisai", "Thattu Varisaigal - 2", "Alankarangal"]
                    },
                    {
                        "grade": "Grade 2",
                        "content": [ "Sanchari Geetham - 2", "Jathiswaram - 1", "Swarajati -1"]
                    },
                    {
                        "grade": "Grade 3",
                        "content": ["Sanchari Geetham - 2", "Jathiswaram - 1", "Athi thaala Varnam"]
                    },
                    {
                        "grade": "Grade 4",
                        "content": ["Athi thaala Varnam - 2", "Krithis - 4", "Thevaram - 1", "Keethanas - 4","Thirupugazh - 1"]
                    },
                    {
                        "grade": "Grade 5",
                        "content": ["Thana Varnam - 2", "Navaragamaliga Varnam -1","Keerthanas - 4", "Aazhvaar pasuram", "Patriotic Songs - 2"]
                    }]
                },
                {
                    "id": "drums",
                    "name": "Drums",
                    "imagePath": "images/classes/drums.jpg",
                    "desc": ["Drums are usually played by striking with the hand, or with one or two sticks. In many traditional cultures, drums have a symbolic function and are used in religious ceremonies. Drums are often used in music therapy, especially hand drums, because of their tactile nature and easy use by a wide variety of people. The drum head has the most effect on how a drum sounds. Each type of drum head serves its own musical purpose and has its own unique sound. Our professional drum instructors are experienced in guiding students who have no prior background knowledge."],
                    "syllabus": null
                },
                {
                    "id": "lightmusic",
                    "name": "Light Music",
                    "imagePath": "images/classes/lightmusic.jpg",
                    "tutorial" : "https://www.youtube.com/embed/NE-FiKraKFc?rel=0",
                    "desc": ["The style is a less \"serious\" form of Western classical music, featuring through-composed, usually shorter orchestral pieces and suites designed to appeal to a wider audience than more serious compositions."],
                    "syllabus": [{
                        "grade": "Grade 1",
                        "content": ["Sarali Varisai", "Jandai Varisai", "Melsthayi", "Keel swara Varisai"]
                    },
                    {
                        "grade": "Grade 2",
                        "content": ["Dhattu Varisai", "Alankaram", "Sanchari Geetham", "Thevaram"]
                    },
                    {
                        "grade": "Grade 3",
                        "content": ["Voice Testing", "Mic Testing", "Scale(Sruthi) Testing"]
                    },
                    {
                        "grade": "Grade 4",
                        "content": ["Tempo Testing", "Pronounciation Testing", "Confidence"]
                    }]
                }]
            },
            "instruments": {
                "mainHeading": "Instruments",
                "tagLine": "Get trusted and tested instruments from the experts.",
                "descr": "",
                "items": {
                    "drum": {
                        "label": "Drum",
                        "price": "17999",
                        "imagePath": "images/instruments/drum_lg.jpg"
                    },
                    "flute": {
                        "label": "Flute",
                        "price": "1999",
                        "imagePath": "images/instruments/flute_lg.jpg"
                    },
                    "keyboard": {
                        "label": "Keyboard",
                        "price": "3999",
                        "imagePath": "images/instruments/keyboard_lg.jpg"
                    },
                    "violin": {
                        "label": "Violin",
                        "price": "4499",
                        "imagePath": "images/instruments/violin_lg.jpg"
                    },
                    "guitar": {
                        "label": "Guitar",
                        "price": "4999",
                        "imagePath": "images/instruments/guitar_lg.jpg"
                    },
                    "tanpura": {
                        "label": "Tanpura",
                        "price": "4999",
                        "imagePath": "images/instruments/thampora_lg.jpg"
                    },
                    "sax": {
                        "label": "Saxophone",
                        "price": "7999",
                        "imagePath": "images/instruments/sax_lg.jpg"
                    },
                    "veenai": {
                        "label": "Veenai",
                        "price": "14999",
                        "imagePath": "images/instruments/veena_lg.jpg"
                    }
                }
            }
        })
})();
