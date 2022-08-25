require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 31337,
			forking: {
				url: MAINNET_RPC_URL,
			},
		},
		localhost: {
			chainId: 31337,
		},
		rinkeby: {
			url: RINKEBY_RPC_URL,
			accounts: [PRIVATE_KEY],
			chainId: 4,
			blockConfirmations: 6,
		},
	},
	solidity: {
		compilers: [{ version: "0.8.7" }, { version: "0.6.12" }, { version: "0.4.24" }],
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY,
	},
	namedAccounts: {
		deployer: {
			default: 0,
		},
		player: {
			default: 1,
		},
	},
}
