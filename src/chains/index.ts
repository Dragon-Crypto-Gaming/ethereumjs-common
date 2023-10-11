import { chainsType } from './../types'

export const chains: chainsType = {
  names: {
    '1': 'mainnet',
    '3': 'ropsten',
    '4': 'rinkeby',
    '42': 'kovan',
    '6284': 'goerli',
    '43113': 'fuji',
    '43114': 'avalanche',
  },
  mainnet: require('./mainnet.json'),
  ropsten: require('./ropsten.json'),
  rinkeby: require('./rinkeby.json'),
  kovan: require('./kovan.json'),
  goerli: require('./goerli.json'),
  fuji: require('./fuji.json'),
  avalanche: require('./avalanche.json'),
}
