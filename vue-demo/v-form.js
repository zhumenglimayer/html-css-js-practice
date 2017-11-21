var zz = new Vue({
    el: '#app',
    data: {
        message1: 'Mayer',
        message2: 'https://www.mayer.com',
        checked: false,
        seclectItems: [],
        seclectedItems: ["Mayer","Google","Taobao"]
    },
    methods: {
        seclectAll: function(){
            // 由于先发生click事件（checked还未改变），这里是!this.checked
            if(!this.checked){
                this.seclectItems=this.seclectedItems;
            }else{
                this.seclectItems=[];
            }
        }
    },
    watch: {
        seclectItems: function(){
            if(this.seclectItems.length==this.seclectedItems.length){
                this.checked=true;
            }else{
                this.checked=false;
            }
        }
    }
});