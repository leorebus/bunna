import {createClient} from 'contentful'

var client, authorized,
  space = 'e6xzdv9jvj81',
  accessToken = '1b66b7f5919b8ff163a2ab93022af0197015ecc2be6a59cb90a8fae6a8cd675a';

function initClient () {
  client = createClient({
    space: space,
    accessToken: accessToken
  })
  return client.getSpace()
    .then(() => {
      authorized = true
      return authorized
    })
}

function getClient () {
  return authorized && client
}

function resetClient () {
  authorized = false
}

export {
  initClient,
  getClient,
  resetClient
}
