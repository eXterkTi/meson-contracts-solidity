const TronWeb = require('tronweb')
const { ethers } = require('ethers')
const { ERC20 } = require('@mesonfi/contract-abis')

const tronWeb = new TronWeb({
  fullHost: 'https://api.nileex.io',
  privateKey: process.env.PRIVATE_KEY
})

const totalSupply = ethers.utils.parseUnits('1000000', 6)

async function deploy_token() {
  let token
  try {
    token = await tronWeb.contract().new({
      abi: ERC20.abi,
      bytecode: ERC20.bytecode,
      feeLimit: 1000000000,
      callValue: 0,
      // userFeePercentage: 1,
      // originEnergyLimit: 10000000,
      parameters: ['TRX USDC', 'USDC', totalSupply.toString(), 6]
    })
  } catch (e) {
    console.log(e)
  }
  const tokenAddress = tronWeb.address.fromHex(token.address)
  console.log(tokenAddress)
}

deploy_token()