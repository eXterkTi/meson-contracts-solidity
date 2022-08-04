/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonStates, MesonStatesInterface } from "../MesonStates";

const _abi = [
  {
    inputs: [],
    name: "getShortCoinType",
    outputs: [
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "indexOfToken",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    name: "ownerOfPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "platformFeeCollected",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "poolOfPermissionedAddr",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "poolTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "supportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "tokenForIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610618806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d3e95ea41161005b578063d3e95ea414610186578063eba7fb7714610199578063f7208175146101c6578063ff3787191461020357600080fd5b80632335093c1461008d57806389a734c0146100dd57806391cc39d014610138578063b002249d14610171575b600080fd5b6100c661009b366004610442565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff90911681526020015b60405180910390f35b6101136100eb366004610497565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100d4565b6101636101463660046104be565b60281b65ff00000000001660009081526004602052604090205490565b6040519081526020016100d4565b61017961023c565b6040516100d491906104e1565b610163610194366004610464565b610389565b6040517e3c00000000000000000000000000000000000000000000000000000000000081526020016100d4565b6101ed6101d4366004610442565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020016100d4565b6101136102113660046104be565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b606060015b6101008160ff1610156102f45760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff166102e2578060ff166001141561028b575090565b61029660018261053b565b60ff1667ffffffffffffffff8111156102b1576102b16105dc565b6040519080825280602002602001820160405280156102da578160200160208202803683370190505b5091506102f4565b806102ec8161055e565b915050610241565b60015b8160ff168160ff1610156103845760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff168361033a60018461053b565b60ff168151811061034d5761034d6105ad565b73ffffffffffffffffffffffffffffffffffffffff909216602092830291909101909101528061037c8161055e565b9150506102f7565b505090565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff168015806103db575060ff8216155b156103eb57600092505050610413565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461043d57600080fd5b919050565b60006020828403121561045457600080fd5b61045d82610419565b9392505050565b6000806040838503121561047757600080fd5b61048083610419565b915061048e60208401610419565b90509250929050565b6000602082840312156104a957600080fd5b813564ffffffffff8116811461045d57600080fd5b6000602082840312156104d057600080fd5b813560ff8116811461045d57600080fd5b6020808252825182820181905260009190848201906040850190845b8181101561052f57835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016104fd565b50909695505050505050565b600060ff821660ff8416808210156105555761055561057e565b90039392505050565b600060ff821660ff8114156105755761057561057e565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000806000a";

type MesonStatesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonStatesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonStates__factory extends ContractFactory {
  constructor(...args: MesonStatesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonStates> {
    return super.deploy(overrides || {}) as Promise<MesonStates>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonStates {
    return super.attach(address) as MesonStates;
  }
  connect(signer: Signer): MesonStates__factory {
    return super.connect(signer) as MesonStates__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonStatesInterface {
    return new utils.Interface(_abi) as MesonStatesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonStates {
    return new Contract(address, _abi, signerOrProvider) as MesonStates;
  }
}
