/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'c4ei',
    networks: {
      hardhat: {},
      c4ei: {
        url: 'http://192.168.1.186:21004',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
        ,network_id: "21004"
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
