import { Transform } from "node:stream";

class textReverse extends Transform {
  constructor () {
    super();
  };

  _transform(chunc, enc, done) {
    this.push(chunc.toString().split('').reverse().join('') + '\n');
    done();
  }
}

const transform = async () => {
  process.stdin
    .pipe(new textReverse())
    .pipe(process.stdout);
};

await transform();
