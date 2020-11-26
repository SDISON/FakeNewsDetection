var contract_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"status","type":"uint256"}],"name":"get_nonce_log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"status","type":"string"}],"name":"newsAdd_log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"status","type":"string"}],"name":"register_log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"status","type":"string"}],"name":"set_nonce_log","type":"event"},{"inputs":[{"internalType":"string[]","name":"arr","type":"string[]"}],"name":"add_unrated_news","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_address","type":"address"}],"name":"get_consumer_nonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_address","type":"address"}],"name":"get_creator_nonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rated_news","outputs":[{"internalType":"string","name":"date","type":"string"},{"internalType":"string","name":"state","type":"string"},{"internalType":"string","name":"city","type":"string"},{"internalType":"string","name":"pin","type":"string"},{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"created_by","type":"string"},{"internalType":"string","name":"rated_when","type":"string"},{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"address","name":"account_address","type":"address"},{"internalType":"uint8","name":"removed","type":"uint8"},{"internalType":"uint8","name":"isRated","type":"uint8"},{"internalType":"uint8","name":"deleted","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"register_consumer_account","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"register_creator_account","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_address","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"set_consumer_nonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_address","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"set_creator_nonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"unrated_news","outputs":[{"internalType":"string","name":"date","type":"string"},{"internalType":"string","name":"state","type":"string"},{"internalType":"string","name":"city","type":"string"},{"internalType":"string","name":"pin","type":"string"},{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"created_by","type":"string"},{"internalType":"string","name":"rated_when","type":"string"},{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"address","name":"account_address","type":"address"},{"internalType":"uint8","name":"removed","type":"uint8"},{"internalType":"uint8","name":"isRated","type":"uint8"},{"internalType":"uint8","name":"deleted","type":"uint8"}],"stateMutability":"view","type":"function"}]

var contract_address = '0x3c635cb15f3cded72de2a30da446bcbaa0d4cd7e'

//register consumer account
document.getElementById("regCustomer").addEventListener('click', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            await ethereum.enable();
            var account = await web3.givenProvider.selectedAddress;
            var myContract = new web3.eth.Contract(contract_abi,contract_address);
            var trans = await (myContract.methods.register_consumer_account().send({from:account}));
            log_register(trans);
		}
		catch(error){
			var ask = window.confirm(error.message);
   			if (ask)
				window.location.href = "http://localhost:8000/register";
			console.log(error);
		}
            //const signature = await web3.eth.personal.sign(web3.utils.utf8ToHex(nonce), account);
	}
});

//register log
async function log_register(trans){
	if((trans.events.register_log.returnValues.status) === "Account already registered")
		{
			var ask = window.confirm("Consumer account already registered.");
   			if(ask)
				window.location.href = "http://localhost:8000/register";
		}
		else if((trans.events.register_log.returnValues.status) === "Account successfully registered")
		{
			var ask = window.confirm("Consumer account successfully registered.");
   			if (ask)
				window.location.href = "http://localhost:8000/register";
		}
		else
		{
			var ask = window.confirm("Some error occured.");
   			if (ask)
				window.location.href = "http://localhost:8000/register";
		}
}
/*
//add news consumer
document.getElementById("submit_news").addEventListener('click', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            var account = await web3.givenProvider.selectedAddress;
            var myContract = new web3.eth.Contract(contract_abi,contract_address);
            var trans = await (myContract.methods.add_unrated_news(news_content_array).send({from:account}));
            log_newsAdd(trans);
		}
		catch(error){
			var ask = window.confirm("User denied the metamask transaction.");
   			if (ask)
				window.location.href = "http://localhost:8000/home";
			console.log(error);
		}
            //const signature = await web3.eth.personal.sign(web3.utils.utf8ToHex(nonce), account);
	}
});

//newsAdd log
async function log_register(trans){
	if((trans.events.newsAdd_log.returnValues.status) === "Successfully added")
		{
			var ask = window.confirm("Successfully created");
   			if(ask)
				window.location.href = "http://localhost:8000/home";
		}
		else if((trans.events.newsAdd_log.returnValues.status) === "Fail to add")
		{
			var ask = window.confirm("Fail to create.");
   			if (ask)
				window.location.href = "http://localhost:8000/home";
		}
		else
		{
			var ask = window.confirm("Some error occured.");
   			if (ask)
				window.location.href = "http://localhost:8000/home";
		}
}

//verify account
document.getElementById("verify_account_consumer").addEventListener('click', async () => {
	var account = await web3.givenProvider.selectedAddress;
	var nonce = get_nonce_consumer(account);
    const signature = await web3.eth.personal.sign(web3.utils.utf8ToHex(nonce), account);
    check_signature(account, signature);
	});

//get_nonce_consumer
async function get_nonce_consumer(account){
	
}*/
