//Receiving Peer

const p2p = require('p2p');

const peer = p2p.peer({
    host: 'localhost', 
    port: 4000,
    wellKnownPeers: { host: 'localhost', port: 3000 } //Peers
});

peer.handle.blockData = (data, done) => {
    console.log(data);
    done(null);
};