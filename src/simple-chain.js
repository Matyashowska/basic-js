const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  length: 0,
  getLength() {
    this.length = this.arr.length;
    return this;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    //let self = this;
    //console.log(this.length);
    this.getLength();
    console.log(this.length);
    if(typeof position !== 'number' || position <=0 || position > this.arr.length) {
      this.arr = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.arr.splice(position-1, 1);
    //console.log(self.getLength());
//     if(position <= ) {
      
//     }
//     if(this.arr.includes(`( ${position} )`)) {
//       this.arr.splice(this.arr.indexOf(`( ${position} )`), 1);
//     } else {
//       throw new Error("You can\'t remove incorrect link!");
//     }
    return this;
  },
  reverseChain() {
   console.log('info 4');
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    
    
    const res = this.arr.join('~~');
    this.arr = [];
    return res;
    throw new Error();
    
    //this.string = this.string.split(' ').join('--');
    // console.log(this.arr);
    // return this.arr;
  }
};

module.exports = {
  chainMaker
};
