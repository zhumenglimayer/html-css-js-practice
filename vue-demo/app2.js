var myData = {
    search: '',
    friends: [
        {
            name: 'Mayer',
            age: 22
        },
        {
            name: 'Rose',
            age: 18
        },
        {
            name: 'Jack',
            age: 25
        }
    ],
    name: 'Ashley',
    age: 24
};

var chiku = new Vue({
    el: '#my_view',
    data: myData
});