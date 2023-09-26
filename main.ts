import whitelist from "./whitelist.json";
import { ethers } from "ethers";
import { MerkleTree } from 'merkletreejs'

async function main() {
    const sessionId = 1;
    const leaves: string[] = whitelist.map(addr => 
        ethers.keccak256(ethers.solidityPacked(['address', 'uint256'], [addr, sessionId]))
    );
    console.log('Leaves: ', leaves);
    const tree = new MerkleTree(leaves, ethers.keccak256)
    const root = tree.getRoot();
    console.log('Root:', root.toString('hex'))
}

main();