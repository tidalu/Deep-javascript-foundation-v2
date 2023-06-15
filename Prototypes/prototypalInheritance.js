function Workshop(teacher) {
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
};

function AnotherWorkshop(teacher){
    Workshop.call(this,teacher);    
}

AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speakUp = function(msg){
    this.ask(msg.toUpperCase());
};

var JsRecentParts = new AnotherWorkshop("Kyle");

JsRecentParts.speakUp("Is it actually inheritance?");


// inheritance is Delegation



// let's simplify

// OLOO pattern

// Object linked to Other Objects


// OLOO: recall class?

class Workshop1 {
    constructor(teacher){
        this.teacher = teacher ;
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}

class AnotherWorkshop1 extends Workshop1 {
    speakUp(msg) {
        this.ask(msg);
    }
}
var JsRecentParts1 = new AnotherWorkshop1("Silli");

JsRecentParts1.speakUp("Are classes getting better?");


// OLOO: delegated objects

var Workshop2 = {
    setTeacher(teacher) {
        this.teacher = teacher;
    },
    ask(question ){
        console.log(this.teacher, question);
    }
};

var AnotherWorkshop2 = Object.assign(
    Object.create(Workshop2),
    {
        speakUp(msg){
            this.ask(msg.toUpperCase());
        }
    }
);

var JsRecentParts2 = Object.create(AnotherWorkshop2);
JsRecentParts2.setTeacher("Ulug'bek");
JsRecentParts2.speakUp("But isnot this cleaner?");
console.log(Workshop2);

// how Object.create do that magic

if(!Object.create) {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}