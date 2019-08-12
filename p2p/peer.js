//Receiving Peer

const p2p = require('p2p');
class node{
    constructor(host,port){
        this.peer = p2p.peer({
            host: host, 
            port: port,
            wellKnownPeers: []//Peers
        });

        //Instantiating receiving requests
        this.peer.handle.getTestMessage = (data, done) => {
            console.log("Data recieved: ");
            console.log(data);
            done(null);
        };
    }

    connectToPeer(host,port){
        this.addPeer(host,port);
        this.peerSelected = this.peer.wellKnownPeers.get()[1];
    }

    disconnectFromPeer(){
        this.peer.wellKnownPeers.peers.pop();
    }

    //Get methods
    getPeerList(){
        console.log(this.peer.wellKnownPeers.get());
    }

    getConnectionStatus(){
        console.log(this.peer.status());
    }

    sendTestMessage(){
        this.peer.remote(
            this.peerSelected
        ).run('handle/getTestMessage', { data: 'value' }, (err, result) => {
            if(err != null){
                console.log(err);
            }
            else{
                console.log("<<---Data is sent to " + this.peerSelected.host+ ":" + this.peerSelected.port+"--->>");
            }
        });
    } 
    
    //Internal functions
    addPeer(desiredHost,desiredPort){
        this.peer.wellKnownPeers.peers.push({host: desiredHost, port: desiredPort});
    }
}

module.exports.node = node;