class Workshop {
    constructor(teacher) {
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}

var deepJs = new Workshop("Kyle");
var ReactJs = new Workshop("Suzy");

deepJs.ask("How is it going on man?");

ReactJs.ask("U ar eu doing very good stuffs to Kyle, cuz he is referencing u everywhere");

// extend one class to another class

class anotherWorkshop {
    constructor (teacher ) {
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}

class anotherWorkshop1 extends anotherWorkshop{
    speakUp(msg){
        this.ask(msg);
    }
}

class anotherWorkshop2 extends anotherWorkshop{
    speakUp(msg){
        super.ask(msg.toUpperCase());
    }
}

var JsRecentparts = new anotherWorkshop2("Kyle");
JsRecentparts.speakUp("are u speakling slowly?");
JsRecentparts.ask("are u speakling slowly? this is written by using ask");


// even if we use class methods anyway when we use setTimeOut we use this binding

var losing = new Workshop("Ulugbek");

setTimeout(losing.ask, 100, "u are crazy, still losing 'this'");

// fixing "this"

class Gunshop {
    constructor(teacher) {
        this.teacher = teacher;
        this.ask = question => {
            console.log(this.teacher, question);
        };
    }
}

var fixingThis = new Gunshop("Commander");

setTimeout(fixingThis.ask, 100, "We are loosing our ammos , but fixed this");