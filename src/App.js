// import logo from './logo.svg';
// import './App.css';


// import React from 'react';

// function App() {

//   //  const web3 = new Web3("http://localhost:8545");

//   var abi = [
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "x",
//           "type": "uint256"
//         }
//       ],
//       "name": "foo",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "pure",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_x",
//           "type": "uint256"
//         }
//       ],
//       "name": "ternary",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "pure",
//       "type": "function"
//     }
//   ]

//   var bytecode = "608060405234801561001057600080fd5b506101b1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632fbebd381461003b57806355278c5b1461006b575b600080fd5b61005560048036038101906100509190610124565b61009b565b6040516100629190610160565b60405180910390f35b61008560048036038101906100809190610124565b6100cb565b6040516100929190610160565b60405180910390f35b6000600a8210156100af57600090506100c6565b60148210156100c157600190506100c6565b600290505b919050565b6000600a82106100dc5760026100df565b60015b60ff169050919050565b600080fd5b6000819050919050565b610101816100ee565b811461010c57600080fd5b50565b60008135905061011e816100f8565b92915050565b60006020828403121561013a576101396100e9565b5b60006101488482850161010f565b91505092915050565b61015a816100ee565b82525050565b60006020820190506101756000830184610151565b9291505056fea264697066735822122025e66345ba49ecbd56bf094d735fb2f52b62be259dbe4cfcc09bb6207593069464736f6c634300080e0033";

//   let payload = {
//     data: bytecode
//   }

//   // let deploy_contract = new web3.eth.Contract(JSON.parse(abi))

//   React.useEffect(() => {


//     // if (window.ethereum) {
//     //   window.ethereum.request({ method: 'eth_requestAccounts' })
//     //     .then(res => {
//     //       // Return the address of the wallet
//     //       console.log(res);
//     //       let parameter = {
//     //         from: res[0],
//     //         gas: web3.utils.toHex(800000),
//     //         gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),

//     //       }

//     //       deploy_contract.deploy(payload).send(parameter, (err, transactionHash) => {
//     //         console.log('Transaction Hash :', transactionHash);
//     //       }).on('confirmation', () => { }).then((newContractInstance) => {
//     //         console.log('Deployed Contract Address : ', newContractInstance.options.address);
//     //       })
//     //     })
//     // } else {
//     //   alert('No Ethereum');
//     // }






//   }, [])

//   return (
//     <div>

//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, World!</h1>
        <p>Your account: {this.state.account}</p>
      </div>
    );
  }
}

export default App;
