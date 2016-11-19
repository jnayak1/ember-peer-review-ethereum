# ember-peer-review-ethereum

Build Status `master`: [![Build Status](https://travis-ci.org/jnayak1/ember-peer-review-ethereum.svg?branch=master)](https://travis-ci.org/jnayak1/ember-peer-review-ethereum)

A prototype for a peer-review [Ethereum](https://www.ethereum.org/) dapp (decentralized application).

The purpose of this prototype is to show how "journals" (groups of scientific experts) can offer peer-review services and researchers can submit their reports to these "journals" for peer-review without the need for coordination from intermediates or central authorities. Instead, journals and researchers can be brought together over the Ethereum blockchain.

Work in progress!

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Additional Ethereum Specific Prerequisites

You will need these installed too.

* [geth](https://github.com/ethereum/go-ethereum)
* [solc](https://github.com/ethereum/solidity)
  * I had success installing from [source code](http://solidity.readthedocs.io/en/develop/installing-solidity.html#building-from-source) rather than from Brew (on Mac) or apt-get (on Ubuntu).

## Installation

* `git clone https://github.com/jnayak1/ember-peer-review-ethereum.git`
* `cd ember-peer-review-ethereum/`
* Complete config/local.yml with keys obtained from [osf.io](https://osf.io/settings/applications/create/) or [staging.osf.io](https://staging.osf.io/settings/applications/create/)
* `npm install`
* `bower install`

## Running / Development

* `BACKEND=stage ember serve` (stage or whatever you setup in local.yml)
* `geth --fast --cache=512 --testnet --password /path/to/your_pw_file.txt --unlock <account_addr> --rpc --rpccorsdomain "http://localhost:4200" console`
* Visit app at [http://localhost:4200](http://localhost:4200).
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

Deployment could be done in a few of different ways:
- a traditional HTTP server (e.g. [NGINX](https://www.nginx.com/resources/wiki/), or [Apache Web Server](https://httpd.apache.org/)).
- a CDN (e.g. [Amazon Cloud Front](https://aws.amazon.com/cloudfront/)).
- a peer-to-peer delivery network such as [IPFS](https://ipfs.io/).

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* [web3.js](https://github.com/ethereum/web3.js/)
* [Geth Contract Tutorial](https://github.com/ethereum/go-ethereum/wiki/Contract-Tutorial)

