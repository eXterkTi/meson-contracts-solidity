/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MesonSwapInterface extends utils.Interface {
  functions: {
    "bondSwap(uint256,uint40)": FunctionFragment;
    "cancelSwap(uint256)": FunctionFragment;
    "executeSwap(uint256,bytes32,bytes32,uint8,address,bool)": FunctionFragment;
    "getPostedSwap(uint256)": FunctionFragment;
    "getShortCoinType()": FunctionFragment;
    "indexOfToken(address)": FunctionFragment;
    "ownerOfPool(uint40)": FunctionFragment;
    "platformFeeCollected(uint8)": FunctionFragment;
    "poolOfPermissionedAddr(address)": FunctionFragment;
    "poolTokenBalance(address,address)": FunctionFragment;
    "postSwap(uint256,bytes32,bytes32,uint8,uint200)": FunctionFragment;
    "supportedTokens()": FunctionFragment;
    "tokenForIndex(uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bondSwap",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelSwap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeSwap",
    values: [BigNumberish, BytesLike, BytesLike, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getPostedSwap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getShortCoinType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "indexOfToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOfPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "platformFeeCollected",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolOfPermissionedAddr",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolTokenBalance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "postSwap",
    values: [BigNumberish, BytesLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenForIndex",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "bondSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPostedSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShortCoinType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "indexOfToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerOfPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "platformFeeCollected",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolOfPermissionedAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "postSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenForIndex",
    data: BytesLike
  ): Result;

  events: {
    "SwapBonded(uint256)": EventFragment;
    "SwapCancelled(uint256)": EventFragment;
    "SwapPosted(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SwapBonded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapPosted"): EventFragment;
}

export type SwapBondedEvent = TypedEvent<
  [BigNumber],
  { encodedSwap: BigNumber }
>;

export type SwapBondedEventFilter = TypedEventFilter<SwapBondedEvent>;

export type SwapCancelledEvent = TypedEvent<
  [BigNumber],
  { encodedSwap: BigNumber }
>;

export type SwapCancelledEventFilter = TypedEventFilter<SwapCancelledEvent>;

export type SwapPostedEvent = TypedEvent<
  [BigNumber],
  { encodedSwap: BigNumber }
>;

export type SwapPostedEventFilter = TypedEventFilter<SwapPostedEvent>;

export interface MesonSwap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MesonSwapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bondSwap(
      encodedSwap: BigNumberish,
      poolIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelSwap(
      encodedSwap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeSwap(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      recipient: string,
      depositToPool: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPostedSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, boolean] & {
        initiator: string;
        poolOwner: string;
        executed: boolean;
      }
    >;

    getShortCoinType(overrides?: CallOverrides): Promise<[string]>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<[number]>;

    ownerOfPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    platformFeeCollected(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poolOfPermissionedAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    poolTokenBalance(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    postSwap(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      postingValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportedTokens(
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  bondSwap(
    encodedSwap: BigNumberish,
    poolIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelSwap(
    encodedSwap: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeSwap(
    encodedSwap: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    recipient: string,
    depositToPool: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPostedSwap(
    encodedSwap: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, boolean] & {
      initiator: string;
      poolOwner: string;
      executed: boolean;
    }
  >;

  getShortCoinType(overrides?: CallOverrides): Promise<string>;

  indexOfToken(token: string, overrides?: CallOverrides): Promise<number>;

  ownerOfPool(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  platformFeeCollected(
    tokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  poolOfPermissionedAddr(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<number>;

  poolTokenBalance(
    token: string,
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  postSwap(
    encodedSwap: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    postingValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportedTokens(overrides?: CallOverrides): Promise<string[]>;

  tokenForIndex(
    tokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    bondSwap(
      encodedSwap: BigNumberish,
      poolIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeSwap(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      recipient: string,
      depositToPool: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    getPostedSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, boolean] & {
        initiator: string;
        poolOwner: string;
        executed: boolean;
      }
    >;

    getShortCoinType(overrides?: CallOverrides): Promise<string>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<number>;

    ownerOfPool(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    platformFeeCollected(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolOfPermissionedAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<number>;

    poolTokenBalance(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    postSwap(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      postingValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportedTokens(overrides?: CallOverrides): Promise<string[]>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "SwapBonded(uint256)"(
      encodedSwap?: BigNumberish | null
    ): SwapBondedEventFilter;
    SwapBonded(encodedSwap?: BigNumberish | null): SwapBondedEventFilter;

    "SwapCancelled(uint256)"(
      encodedSwap?: BigNumberish | null
    ): SwapCancelledEventFilter;
    SwapCancelled(encodedSwap?: BigNumberish | null): SwapCancelledEventFilter;

    "SwapPosted(uint256)"(
      encodedSwap?: BigNumberish | null
    ): SwapPostedEventFilter;
    SwapPosted(encodedSwap?: BigNumberish | null): SwapPostedEventFilter;
  };

  estimateGas: {
    bondSwap(
      encodedSwap: BigNumberish,
      poolIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelSwap(
      encodedSwap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeSwap(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      recipient: string,
      depositToPool: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPostedSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getShortCoinType(overrides?: CallOverrides): Promise<BigNumber>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    ownerOfPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    platformFeeCollected(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolOfPermissionedAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolTokenBalance(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    postSwap(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      postingValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportedTokens(overrides?: CallOverrides): Promise<BigNumber>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bondSwap(
      encodedSwap: BigNumberish,
      poolIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelSwap(
      encodedSwap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeSwap(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      recipient: string,
      depositToPool: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPostedSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getShortCoinType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    indexOfToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOfPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    platformFeeCollected(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolOfPermissionedAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolTokenBalance(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    postSwap(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      postingValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportedTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
