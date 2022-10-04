var events=require('events');
var util=require('util');
var Person = function(name){
    this.name=name;
};
util.inherits(Person,events.EventEmitter);

var joy = new Person('joy');
var ajoy = new Person('ajoy');
var joypal = new Person('joypal');
var people=[joy,ajoy,joypal]; 

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+' said : '+msg);
    });
});

joy.emit('speak', 'hey baby');
ajoy.emit('speak', 'hellow guys');
