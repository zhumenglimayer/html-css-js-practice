var zz = new Vue({
    el: '#app',
    data: {
        message: 'Mayer_Chiku',
        name: 'Google',
        url: 'http://www.google.com'
    },
    computed: {
        reverseMessage: function(){
            return this.message.split('').reverse().join('');
        },
        site: {
            get: function(){
                return this.name+ ' ' + this.url;
            },
            set: function(newValue){
                var value = newValue.split(' ');
                this.name= value[0];
                this.url=value[value.length-1];
            }
        }
    }
});

zz.site='Makeroff http://www.makeroff.com';