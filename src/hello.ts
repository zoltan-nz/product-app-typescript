interface HelloParams {
    name: string;
    repeate?: number;
}

class Hello {
    constructor(params: HelloParams) {}

    say() {
        console.log(this.message)
    }
}

const h = new Hello({name: 'Joe'});

h.say();
// console.log(h.message);