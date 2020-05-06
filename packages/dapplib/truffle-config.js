require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note remind provide grace beach swift genre'; 
let testAccounts = [
"0xfddc24e6f98de0d1af81f538c18921a11010483827fd297595485e6506537a2a",
"0xca7cae1ee741fbb80ee6ea621a1743715f909b9aa07e134b8f2e88f7fd7d96f6",
"0x58d5c693e96696b525f46be6704325db7f77143745d32821c4037fd5bcbeb68a",
"0x6535f1113855504aaf9b8b74d63c139d8ec7e020fd2852c86d21d91b999a8226",
"0x0df31545e409fe6b78c7965aa89558a5fe1791cc453da6e8d338dc478f02f160",
"0x56752d1afbe9afc8e57d3e506ebec282c792cec63f41f830bd9a6cf9eac06a7c",
"0xc388a3584c69246e8ac31eedc1d60045e5ce7dcff57c0402991ad79347b88b82",
"0x787379dc737c9a5cf5d58887659fc85918d39b5dec0a69b0e5208508cd488006",
"0x237a8d47afb17479a74e8c57b09ccd6d44b15c09b694d23fea68c3ca4014bc4c",
"0xc563a93594ba7259581b831471eceef008153a88fdfd992bb69eb962be929ff8"
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
