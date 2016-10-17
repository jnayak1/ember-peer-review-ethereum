# ember-peer-review-ethereum

This is a prototype of a peer-review ethereum dapp (decentralized application). 

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Ethereum Specific Dependencies
* [geth](https://github.com/ethereum/go-ethereum)
* [solc](https://github.com/ethereum/solidity)
  * I had success installing from source rather than from Brew (on Mac) or apt-get (on Ubuntu).

## Installation

* `git clone https://github.com/jnayak1/ember-peer-review-ethereum.git`
* `git clone https://github.com/CenterForOpenScience/ember-osf.git`
* `cd ember-osf`
* Complete config/local.yml with keys obtained from osf.io or staging.osf.io
* `npm install`
* `bower install`
* `cd ../ember-peer-review-ethereum`
* `ember install ../ember-osf`
* `npm link ../ember-osf`
* Complete config/local.yml with keys obtained from osf.io or staging.osf.io
* `npm install`
* `bower install`

## Running / Development

* `BACKEND=stage ember serve` (stage or whatever you setup in local.yml)
* `geth --fast --cache=512 --testnet --rpc --rpccorsdomain "http://localhost:4200" console`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Interface with Ethereum network using [web3.js](https://github.com/ethereum/web3.js/)

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* [web3.js](https://github.com/ethereum/web3.js/)
* [Geth Contract Tutorial](https://github.com/ethereum/go-ethereum/wiki/Contract-Tutorial)

