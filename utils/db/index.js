var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}

export default admin.firestore();
