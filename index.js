const TelegramBot = require('node-telegram-bot-api');
var Web3 = require('web3');
var util = require('ethereumjs-util');
// replace the value below with the Telegram token you receive from @BotFather
const token = '596375402:AAFmY7Tsx0Z3zgx1mc2L8t3q59Jfzitn4gE';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true, usePlugins: ['askUser']});
var web3 = new Web3(
    new Web3.providers.HttpProvider('https://ropsten.infura.io/OXNDGBhX9qj7jV9x9i2c')
);
//
// var bytecode ='6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506305f5e1006001819055506305a995c0600260003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460015403600260008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600260008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36104da806102346000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd146102c957806370a08231146102f25780638da5cb5b1461033f578063a6f9dae114610394575b600080600080600260003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115156100b457600080fd5b62013c689250670de0b6b3a76400003484028115156100cf57fe5b049150600260003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156101b657600260003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915082670de0b6b3a7640000830281151561017057fe5b0490503373ffffffffffffffffffffffffffffffffffffffff166108fc8234039081150290604051600060405180830381858888f1935050505015156101b557600080fd5b5b6000821115156101c557600080fd5b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600260003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3505050005b34156102d457600080fd5b6102dc6103cd565b6040518082815260200191505060405180910390f35b34156102fd57600080fd5b610329600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103d3565b6040518082815260200191505060405180910390f35b341561034a57600080fd5b6103526103eb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561039f57600080fd5b6103cb600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610410565b005b60015481565b60026020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561046b57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820e0a1437f7f5836863eebe3c7840befff214bdb79a335842f7bf9266b016198ee0029';
// var interface = [
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_owner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "changeOwner",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Transfer",
// 		"type": "event"
// 	},
// 	{
// 		"payable": true,
// 		"stateMutability": "payable",
// 		"type": "fallback"
// 	},
// 	{
// 		"inputs": [],
// 		"payable": true,
// 		"stateMutability": "payable",
// 		"type": "constructor"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "balanceOf",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "totalSupply",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ];

// Token contract address, used call the token balance of the address in question
const contractAddr = ('0x37180dad52b085de8f8f1177d9236a3913cd7115');

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.

bot.onText(/\/start/, (msg) => 
{
    var userId = msg.from.id;
    bot.sendMessage(userId, 'Send ethereum here in order to get Park tokens ' + contractAddr);
});
bot.onText(/\/tokens (.+)/, function (msg, match) {
    var userId = msg.from.id;
    var addr = match[1];
    var tknAddress = (addr).substring(2);
    console.log(tknAddress);

    // '0x70a08231' is the contract 'balanceOf()' ERC20 token function in hex. A zero buffer is required and then we add the previously defined address with tokens
    var contractData = ('0x70a08231000000000000000000000000' + tknAddress);
    web3.eth.call({
        to: contractAddr, // Contract address, used call the token balance of the address in question
        data: contractData // Combination of contractData and tknAddress, required to call the balance of an address 
    }, function(err, result) {
	    if (result) { 
		    var tokens = web3.toBigNumber(result).toString(); // Convert the result to a usable number string
		    var token_balance = web3.fromWei(tokens, 'wei');
		    console.log('Tokens Owned: ' + token_balance); // Change the string to be in Ether not Wei, and show it in the console
		    bot.sendMessage(userId, `Your balance is ` + token_balance + ' PARK');
	    }
	    else {
		console.log(err); // Dump errors here
	    }
    });
});

bot.onText(/\/checkin/, function (msg) {
    var startDate = new Date();
    var userId = msg.from.id;
    
    bot.sendMessage(userId, "Parking is started at " + startDate);
});

bot.onText(/\/checkout/, function (msg) {
    var finishDate = new Date();
    var userId = msg.from.id;

    // '0x70a08231' is the contract 'balanceOf()' ERC20 token function in hex. A zero buffer is required and then we add the previously defined address with tokens
    var contractData = ('0xa9059cbb000000000000000000000000'+'1516bacD68a59fD9F46B889Ec4Ce16DcfD879851'+'0000000000000000000000000000000000000000000000000000000000000063');
    web3.eth.call({
        to: contractAddr, // Contract address, used call the token balance of the address in question
        data: contractData // Combination of contractData and tknAddress, required to call the balance of an address 
    }, function(err, result) {
	    if (result) { 
		    bot.sendMessage(userId, "Parking is finished at " + finishDate);
	    }
	    else {
		console.log(err); // Dump errors here
	    }
    });
});

bot.onText(/\/location/, function (msg) {
    var userId = msg.from.id;
    bot.sendLocation(userId,50.451843, 30.525862);
    bot.sendMessage(userId, "Here is the point");
});

// bot.onText('message', (msg) => {
//   const chatId = msg.chat.id;
//   var location = "location";
//   if (msg.text.indexOf(location) === 0) {
//       bot.sendLocation(chatId,50.451843, 30.525862);
//       bot.sendMessage(chatId, "Here is the point");
//   }
//   var start = "checkin";
//   if (msg.text.indexOf(start) === 0) {
//       var startDate = new Date();
//       bot.sendMessage(chatId, "Parking is started at " + startDate);
//   }
//   var finish = "checkout";
//   if (msg.text.indexOf(finish) === 0) {
//       var finishDate = new Date();
//       bot.sendMessage(chatId, "Parking is finished at " + finishDate);
//   }
//   var balance = "balance";
//   if (msg.text.indexOf(balance) === 0) {
//       bot.sendMessage(msg.chat.id, 'What is your wallet?', {ask: 'address'});
//   }
 
  // var transaction = "transaction";
  // var key = '00a2998b9cbbc3f5872a53bbbd816839b0f650dc7003fd5bf91f003793175e53';
  // if (msg.text.indexOf(transaction) === 0) {
  //   function sendRaw(rawTx) {
  //     var privateKey = new Buffer(key, 'hex');
  //     var transaction = new tx(rawTx);
  //     transaction.sign(privateKey);
  //     var serializedTx = transaction.serialize().toString('hex');
  //     web3.eth.sendRawTransaction(
  //     '0x' + serializedTx, function(err, result) {
  //         if(err) {
  //             console.log(err);
  //         } else {
  //             console.log(result);
  //         }
  //     });
  //   }
  // }

  // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });
