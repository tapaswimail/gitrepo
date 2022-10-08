var libBst = require('./libBst');
var jt = require("json-toy");

let bst = new libBst.node(10);
for(let i=0;i<=10;i++){
    bst.insert(Math.floor(Math.random() * 10));
}
//bst.insert(9)
//bst.insert(6)
//bstJsonString=JSON.stringify(bst,null,"-");
//console.log(bstJsonString);

bstJsonTree=jt.treeify(bst);
console.log(bstJsonTree);
console.log(bst.search(9));
console.log(bst.recursiveInOrder(bst));
//console.log(bst.recursivePreOrder(bst));
//console.log(bst.recursivePostOrder(bst));
console.log(libBst.iterativeInorder(bst));