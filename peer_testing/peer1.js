const p2p = require('p2p');

const peer = p2p.peer({
    host: 'localhost',
    port: 3000,
    wellKnownPeers: { host: 'localhost', port: 4000 } //Peers
});

peer.remote({
    host: 'localhost',
    port: 4000
  }).run('handle/foo', { foo: 'bar' }, (err, result) => {
    // ...
});