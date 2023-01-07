
export default [
    {
        "inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
        "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view", "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "shareholder", "type": "address" }],
        "name": "getUnpaidEarnings", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view", "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "totalDistributed",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "totalDividends",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "dividendsPerShare",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "dividendsPerShareAccuracyFactor",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "shares",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalExcluded",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalRealised",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]