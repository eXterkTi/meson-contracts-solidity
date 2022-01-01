/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MesonPoolsTest,
  MesonPoolsTestInterface,
} from "../MesonPoolsTest";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
    ],
    name: "SwapLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "addTokenToSwapList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "metaAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "inToken",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ts",
        type: "uint256",
      },
    ],
    name: "challenge",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentChain",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "isSwapLocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "lockingSwaps",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "metaAmount",
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
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "supportedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "totalDemandFor",
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
        name: "token",
        type: "address",
      },
    ],
    name: "totalSupplyFor",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x61010060405260526080818152906117d360a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66060820152600360808201523060a082015260c001604051602081830303815290604052805190602001206000553480156100d557600080fd5b506116ee806100e56000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80637b53c5e31161008c578063d23d1c7611610066578063d23d1c7614610299578063ec9b5b3a146102ac578063f3fef3a3146102bf578063f7888aec146102d257600080fd5b80637b53c5e314610246578063a8f81b1a14610259578063c68596011461028257600080fd5b806361565d25116100c857806361565d251461012a57806368c4ac26146101665780636bb39ae01461019957806372cbf72e1461023157600080fd5b80632d675a13146100ef57806347e7ef24146101045780634e1389ed14610117575b600080fd5b6101026100fd366004611559565b6102fd565b005b610102610112366004611435565b6106d0565b61010261012536600461149a565b61077a565b610153610138366004611337565b6001600160a01b031660009081526004602052604090205490565b6040519081526020015b60405180910390f35b610189610174366004611337565b60016020526000908152604090205460ff1681565b604051901515815260200161015d565b6101ee6101a7366004611481565b6007602052600090815260409020805460018201546002830154600384015460048501546005909501546001600160a01b0394851695938516949283169391929091169086565b604080516001600160a01b0397881681529587166020870152938616938501939093526060840191909152909216608082015260a081019190915260c00161015d565b604051632000000f60e21b815260200161015d565b610189610254366004611481565b6109d2565b610153610267366004611337565b6001600160a01b031660009081526005602052604090205490565b61010261029036600461138c565b50505050505050565b6101026102a7366004611337565b6109ed565b6101026102ba366004611481565b6109f9565b6101026102cd366004611435565b610b60565b6101536102e0366004611359565b600660209081526000928352604080842090915290825290205481565b6001600160a01b038216600090815260016020526040902054829060ff166103405760405162461bcd60e51b8152600401610337906115f2565b60405180910390fd5b600080600061034e87610bb1565b925092509250600083116103a45760405162461bcd60e51b815260206004820181905260248201527f616d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610337565b6040516bffffffffffffffffffffffff19606088901b1660208201528290603401604051602081830303815290604052805190602001201461041f5760405162461bcd60e51b81526020600482015260146024820152730e8ded6cadc40c8decae640dcdee840dac2e8c6d60631b6044820152606401610337565b6040516bffffffffffffffffffffffff19606087901b166020820152819060340160405160208183030381529060405280519060200120146104a35760405162461bcd60e51b815260206004820152601860248201527f726563697069656e7420646f6573206e6f74206d6174636800000000000000006044820152606401610337565b6001600160a01b03861660009081526006602090815260408083203380855292529091205484111561050e5760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b6044820152606401610337565b8751602089012061053081600090815260076020526040902060030154151590565b156105735760405162461bcd60e51b81526020600482015260136024820152721cddd85c08185b1c9958591e481b1bd8dad959606a1b6044820152606401610337565b6001600160a01b038089166000908152600660209081526040808320938616835292905220546105a4908690611635565b6001600160a01b03808a1660008181526006602090815260408083208886168085529083529281902095909555845160c08101865282815290810191909152928301526060820187905288166080820152429060a081016106076104b08461161d565b9052600083815260076020908152604091829020835181546001600160a01b03199081166001600160a01b0392831617835585840151600184018054831691841691909117905585850151600284018054831691841691909117905560608601516003840155608086015160048401805490921690831617905560a0909401516005909101558151858152928616908301527faad18fe672f0d6b379db88b0e1176f10cc003e9a4d8ed142a90c0b6f8bedb8de910160405180910390a150505050505050505050565b6001600160a01b038216600090815260016020526040902054829060ff1661070a5760405162461bcd60e51b8152600401610337906115f2565b6001600160a01b0383166000908152600660209081526040808320338085529252909120546107399084610c57565b6001600160a01b038086166000908152600660209081526040808320938616835292905220556107698484610c72565b610774848285610cb5565b50505050565b6000858152600760208181526040808420815160c08101835281546001600160a01b039081168252600183015481168286015260028301548116938201939093526003820154606082018190526004830154909316608082015260059091015460a08201529389905291905261083e5760405162461bcd60e51b8152602060048201526024808201527f6e6f206c6f636b696e67207377617020666f756e6420666f7220746865207377604482015263185c125960e21b6064820152608401610337565b80606001518511156108af5760405162461bcd60e51b815260206004820152603460248201527f72656c6561736520616d6f756e742063616e6e6f742062652067726561746572604482015273081d1a185b881b1bd8dada5b99c8185b5bdd5b9d60621b6064820152608401610337565b6108c0868260000151868686610d3d565b6040810151602082015160808301516060840151881015610941576001600160a01b03808416600090815260066020908152604080832093861683529290522054606085015161091a9190610915908b610dda565b610c57565b6001600160a01b038085166000908152600660209081526040808320938716835292905220555b600089815260076020526040812080546001600160a01b0319908116825560018201805482169055600282018054821690556003820183905560048201805490911690556005015561099483828a610df5565b6040518981527fe8aa10932e72fe72aa2f3879a4dd799b95f5fbe728be1be0609e5baa14ec40f49060200160405180910390a1505050505050505050565b60008181526007602052604081206003015415155b92915050565b6109f681610f32565b50565b60008181526007602052604090206005810154600282015460019092015442926001600160a01b03908116911682610a645760405162461bcd60e51b815260206004820152600e60248201526d1cddd85c081b9bdd08199bdd5b9960921b6044820152606401610337565b828411610aa95760405162461bcd60e51b8152602060048201526013602482015272151a19481cddd85c081a5cc81b1bd8dada5959606a1b6044820152606401610337565b6001600160a01b038083166000908152600660209081526040808320938516835292815282822054888352600790915291902060030154610aea9190610c57565b6001600160a01b0392831660009081526006602090815260408083209490951682529283528381209190915594855260079052832080546001600160a01b031990811682556001820180548216905560028201805482169055600382018590556004820180549091169055600501929092555050565b6001600160a01b038216600090815260016020526040902054829060ff16610b9a5760405162461bcd60e51b8152600401610337906115f2565b33610ba58484610faf565b61077481828686611026565b600080600080600080600087806020019051810190610bd091906114ed565b96509650509550505093506040518060a001604052806069815260200161167960699139805190602001208414610c495760405162461bcd60e51b815260206004820152601d60248201527f496e76616c6964207377617020726571756573742074797065686173680000006044820152606401610337565b919790965090945092505050565b600082610c64838261161d565b91508110156109e757600080fd5b6001600160a01b038216600090815260046020526040902054610c959082610c57565b6001600160a01b0390921660009081526004602052604090209190915550565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015610d0557600080fd5b505af1158015610d19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610774919061145f565b604080518082018252601b81527f5377617052656c656173652862797465733332207377617049642900000000006020918201529051600091610dad917ffb1f98601c589a04e2ceca199119c17bd547893fffb8d088acdae5aff4f9b19d91899101918252602082015260400190565b604051602081830303815290604052805190602001209050610dd281868686866110e8565b505050505050565b600082610de78382611635565b91508111156109e757600080fd5b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392871691610e8191906115b7565b6000604051808303816000865af19150503d8060008114610ebe576040519150601f19603f3d011682016040523d82523d6000602084013e610ec3565b606091505b5091509150818015610eed575080511580610eed575080806020019051810190610eed919061145f565b610f2b5760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b6044820152606401610337565b5050505050565b6001600160a01b0381166000818152600160208181526040808420805460ff19168417905580516080810182528481528083018581528183018681526060838101818152988852600380875294909720835181559151958201959095559351600285015594518051949594610f2b9392850192919091019061122e565b6001600160a01b0382166000908152600460205260409020548111156110035760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b6044820152606401610337565b6001600160a01b038216600090815260046020526040902054610c959082610dda565b6001600160a01b038083166000908152600660209081526040808320938716835292905220548111156110875760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b6044820152606401610337565b6001600160a01b038083166000908152600660209081526040808320938716835292905220546110b79082610dda565b6001600160a01b03808416600090815260066020908152604080832093881683529290522055610774828583610df5565b6000805460405161190160f01b602082015260228101919091526042810187905260620160408051601f19818403018152919052805160209091012090506001600160a01b03851661117c5760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610337565b60408051600081526020810180835283905260ff841691810191909152606081018590526080810184905260019060a0016020604051602081039080840390855afa1580156111cf573d6000803e3d6000fd5b505050602060405103516001600160a01b0316856001600160a01b031614610dd25760405162461bcd60e51b8152602060048201526012602482015271696e76616c6964207369676e61747572657360701b6044820152606401610337565b828054828255906000526020600020908101928215611269579160200282015b8281111561126957825182559160200191906001019061124e565b50611275929150611279565b5090565b5b80821115611275576000815560010161127a565b80356001600160a01b03811681146112a557600080fd5b919050565b600082601f8301126112bb57600080fd5b813567ffffffffffffffff808211156112d6576112d6611662565b604051601f8301601f19908116603f011681019082821181831017156112fe576112fe611662565b8160405283815286602085880101111561131757600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561134957600080fd5b6113528261128e565b9392505050565b6000806040838503121561136c57600080fd5b6113758361128e565b91506113836020840161128e565b90509250929050565b600080600080600080600060e0888a0312156113a757600080fd5b6113b08861128e565b9650602088013567ffffffffffffffff808211156113cd57600080fd5b6113d98b838c016112aa565b975060408a0135965060608a01359150808211156113f657600080fd5b506114038a828b016112aa565b9450506114126080890161128e565b925061142060a0890161128e565b915060c0880135905092959891949750929550565b6000806040838503121561144857600080fd5b6114518361128e565b946020939093013593505050565b60006020828403121561147157600080fd5b8151801515811461135257600080fd5b60006020828403121561149357600080fd5b5035919050565b600080600080600060a086880312156114b257600080fd5b85359450602086013593506040860135925060608601359150608086013560ff811681146114df57600080fd5b809150509295509295909350565b600080600080600080600060e0888a03121561150857600080fd5b87519650602088015195506040880151945060608801519350608088015163ffffffff60e01b8116811461153b57600080fd5b8093505060a0880151915060c0880151905092959891949750929550565b60008060006060848603121561156e57600080fd5b833567ffffffffffffffff81111561158557600080fd5b611591868287016112aa565b9350506115a06020850161128e565b91506115ae6040850161128e565b90509250925092565b6000825160005b818110156115d857602081860181015185830152016115be565b818111156115e7576000828501525b509190910192915050565b6020808252601190820152703ab739bab83837b93a32b2103a37b5b2b760791b604082015260600190565b600082198211156116305761163061164c565b500190565b6000828210156116475761164761164c565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe53776170526571756573742875696e743235362065787069726554732c627974657320696e546f6b656e2c75696e7432353620616d6f756e742c627974657334206f7574436861696e2c6279746573206f7574546f6b656e2c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

type MesonPoolsTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonPoolsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonPoolsTest__factory extends ContractFactory {
  constructor(...args: MesonPoolsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonPoolsTest> {
    return super.deploy(overrides || {}) as Promise<MesonPoolsTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonPoolsTest {
    return super.attach(address) as MesonPoolsTest;
  }
  connect(signer: Signer): MesonPoolsTest__factory {
    return super.connect(signer) as MesonPoolsTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonPoolsTestInterface {
    return new utils.Interface(_abi) as MesonPoolsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonPoolsTest {
    return new Contract(address, _abi, signerOrProvider) as MesonPoolsTest;
  }
}
