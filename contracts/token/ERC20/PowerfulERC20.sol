// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Capped.sol";

import "erc-payable-token/contracts/token/ERC1363/ERC1363.sol";

import "eth-token-recover/contracts/TokenRecover.sol";

import "./behaviours/ERC20Mintable.sol";
import "../../service/ServicePayer.sol";

/**
 * @title PowerfulERC20
 * @dev Implementation of the PowerfulERC20
 */
contract PowerfulERC20 is ERC20Capped, ERC20Mintable, ERC20Burnable, ERC1363, TokenRecover, ServicePayer {

    constructor (
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 cap,
        uint256 initialBalance,
        address payable feeReceiver
    ) ERC1363(name, symbol) ERC20Capped(cap) ServicePayer(feeReceiver, "PowerfulERC20") payable {
        _setupDecimals(decimals);

        _mint(_msgSender(), initialBalance);
    }

    /**
     * @dev Function to mint tokens.
     * @param to The address that will receive the minted tokens
     * @param value The amount of tokens to mint
     */
    function mint(address to, uint256 value) public override onlyOwner {
        super.mint(to, value);
    }

    /**
     * @dev Function to stop minting new tokens.
     */
    function finishMinting() public override onlyOwner {
        super.finishMinting();
    }

    /**
     * @dev See {ERC20-_beforeTokenTransfer}.
     */
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal override(ERC20, ERC20Capped) {
        super._beforeTokenTransfer(from, to, amount);
    }
}
