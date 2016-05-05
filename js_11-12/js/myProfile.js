/**
 * Created by Lily on 05.05.2016.
 */
/*$(function(){
    var html = $('#profile').html();
    console.log('template', html);
    var data = {myName: 'Lily Losik'};
    var content = tmpl(html, data);
    $('body').append(content);
});*/

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

/*
<div class="my_wishes">
<p class="learning">I would like to learn frontend because:</p>


<ul class="my_interests">
<li>It is interesting</li>
<li>I like to create new items</li>
<li>I like study new</li>
</ul>
</div>

<hr>

<div class="contacts">
<p>My contact phone <br>
+380955338337</p>
</div>

<div class="profile">
<p>I am in vkontakte<br>
<a href="http://www.vk.com">vk.com</a></p>
</div>
<hr>
<div class="feedback">
<p>My Feedback <br>
I can do many things</p>
</div>*/