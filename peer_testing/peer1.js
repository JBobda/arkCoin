const node_module = require('../p2p/peer');

let node2 = new node_module.node('localhost',3000);
node2.connectToPeer('localhost',4000);