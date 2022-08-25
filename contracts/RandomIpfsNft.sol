// SPDX-License-Identifier: MIT

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.7;

contract RadomIpfsNft {
	// Using Chainlink VRF to get a random number, and then use it to get a random IPFS hash.

	function requestNft() public {}

	function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords) internal {}

    founction tokenURI(uint256) public {}
}
