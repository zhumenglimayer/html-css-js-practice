var zzz = new Vue({
    el: '#app',
    data: {
        message: 'Mayer'
    },
    methods: {
        reverseMessage: function(){
            this.message=this.message.split('').reverse().join('');
        }
    }
});