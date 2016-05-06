/**
 * Created by Lily on 05.05.2016.
 */


$(function(){
    var html=$('#profile').html();

    var aboutMe= {
        myName: 'Lily Losik',
            whatI: 'I am a worker',
        wishes: 'I would like to learn frontend because:',
        interests1: 'It is interesting',
        interests2: 'I like to create new items',
        interests3: 'I like study new',
        phone: 'My contact phone',
        phoneNumber: '+380955338337',
        social: 'I am in vkontakte',
        socialSite: 'vk.com',
        feedback: 'My Feedback',
        can: 'I can do many things'
        };


    var content=tmpl(html, aboutMe);
    $('body').append(content);
});

