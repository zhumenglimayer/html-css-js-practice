Vue.directive('focus', {
    inserted: function (el) {
        el.focus();
    }
});
Vue.directive('mayer', {
    bind: function (el, binding, vnode) {
        el.innerHTML =
            'name: ' + JSON.stringify(binding.name) + '<br>' +
            'value: ' + JSON.stringify(binding.value) + '<br>' +
            'expression: ' + JSON.stringify(binding.expression) + '<br>' +
            'argument: ' + JSON.stringify(binding.arg) + '<br>' +
            'modifiers: ' + JSON.stringify(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', ');
    }
});
Vue.directive('go', function(el,binding){
    el.innerHTML=binding.value.text;
    el.style.color=binding.value.color;
});
var zz = new Vue({
    el: '#app',
    data: {
        message: 'Chiku'
    }
});