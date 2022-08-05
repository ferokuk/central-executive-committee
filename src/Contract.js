const ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"name": "AccountCreation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "information",
				"type": "string"
			}
		],
		"name": "LoginInformation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "info",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"name": "VoteAccepted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"name": "VoteApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "info",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"name": "VoteProposing",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Users",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "adr",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isExist",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "acceptedVotes",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "information",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "percentForApproval",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesNeeded",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "expirationDate",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isExist",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "approvedVotes",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "information",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "percentForApproval",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesNeeded",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "expirationDate",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isExist",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pasw",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "_adr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_status",
				"type": "string"
			}
		],
		"name": "createUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentAccount",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "eldersVoteForProposedVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_adr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_pasw",
				"type": "string"
			}
		],
		"name": "login",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "logout",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "membersVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_info",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_amountVotes",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_expirationDate",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_percentForApproval",
				"type": "uint256"
			}
		],
		"name": "proposeVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "proposedVotes",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "information",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "percentForApproval",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesNeeded",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "expirationDate",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isExist",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "user",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "adr",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isExist",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "vote",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "information",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "percentForApproval",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesNeeded",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "expirationDate",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isExist",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const address = '0x45f8F695Bef89B4aec54F2534df2CBBa46774354'

export {ABI,address}
