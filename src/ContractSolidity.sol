// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;


contract Committee{
    
    event AccountCreation(string result);
    event LoginInformation(string information); 
    event VoteProposing(string name, string info, address by, string result);
    event VoteApproved(string name, string result);
    event VoteAccepted(string name, string info, string result);

    struct User
    {
       string name;
       string password;
       address payable adr;
       bool isExist;
       string status;
    }

    uint eldersCount = 0;
    uint membersCount = 0;

    User public user;
    mapping (address => User) public Users;
    address payable public currentAccount;

    struct Vote
    {
        string name;
        string information;
        uint percentForApproval;
        uint votesAmount;
        uint votesNeeded;
        string expirationDate;
        bool isApproved;
        bool isExist;
        
    }

    Vote public vote;
    mapping (string=>mapping(address => bool)) votedPeople;
    mapping (string => Vote) public proposedVotes;
    mapping (string => Vote) public approvedVotes;
    mapping (string => Vote) public acceptedVotes;

    modifier onlyElder(string memory _status) 
    {
        require(keccak256(abi.encodePacked((_status))) == keccak256(abi.encodePacked(("Elder"))), "Not an elder!");
        _;
    }

    modifier onlyMember(string memory _status) 
    {
        require(keccak256(abi.encodePacked((_status))) == keccak256(abi.encodePacked(("Member"))), "Not a member!");
        _;
    }

    function createUser(string memory _name, string memory _pasw, address payable _adr,string memory _status) external
    {
       require(!Users[_adr].isExist, "This address is already exist!");
       user = User(_name,_pasw,_adr,true,_status);
       Users[_adr] = user;

       if (keccak256(abi.encodePacked((_status))) == keccak256(abi.encodePacked(("Elder"))))
       {
           eldersCount++;
       }
       else
       {
           membersCount++;
       }

       emit AccountCreation("Account succesfully created!");
    }

    function login(address payable _adr, string memory _pasw) external
    {
       require(Users[_adr].isExist, "This account doesn't exist!");
       require(keccak256(abi.encodePacked((Users[_adr].password))) == keccak256(abi.encodePacked((_pasw))), "Invalid password!");
       currentAccount = _adr;
       emit LoginInformation("Logged in successfully!");
    }

    function logout() external
    {
        currentAccount = payable(address(0));
        emit LoginInformation("Logged out successfully!");
    }

    function proposeVote(string memory _name, string memory _info, uint _amountVotes, string memory _expirationDate, uint _percentForApproval) 
    external onlyElder(Users[currentAccount].status)
    {
        require(_percentForApproval <= 100 && _percentForApproval >= 0, "Invalid percents for approval!");
        require(!proposedVotes[_name].isExist && !approvedVotes[_name].isExist, "This vote has already been proposed!");
        require(eldersCount >= _amountVotes && membersCount >= _amountVotes, "Too much votes needed! We don't have that much elders or/and members!");
        vote = Vote(_name, _info, _percentForApproval, 1, _amountVotes,  _expirationDate, false, true);
        proposedVotes[_name] = vote;
        votedPeople[_name][currentAccount] = true;
        emit VoteProposing(_name,_info,currentAccount, "Success!");
    }

    function eldersVoteForProposedVote(string memory _name) external onlyElder(Users[currentAccount].status)
    {
        require(proposedVotes[_name].isExist && !proposedVotes[_name].isApproved, "This voting doesn't exist or it has been already approved!");
        require(!votedPeople[_name][currentAccount], "You have already voted!");
        proposedVotes[_name].votesAmount ++ ;
        if(proposedVotes[_name].votesAmount >= eldersCount*51/100)
        {
            proposedVotes[_name].votesAmount = 0;
            proposedVotes[_name].isApproved = true;
            approvedVotes[_name] = proposedVotes[_name];
            delete proposedVotes[_name];
            emit VoteApproved(_name, "Vote has been successfully approved!");
        }
    }

    function membersVote(string memory _name) external onlyMember(Users[currentAccount].status)
    {
        require(approvedVotes[_name].isExist && approvedVotes[_name].isApproved, "This voting doesn't exist, it hasn't been approved yet or already accepted!");
        require(!votedPeople[_name][currentAccount], "You have already voted!");
        approvedVotes[_name].votesAmount ++ ;
        votedPeople[_name][currentAccount] = true;
        if(approvedVotes[_name].votesAmount >= approvedVotes[_name].votesNeeded && 
        approvedVotes[_name].votesAmount >= membersCount*approvedVotes[_name].percentForApproval/100)
        { 
            acceptedVotes[_name] = approvedVotes[_name];
            delete approvedVotes[_name];
            emit VoteAccepted(_name,approvedVotes[_name].information, "Vote has been successfully accepted!");

        }

    }
}
