const web3 = require('web3')
const web3 = new web3( new web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${process.env.Infura_Key_ID}`));

module.export = web3


