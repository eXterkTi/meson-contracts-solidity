/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MesonStatesTest,
  MesonStatesTestInterface,
} from "../MesonStatesTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "addSupportToken",
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
        name: "recipient",
        type: "address",
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
        name: "signer",
        type: "address",
      },
    ],
    name: "checkReleaseSignature",
    outputs: [],
    stateMutability: "pure",
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
        name: "signer",
        type: "address",
      },
    ],
    name: "checkRequestSignature",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "lockedSwap",
        type: "uint80",
      },
    ],
    name: "decodeLockedSwap",
    outputs: [
      {
        internalType: "uint40",
        name: "poolIndex",
        type: "uint40",
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "poolTokenIndex",
        type: "uint48",
      },
    ],
    name: "decodePoolTokenIndex",
    outputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        internalType: "uint40",
        name: "poolIndex",
        type: "uint40",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint200",
        name: "postedSwap",
        type: "uint200",
      },
    ],
    name: "decodePostedSwap",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "poolIndex",
        type: "uint40",
      },
    ],
    stateMutability: "pure",
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
        name: "poolIndex",
        type: "uint40",
      },
    ],
    name: "decodeSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeForLp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "platformFee",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "salt",
        type: "uint80",
      },
      {
        internalType: "uint256",
        name: "expireTs",
        type: "uint256",
      },
      {
        internalType: "bytes2",
        name: "inChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "inTokenIndex",
        type: "uint8",
      },
      {
        internalType: "bytes2",
        name: "outChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "outTokenIndex",
        type: "uint8",
      },
      {
        internalType: "bytes6",
        name: "poolTokenIndexForPool0",
        type: "bytes6",
      },
      {
        internalType: "bytes6",
        name: "poolTokenIndexForOutToken",
        type: "bytes6",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "amount",
        type: "uint48",
      },
      {
        internalType: "uint80",
        name: "salt",
        type: "uint80",
      },
      {
        internalType: "uint40",
        name: "fee",
        type: "uint40",
      },
      {
        internalType: "uint40",
        name: "expireTs",
        type: "uint40",
      },
      {
        internalType: "bytes2",
        name: "outChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "outToken",
        type: "uint8",
      },
      {
        internalType: "bytes2",
        name: "inChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "inToken",
        type: "uint8",
      },
    ],
    name: "encodeSwap",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
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
        name: "until",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "poolIndex",
        type: "uint40",
      },
    ],
    name: "lockedSwapFrom",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "pure",
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
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        internalType: "uint40",
        name: "poolIndex",
        type: "uint40",
      },
    ],
    name: "poolTokenIndexFrom",
    outputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
    ],
    stateMutability: "pure",
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
  "0x608060405234801561001057600080fd5b506118b2806100206000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063a7d3c6a8116100b2578063d3e95ea411610081578063eba7fb7711610066578063eba7fb7714610590578063f7208175146105bd578063ff378719146105fa57600080fd5b8063d3e95ea41461056a578063d4f823221461057d57600080fd5b8063a7d3c6a8146103ad578063b002249d146104e3578063b2297a7b146104f8578063c7e25a5e1461053c57600080fd5b8063793d1e28116101095780638ab1bc2a116100ee5780638ab1bc2a1461031257806391cc39d014610344578063a375b4741461037d57600080fd5b8063793d1e28146101f857806389a734c0146102b757600080fd5b80631fdafaf41461013b5780632335093c146101505780634f139480146101a05780636a4881dc146101b3575b600080fd5b61014e61014936600461152d565b610633565b005b61018961015e36600461141b565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff90911681526020015b60405180910390f35b61014e6101ae3660046114ce565b610647565b6101c66101c1366004611493565b61065d565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835264ffffffffff909116602083015201610197565b61020b61020636600461157d565b610687565b604080519b8c5260208c019a909a52988a019790975269ffffffffffffffffffff909516606089015260808801939093527fffff00000000000000000000000000000000000000000000000000000000000091821660a088015260ff90811660c0880152911660e0860152166101008401527fffffffffffff00000000000000000000000000000000000000000000000000009081166101208401521661014082015261016001610197565b6102ed6102c53660046115a0565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610197565b6103256103203660046115bb565b61073e565b6040805160ff909316835264ffffffffff909116602083015201610197565b61036f61035236600461166d565b60281b65ff00000000001660009081526004602052604090205490565b604051908152602001610197565b61039061038b366004611688565b61074e565b6040805164ffffffffff9093168352602083019190915201610197565b6104d66103bb3660046115d6565b604080517fffffffffffff000000000000000000000000000000000000000000000000000060d08b901b1660208201527fffffffffffffffffffff0000000000000000000000000000000000000000000060b08a901b1660268201527fffffffffff00000000000000000000000000000000000000000000000000000060d889811b8216603084015288901b1660358201527fffff000000000000000000000000000000000000000000000000000000000000808716603a8301527fff0000000000000000000000000000000000000000000000000000000000000060f887811b8216603c850152918616603d8401529084901b16603f82015260609101604051602081830303815290604052905098975050505050505050565b6040516101979190611727565b6104eb610762565b60405161019791906116cd565b61050b6105063660046116a3565b6108af565b6040517fffffffffffff00000000000000000000000000000000000000000000000000009091168152602001610197565b61054f61054a36600461157d565b6108cf565b60405169ffffffffffffffffffff9091168152602001610197565b61036f610578366004611436565b6108f8565b61014e61058b366004611469565b610986565b6040517e3c0000000000000000000000000000000000000000000000000000000000008152602001610197565b6105e46105cb36600461141b565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff9091168152602001610197565b6102ed61060836600461166d565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6106408585858585610994565b5050505050565b610655868686868686610d62565b505050505050565b600080602883901c73ffffffffffffffffffffffffffffffffffffffff165b9150825b9050915091565b60008060008060008060008060008060006106a28d60d01c90565b9a5060588d901c64ffffffffff1699506106bb8d611263565b98506106c78d60801c90565b975060308d901c64ffffffffff1696506106e18d60081c90565b60f01b95508c94506106f38d60201c90565b60f01b93506107028d60181c90565b925061070e8d60281b90565b60d01b915065ff000000000060108e901b1664ffffffffff8d161760d01b90509295989b509295989b9093969950565b600080602883901c60ff1661067c565b80600064ffffffffff602883901c16610680565b606060015b6101008160ff16101561081a5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16610808578060ff16600114156107b1575090565b6107bc6001826117d5565b60ff1667ffffffffffffffff8111156107d7576107d7611876565b604051908082528060200260200182016040528015610800578160200160208202803683370190505b50915061081a565b80610812816117f8565b915050610767565b60015b8160ff168160ff1610156108aa5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16836108606001846117d5565b60ff168151811061087357610873611847565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910190910152806108a2816117f8565b91505061081d565b505090565b64ffffffffff8116602883901b65ff0000000000161760d01b5b92915050565b60006effffffffffffffffffff0000000000602884901b1664ffffffffff8316175b9392505050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff1680158061094a575060ff8216155b1561095a576000925050506108c9565b64ffffffffff1660289190911b65ff000000000016176000908152600460205260409020549392505050565b6109908282611275565b5050565b73ffffffffffffffffffffffffffffffffffffffff8116610a16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064015b60405180910390fd5b79080000000000000000000000000000000000000000000000000085161515600886901c61ffff1660c31415610bf757600081610a73577f1954524f4e205369676e6564204d6573736167653a0a33320a00000000000000610a95565b7f1954524f4e205369676e6564204d6573736167653a0a33330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018890526059015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa158015610b52573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610bf0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610a0d565b5050610640565b8015610c38576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101879052600090605c01610acc565b6000868152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff87169084015260608301889052608083018790529160019060a0016020604051602081039080840390855afa158015610cba573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614610d58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610a0d565b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116610ddf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610a0d565b79080000000000000000000000000000000000000000000000000086161515600887901c61ffff1660c31415610feb57600081610e3c577f1954524f4e205369676e6564204d6573736167653a0a33320a00000000000000610e5e565b7f1954524f4e205369676e6564204d6573736167653a0a35330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018990527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606089901b166059820152606d01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa158015610f46573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610fe4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610a0d565b5050610655565b600081156110dd576040517f19457468657265756d205369676e6564204d6573736167653a0a33320000000090611056908a908a9060200191825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905280516020918201207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000090931690820152603c810191909152605c01604051602081830303815290604052805190602001209050611172565b6110e78860201c90565b61ffff1660c31415611138578660155260416020538760005260356000206020527ff6ea10de668a877958d46ed7d53eaf47124fda9bee9423390a28c203556a2e5560005260406000209050611172565b5060148690526000878152603481206020527fd23291d9d999318ac3ed13f43ac8003d6fbd69a4b532aeec9ffad516010a208c8152604090205b60408051600081526020810180835283905260ff861691810191909152606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156111c5573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610d58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610a0d565b60006108c96103e860d084901c61179a565b60ff81166112df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e64657800000000006044820152606401610a0d565b73ffffffffffffffffffffffffffffffffffffffff9091166000818152600160209081526040808320805460ff9096167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909616861790559382528190529190912080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b803573ffffffffffffffffffffffffffffffffffffffff8116811461139057600080fd5b919050565b80357fffff0000000000000000000000000000000000000000000000000000000000008116811461139057600080fd5b803564ffffffffff8116811461139057600080fd5b803565ffffffffffff8116811461139057600080fd5b803560ff8116811461139057600080fd5b803569ffffffffffffffffffff8116811461139057600080fd5b60006020828403121561142d57600080fd5b6108f18261136c565b6000806040838503121561144957600080fd5b6114528361136c565b91506114606020840161136c565b90509250929050565b6000806040838503121561147c57600080fd5b6114858361136c565b9150611460602084016113f0565b6000602082840312156114a557600080fd5b813578ffffffffffffffffffffffffffffffffffffffffffffffffff811681146108f157600080fd5b60008060008060008060c087890312156114e757600080fd5b863595506114f76020880161136c565b94506040870135935060608701359250611513608088016113f0565b915061152160a0880161136c565b90509295509295509295565b600080600080600060a0868803121561154557600080fd5b853594506020860135935060408601359250611563606087016113f0565b91506115716080870161136c565b90509295509295909350565b6000806040838503121561159057600080fd5b82359150611460602084016113c5565b6000602082840312156115b257600080fd5b6108f1826113c5565b6000602082840312156115cd57600080fd5b6108f1826113da565b600080600080600080600080610100898b0312156115f357600080fd5b6115fc896113da565b975061160a60208a01611401565b965061161860408a016113c5565b955061162660608a016113c5565b945061163460808a01611395565b935061164260a08a016113f0565b925061165060c08a01611395565b915061165e60e08a016113f0565b90509295985092959890939650565b60006020828403121561167f57600080fd5b6108f1826113f0565b60006020828403121561169a57600080fd5b6108f182611401565b600080604083850312156116b657600080fd5b6116bf836113f0565b9150611460602084016113c5565b6020808252825182820181905260009190848201906040850190845b8181101561171b57835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016116e9565b50909695505050505050565b600060208083528351808285015260005b8181101561175457858101830151858201604001528201611738565b81811115611766576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6000826117d0577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600060ff821660ff8416808210156117ef576117ef611818565b90039392505050565b600060ff821660ff81141561180f5761180f611818565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000806000a";

type MesonStatesTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonStatesTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonStatesTest__factory extends ContractFactory {
  constructor(...args: MesonStatesTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonStatesTest> {
    return super.deploy(overrides || {}) as Promise<MesonStatesTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonStatesTest {
    return super.attach(address) as MesonStatesTest;
  }
  connect(signer: Signer): MesonStatesTest__factory {
    return super.connect(signer) as MesonStatesTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonStatesTestInterface {
    return new utils.Interface(_abi) as MesonStatesTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonStatesTest {
    return new Contract(address, _abi, signerOrProvider) as MesonStatesTest;
  }
}
