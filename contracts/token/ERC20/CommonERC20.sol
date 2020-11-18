// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

import "./behaviours/ERC20Mintable.sol";
import "../../service/ServicePayer.sol";

/**
 * @title CommonERC20
 * @dev Implementation of the CommonERC20
 */
contract CommonERC20 is Ownable, ERC20Capped, ERC20Mintable, ERC20Burnable, ServicePayer {

    constructor (
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 cap,
        uint256 initialBalance,
        address payable feeReceiver
    ) ERC20(name, symbol) ERC20Capped(cap) ServicePayer(feeReceiver, "CommonERC20") payable {
        _setupDecimals(decimals);

        _mint(_msgSender(), initialBalance);
    }

    /**
     * @dev Function to mint tokens.
     * @param to The address that will receive the minted tokens
     * @param value The amount of tokens to mint
     */
    function mint(address to, uint256 value) public virtual override onlyOwner {
        super.mint(to, value);
    }

    /**
     * @dev Function to stop minting new tokens.
     */
    function finishMinting() public virtual override onlyOwner {
        super.finishMinting();
    }

    /**
     * @dev See {ERC20-_beforeTokenTransfer}.
     */
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override(ERC20, ERC20Capped) {
        super._beforeTokenTransfer(from, to, amount);
    }
}
