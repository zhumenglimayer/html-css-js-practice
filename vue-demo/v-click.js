var zz = new Vue({
    el: '#app',
    methods: {
        say: function(message){
            alert(message);
        }
    }
});

zz.say('Say');