#!/bin/sh

set -eu -o pipefail

fork_url="https://mainnet.infura.io/v3/${API_KEY}"

exec /usr/local/bin/anvil --fork-url ${fork_url} --chain-id ${CHAIN_ID} --host ${HOST}
