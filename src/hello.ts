class Hello {
    constructor(private message:string) {}

    say() {
        console.log(this.message)
    }
}

const h = new Hello('5');

h.say();
// console.log(h.message);