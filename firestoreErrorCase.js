const firebase = require('firebase')
require('firebase/firestore')
const ftest = require('@firebase/testing')
const app = ftest.initializeAdminApp({ projectId: 'test' })

const data = {
  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
}

async function test() {
  try {
  await app.firestore().collection('gremlins').doc('gremlin1').set(data)
  } catch (err) {
    console.log("caught error:", err)
  }
}

test()
