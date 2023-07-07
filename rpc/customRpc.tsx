export const customRPC = {
    id: 33695,
    name: 'RapidChain',
    network: 'RapidChain',
    nativeCurrency: {
        decimals: 18,
        name: 'RAPID',
        symbol: 'RAPID',
    },
    rpcUrls: {
        public: { http: ['https://testnet.rapidrpc.com/'] },
        default: { http: ['https://testnet.rapidrpc.com/'] },
    },
    blockExplorers: {
        etherscan: { name: 'RapidScan', url: 'https://rapidscan.io/' },
        default: { name: 'RapidScan', url: 'https://rapidscan.io/' },
    }
}
