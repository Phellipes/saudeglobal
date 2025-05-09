const admin = require('firebase-admin');
const serviceAccount = require('../../path/to/serviceAccountKey.json'); // Substitua com seu caminho

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { db };
