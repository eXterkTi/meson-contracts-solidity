/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Meson, MesonInterface } from "../Meson";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "supportedTokens",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapBonded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapPosted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    name: "addressOfIndex",
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
    name: "balanceOf",
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
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    name: "bondSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "cancelSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint48",
        name: "balanceIndex",
        type: "uint48",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint48",
        name: "balanceIndex",
        type: "uint48",
      },
    ],
    name: "depositAndRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "recipientHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "depositToPool",
        type: "bool",
      },
    ],
    name: "executeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
    ],
    name: "getLockedSwap",
    outputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "until",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "getPostedSwap",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
        name: "",
        type: "address",
      },
    ],
    name: "indexOfAddress",
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
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "mesonFeeCollected",
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
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "uint200",
        name: "postingValue",
        type: "uint200",
      },
    ],
    name: "postSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
    ],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200271338038062002713833981016040819052620000349162000156565b60005b81518160ff16101562000092576200007d828260ff168151811062000060576200006062000290565b60200260200101518260016200007791906200022f565b6200009a565b80620000898162000257565b91505062000037565b5050620002bc565b60ff8116620000ef5760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e6465780000000000604482015260640160405180910390fd5b6001600160a01b039091166000818152600160209081526040808320805460ff90961660ff19909616861790559382528190529190912080546001600160a01b0319169091179055565b80516001600160a01b03811681146200015157600080fd5b919050565b600060208083850312156200016a57600080fd5b82516001600160401b03808211156200018257600080fd5b818501915085601f8301126200019757600080fd5b815181811115620001ac57620001ac620002a6565b8060051b604051601f19603f83011681018181108582111715620001d457620001d4620002a6565b604052828152858101935084860182860187018a1015620001f457600080fd5b600095505b8386101562000222576200020d8162000139565b855260019590950194938601938601620001f9565b5098975050505050505050565b600060ff821660ff84168060ff038211156200024f576200024f6200027a565b019392505050565b600060ff821660ff8114156200027157620002716200027a565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61244780620002cc6000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c8063903d4296116100cd578063e16a567d11610081578063f1d2ec1d11610066578063f1d2ec1d1461040e578063f7888aec14610421578063ff3787191461043457600080fd5b8063e16a567d146103a8578063eba7fb77146103e157600080fd5b8063b3df5b36116100b2578063b3df5b3614610327578063be18e8a414610382578063ce9247431461039557600080fd5b8063903d4296146102ff578063b002249d1461031257600080fd5b806354d6a2b7116101245780637c850187116101095780637c850187146102c65780638302ce5a146102d95780638f487dc9146102ec57600080fd5b806354d6a2b71461026e57806360a2da981461028157600080fd5b80632335093c116101555780632335093c146101fb57806335eff30f1461024657806337b90a4f1461025b57600080fd5b80631aba3a55146101715780631e2a6075146101b3575b600080fd5b61019861017f366004611fb3565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b6101c66101c1366004612025565b61046d565b6040805173ffffffffffffffffffffffffffffffffffffffff94851681529390921660208401521515908201526060016101aa565b610234610209366004611fb3565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff90911681526020016101aa565b6102596102543660046121de565b6104ff565b005b610259610269366004612201565b6106be565b61025961027c366004612025565b610776565b61029461028f36600461203e565b6108fe565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835264ffffffffff9091166020830152016101aa565b6102596102d4366004612061565b610959565b6102596102e736600461216c565b610bd5565b6102596102fa366004612201565b610ee2565b61025961030d36600461223c565b61116e565b61031a611265565b6040516101aa91906122d0565b61035d61033536600461225f565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101aa565b6102596103903660046120bd565b6113b2565b6102596103a336600461210d565b61166d565b6103d36103b636600461227a565b60281b65ff00000000001660009081526004602052604090205490565b6040519081526020016101aa565b6040517e3c00000000000000000000000000000000000000000000000000000000000081526020016101aa565b61025961041c36600461203e565b6117ec565b6103d361042f366004611fd5565b611934565b61035d61044236600461227a565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600081815260056020526040812054602881901c73ffffffffffffffffffffffffffffffffffffffff16919078ffffffffffffffffffffffffffffffffffffffffffffffffff166001811490836104c757600092506104f7565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1692505b509193909250565b60008281526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff168061057b5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064015b60405180910390fd5b8064ffffffffff16156105d05760405162461bcd60e51b815260206004820152601f60248201527f5377617020626f6e64656420746f20616e6f746865722070726f7669646572006044820152606401610572565b3360009081526002602052604090205464ffffffffff8381169116146106385760405162461bcd60e51b815260206004820152601860248201527f43616e206f6e6c7920626f756e6420746f207369676e657200000000000000006044820152606401610572565b60008381526005602052604080822080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff8616171790555184917f60a99b51ae498c44acbbe11031aed2a06a32be66d2122e6e2a7a16c087865cc991a2505050565b6000821161070e5760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f7369746976650000000000000000006044820152606401610572565b65ffffffffffff81166000908152600460205260408120805484929061073590849061232a565b909155505060ff602882901c166000908152602081905260409020546107729073ffffffffffffffffffffffffffffffffffffffff1633846119c4565b5050565b60008181526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16600181116107f05760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610572565b42603083901c64ffffffffff161061084a5760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b65640000000000000000000000006044820152606401610572565b600082815260056020908152604080832080547fffffffffffffff0000000000000000000000000000000000000000000000000016905560ff85168352908290529020546108cf9073ffffffffffffffffffffffffffffffffffffffff90811690602884901c166108ca605886901c64ffffffffff1660d087901c61232a565b611ac2565b60405182907ff6b6b4f7a13f02512c1b3aa8dcc4a07d7775a6a4becbd439efcbd37c5408e67f90600090a25050565b600080600061090d8585611c18565b60009081526006602090815260408083205464ffffffffff8082168552600390935292205473ffffffffffffffffffffffffffffffffffffffff169760289290921c1695509350505050565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16806109d05760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610572565b6109dc610e104261232a565b603088901c64ffffffffff161015610a2757600087815260056020526040902080547fffffffffffffff00000000000000000000000000000000000000000000000000169055610a5f565b600087815260056020526040902080547fffffffffffffff000000000000000000000000000000000000000000000000001660011790555b610a878787878787602887901c73ffffffffffffffffffffffffffffffffffffffff16611c79565b6000610a938860281b90565b90506000605889901c64ffffffffff16610aad8a60d01c90565b610ab7919061232a565b9050610ac38960081c90565b61ffff16603c14158015610ae55750610adc8960201c90565b61ffff16603c14155b15610b3857647fffffffff60598a901c168015610b365765ffffffffffff831660009081526004602052604081208054839290610b2390849061232a565b90915550610b3390508183612342565b91505b505b8315610b7f5764ffffffffff831665ffffffffffff831681176000908152600460205260408120805492851792849290610b7390849061232a565b90915550610bca915050565b60ff89166000908152602081815260408083205464ffffffffff87168452600390925290912054610bca9173ffffffffffffffffffffffffffffffffffffffff908116911683611ac2565b505050505050505050565b84603c610be28260081c90565b61ffff1614610c335760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610572565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1615610caa5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610572565b6000610cb68760d01c90565b905064174876e800811115610d335760405162461bcd60e51b815260206004820152603760248201527f466f7220736563757269747920726561736f6e2c20616d6f756e742063616e6e60448201527f6f742062652067726561746572207468616e203130306b0000000000000000006064820152608401610572565b6000610d4a4264ffffffffff60308b901c16612342565b9050610e108111610d9d5760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c79000000000000000000000000006044820152606401610572565b611c208110610dee5760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c61746500000000000000000000000000006044820152606401610572565b73ffffffffffffffffffffffffffffffffffffffff602885901c16610e168989898985611df2565b600089815260056020908152604080832080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff8a1617905560ff8c16835290829052902054610eac9073ffffffffffffffffffffffffffffffffffffffff1682610ea760588d901c64ffffffffff168761232a565b6119c4565b60405189907f5ce4019f772fda6cb703b26bce3ec3006eb36b73f1d3a0eb441213317d9f5e9d90600090a2505050505050505050565b60008211610f325760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f7369746976650000000000000000006044820152606401610572565b338164ffffffffff8116610f885760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f742075736520302061732070726f766964657220696e64657800006044820152606401610572565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff16156110025760405162461bcd60e51b815260206004820152601860248201527f496e64657820616c7265616479207265676973746572656400000000000000006044820152606401610572565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205464ffffffffff161561107c5760405162461bcd60e51b815260206004820152601a60248201527f4164647265737320616c726561647920726567697374657265640000000000006044820152606401610572565b64ffffffffff8116600081815260036020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff881690811790915583526002825280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000001690941790935565ffffffffffff8616825260049052908120805486929061112b90849061232a565b909155505060ff602884901c166000908152602081905260409020546111689073ffffffffffffffffffffffffffffffffffffffff1683866119c4565b50505050565b3360008181526002602052604090205464ffffffffff16806111f85760405162461bcd60e51b815260206004820152602e60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465720000000000000000000000000000000000006064820152608401610572565b64ffffffffff8116602884901b65ff000000000016176000908152600460205260408120805486929061122c908490612342565b909155505060ff83166000908152602081905260409020546111689073ffffffffffffffffffffffffffffffffffffffff168386611ac2565b606060015b6101008160ff16101561131d5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1661130b578060ff16600114156112b4575090565b6112bf600182612359565b60ff1667ffffffffffffffff8111156112da576112da6123fa565b604051908082528060200260200182016040528015611303578160200160208202803683370190505b50915061131d565b806113158161237c565b91505061126a565b60015b8160ff168160ff1610156113ad5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1683611363600184612359565b60ff1681518110611376576113766123cb565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910190910152806113a58161237c565b915050611320565b505090565b84603c6113bf8260201c90565b61ffff16146114105760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610572565b600061141c8784611c18565b60008181526006602052604090205490915069ffffffffffffffffffff16156114875760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610572565b6114948787878787611df2565b3360009081526002602052604090205464ffffffffff168061151e5760405162461bcd60e51b815260206004820152602f60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465722e00000000000000000000000000000000006064820152608401610572565b600061152c6104b04261232a565b9050603089901c64ffffffffff1681106115ae5760405162461bcd60e51b815260206004820152602560248201527f43616e6e6f74206c6f636b20626563617573652065787069726554732069732060448201527f736f6f6e2e0000000000000000000000000000000000000000000000000000006064820152608401610572565b65ff000000000060108a901b1664ffffffffff8316176000818152600460205260408120805460d08d901c92906115e6908490612342565b909155505060008481526006602052604080822080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001664ffffffffff8716602887901b69ffffffffff00000000001617179055518b917fbfb879c34323c5601fafe832c3a8a1e31e12c288695838726ddeada86034edb491a250505050505050505050565b60006116798784611c18565b60008181526006602052604090205490915069ffffffffffffffffffff16806116e45760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610572565b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606085901b16602082015261173b9089906034016040516020818303038152906040528051906020012089898989611c79565b600082815260066020526040812080547fffffffffffffffffffffffffffffffffffffffffffff00000000000000000000169055808061177b8b60181c90565b60ff16815260208101919091526040016000205473ffffffffffffffffffffffffffffffffffffffff1690506117b681856108ca8c60d01c90565b60405189907ffa628b578e095243f0544bfad9255f49d79d03a5bbf6c85875d05a215e247ad290600090a2505050505050505050565b60006117f88383611c18565b60008181526006602052604090205490915069ffffffffffffffffffff16806118635760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610572565b42602882901c64ffffffffff16106118bd5760405162461bcd60e51b815260206004820152601260248201527f53776170207374696c6c20696e206c6f636b00000000000000000000000000006044820152606401610572565b65ff0000000000601085901b1664ffffffffff8216176000818152600460205260408120805460d088901c92906118f590849061232a565b90915550505060009182525060066020526040902080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001690555050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff16801580611986575060ff8216155b15611996576000925050506119be565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b60008111611a145760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610572565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015611a8a57600080fd5b505af1158015611a9e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111689190612008565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529151600092839290871691611b599190612295565b6000604051808303816000865af19150503d8060008114611b96576040519150601f19603f3d011682016040523d82523d6000602084013e611b9b565b606091505b5091509150818015611bc5575080511580611bc5575080806020019051810190611bc59190612008565b611c115760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610572565b5050505050565b60008282604051602001611c5b92919091825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b60405160208183030381529060405280519060200120905092915050565b73ffffffffffffffffffffffffffffffffffffffff8116611cdc5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610572565b60008681526020868152604080832082527f245d0b306958178c99fe38132cee72cfd0c1c10b4d7c67cbbd322d6b1af894f9808452818420825194855292840180835283905260ff86169184019190915260608301879052608083018690529160019060a0016020604051602081039080840390855afa158015611d64573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611de85760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610572565b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116611e555760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610572565b6000858152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff86169084015260608301879052608083018690529160019060a0016020604051602081039080840390855afa158015611ed7573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611f5b5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610572565b50505050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f8857600080fd5b919050565b803564ffffffffff81168114611f8857600080fd5b803560ff81168114611f8857600080fd5b600060208284031215611fc557600080fd5b611fce82611f64565b9392505050565b60008060408385031215611fe857600080fd5b611ff183611f64565b9150611fff60208401611f64565b90509250929050565b60006020828403121561201a57600080fd5b8151611fce81612429565b60006020828403121561203757600080fd5b5035919050565b6000806040838503121561205157600080fd5b82359150611fff60208401611f64565b60008060008060008060c0878903121561207a57600080fd5b8635955060208701359450604087013593506060870135925061209f60808801611fa2565b915060a08701356120af81612429565b809150509295509295509295565b600080600080600060a086880312156120d557600080fd5b8535945060208601359350604086013592506120f360608701611fa2565b915061210160808701611f64565b90509295509295909350565b60008060008060008060c0878903121561212657600080fd5b86359550602087013594506040870135935061214460608801611fa2565b925061215260808801611f64565b915061216060a08801611f64565b90509295509295509295565b600080600080600060a0868803121561218457600080fd5b8535945060208601359350604086013592506121a260608701611fa2565b9150608086013578ffffffffffffffffffffffffffffffffffffffffffffffffff811681146121d057600080fd5b809150509295509295909350565b600080604083850312156121f157600080fd5b82359150611fff60208401611f8d565b6000806040838503121561221457600080fd5b82359150602083013565ffffffffffff8116811461223157600080fd5b809150509250929050565b6000806040838503121561224f57600080fd5b82359150611fff60208401611fa2565b60006020828403121561227157600080fd5b611fce82611f8d565b60006020828403121561228c57600080fd5b611fce82611fa2565b6000825160005b818110156122b6576020818601810151858301520161229c565b818111156122c5576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561231e57835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016122ec565b50909695505050505050565b6000821982111561233d5761233d61239c565b500190565b6000828210156123545761235461239c565b500390565b600060ff821660ff8416808210156123735761237361239c565b90039392505050565b600060ff821660ff8114156123935761239361239c565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b801515811461243757600080fd5b5056fea164736f6c6343000806000a";

type MesonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Meson__factory extends ContractFactory {
  constructor(...args: MesonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    supportedTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Meson> {
    return super.deploy(supportedTokens, overrides || {}) as Promise<Meson>;
  }
  getDeployTransaction(
    supportedTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(supportedTokens, overrides || {});
  }
  attach(address: string): Meson {
    return super.attach(address) as Meson;
  }
  connect(signer: Signer): Meson__factory {
    return super.connect(signer) as Meson__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonInterface {
    return new utils.Interface(_abi) as MesonInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Meson {
    return new Contract(address, _abi, signerOrProvider) as Meson;
  }
}
