require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food trap return machine slow coral light army gauge'; 
let testAccounts = [
"0x43933062a0988e655ccbb75e102ea427ba269cc320f2cb040fa7ac319603f241",
"0x41593929589e3283cb147aaa255842b567dd71877231eae320732cf1b06025ed",
"0x2752ab3b2c7447e2734719a48d3b6af0517e7f2a8f51d17450effc4973bc11d2",
"0x3224109cf314de7495109e0e750eeedc14e97c36d7660a2d2d6dfd9523caad5b",
"0x40d51db7226b256565505aeab9bb6317f7e2c8dd02a9ec7cca275b1b6d3ab8f2",
"0xc238ebf49b89efbf9133d5b5e0cec4d7b012bcbb68f06850df843eec48833735",
"0xefab3a208a6e532948ea90fb548888c98e32c56c5f0a3291a8fb109559de0520",
"0x54dfb6026525101f2fad4c53184f86d1655c41495e107051cdbdcb178e22bb16",
"0x8c54a8ec1da9640a132c289f17818601a018a74be8e672cbbd35aa5f46ffcc06",
"0x0bee1dba73dac3bb0abe2d8b196d1ae044103375513b17a1f40ddf9b17d2dbd1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
