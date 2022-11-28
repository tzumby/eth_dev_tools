require("dotenv").config();
const fs = require("fs");

require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');

const defaultNetwork = "localhost";
const mainnetGwei = 27;

function mnemonic() {
  try {
    return fs.readFileSync("./mnemonic.txt").toString().trim();
  } catch (e) {
    if (defaultNetwork !== "localhost") {
      console.log("☢️ WARNING: No mnemonic file created for a deploy account.");
    }
  }
  return "";
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork,
  solidity: {
    compilers: [
      {
      version: "0.8.17",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    }
    ]
  },
  networks: {
    localhost: {
      url: "http://localhost:8545"
    },
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts: {
        mnemonic: mnemonic(),
      }
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
