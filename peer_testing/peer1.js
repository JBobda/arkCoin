const { node } = require('../p2p/peer');

let node2 = new node('localhost',3000);
node2.connectToPeer('localhost',4000);