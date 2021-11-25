// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

import "../MesonConfig.sol";

/// @title MesonHelpers
contract MesonHelpers is MesonConfig {
  bytes4 private constant ERC20_TRANSFER_SELECTOR = bytes4(keccak256(bytes("transfer(address,uint256)")));

  struct Swap {
    bytes32 id;
    uint256 metaAmount;
    uint256 ts;
  }

  struct SwapRequest {
    uint256 amount;
    uint256 metaAmount;
    address inToken;
    bytes4 chain;
    bytes outToken;
    bytes receiver; // could be an hex42 address (eth) or in other types
    address provider;
    uint256 bondUntil;
  }

  /// @notice Safe transfers tokens from msg.sender to a recipient
  /// for interacting with ERC20 tokens that do not consistently return true/false
  /// @param token The contract address of the token which will be transferred
  /// @param receiver The recipient of the transfer
  /// @param amount The value of the transfer
  function _safeTransfer(
    address token,
    address receiver,
    uint256 amount
  ) internal {
    (bool success, bytes memory data) = token.call(abi.encodeWithSelector(ERC20_TRANSFER_SELECTOR, receiver, amount));
    require(success && (data.length == 0 || abi.decode(data, (bool))), "transfer failed");
  }

  /// @notice Get hash for a swap on the chain the swap is initiated
  function _getSwapHash(bytes32 swapId, uint256 epoch)
    internal
    pure
    returns (bytes32)
  {
    return keccak256(abi.encodePacked(swapId, ":", epoch));
  }

  /// @notice Get ID for a swap on the chain the swap is initiated
  function _getSwapId(
    uint256 metaAmount,
    address inToken,
    bytes4 chain,
    bytes memory outToken,
    bytes memory receiver
  ) internal pure returns (bytes32) {
    return
      keccak256(
        abi.encodePacked(
          inToken,
          ":",
          chain,
          ":",
          outToken,
          ":",
          receiver,
          ":",
          metaAmount
        )
      );
  }

  /// @notice Get ID for a swap on the target chain the swap is requested
  function _getSwapIdAsProvider(
    uint256 metaAmount,
    bytes memory inToken,
    address outToken,
    address receiver
  ) internal pure returns (bytes32) {
    return
      keccak256(
        abi.encodePacked(
          inToken,
          ":",
          CURRENT_CHAIN,
          ":",
          outToken,
          ":",
          receiver,
          ":",
          metaAmount
        )
      );
  }

  function _checkSignature(
    bytes memory signature,
    bytes32 message,
    address signer
  ) internal pure {
    require(ECDSA.recover(message, signature) == signer, "invalid signature");
  }
}