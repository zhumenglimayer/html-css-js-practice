var zzz = new Vue({
    el: '#app',
    data: {
        message: 'mmmmmmmmmayer'
    },
    filters: {
        capitalize: function(parm){
            if(!parm) return '';
            return parm.toString().toUpperCase();
        }
    } 
});