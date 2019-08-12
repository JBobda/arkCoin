const p2p = require('p2p');

const peer = p2p.peer({
    host: 'localhost', //Local IP or 'localhost'
    port: 3000,
    wellKnownPeers: { host: 'localhost', port: 4000 } //Peers
});

//console.log(peer.wellKnownPeers.get()[0]);
//0 = Self
//1 = localhost:4000

let peerSelected = peer.wellKnownPeers.get()[1];
peer.remote(
  peerSelected
).run('handle/blockData', { data: 'value' }, (err, result) => {
    if(err != null){
      console.log(err);
    }
    else{
      console.log("<<---Data is sent to " + peerSelected.host+ ":" + peerSelected.port+"--->>");
    }
});