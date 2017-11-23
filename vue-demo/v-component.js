Vue.component('mayer', {
    props: ['message'],
    template: '<h1>{{message}}</h1>'
});
Vue.component('chiku', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});
Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function () {
            this.counter += 1
            this.$emit('increment2')
        }
    },
});
new Vue({
    el: '#app',
    data: {
        parentMessage: 'Chiku',
        sites: [{ text: 'Google', id: 1 }, { text: 'Baidu', id: 2 }, { text: 'Yahoo', id: 3 }],
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }

});