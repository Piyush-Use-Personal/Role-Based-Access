import sha256 from 'crypto-js/sha256.js';
export class Block {
    constructor(
        index,
        timestamp,
        transaction,
        precedingHash=''
    ){
     this.index = index;
     this.timestamp = timestamp;
     this.transaction = transaction;
     this.precedingHash = precedingHash;
     this.hash = this.computeHash();
    }
    computeHash(){
        return sha256(
            this.index + 
            this.precedingHash + 
            this.timestamp + 
            JSON.stringify(this.transaction)
        ).toString();
    }  
}
export class BlockChain {
    constructor() {
        this.id = '';
        this.name = '';
        this.blockchain = '';
        this.difficulty = '';
    }
    create(id, name, genesis){
        this.id = id;
        this.name = name;
        this.blockchain = [this.startGenesisBlock(genesis)];  
        this.difficulty = 4;   
    }
    startGenesisBlock(genesis){
        return new Block(
            0,
            genesis.date,
            genesis.transaction,
            "0"
        );
    }
    obtainLatestBlock(){
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock){
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    }
    checkChainValidity(){
        for(let i = 1; i < this.blockchain.length; i++){
            const currentBlock = this.blockchain[i];
            const precedingBlock= this.blockchain[i-1];

          if(
              currentBlock.hash !== currentBlock.computeHash()
            ){
              return false;
          }
          if(
              currentBlock.precedingHash !== precedingBlock.hash
            )
            return false;
        }
        return true;
    }
}