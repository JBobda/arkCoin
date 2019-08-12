const node_module = require('../p2p/peer');

let node1 = new node_module.node('localhost',4000);
node1.connectToPeer('localhost',3000);
node1.sendTestMessage();