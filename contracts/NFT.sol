// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address public owner;
    uint256 public cost;

    // Events
    event Minted(address indexed minter, uint256 indexed tokenId, string tokenURI);
    event Withdrawn(address indexed owner, uint256 amount);

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _cost
    ) ERC721(_name, _symbol) {
        owner = msg.sender;
        cost = _cost;
    }

    // Mint function
    function mint(string memory tokenURI) public payable {
        require(msg.value >= cost, "Insufficient funds to mint NFT");

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        emit Minted(msg.sender, newItemId, tokenURI);
    }

    // Total supply
    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }

    // Withdraw funds safely
    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");

        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        (bool success, ) = owner.call{value: balance}("");
        require(success, "Withdraw failed");

        emit Withdrawn(owner, balance);
    }

    // Optional: allow contract to receive ETH directly
    receive() external payable {}
}
