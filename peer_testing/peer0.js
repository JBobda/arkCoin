const { node } = require('../p2p/peer');

let node1 = new node('localhost',4000);
node1.connectToPeer('localhost',3000);
node1.sendTestMessage();
node1.sendCustomMessage({hi: "Hello"});