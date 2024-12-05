// إعداد Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// تهيئة Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// إرسال الأوامر إلى قاعدة البيانات
function sendCommand(audioFile) {
    firebase.database().ref("command").set(audioFile)
        .then(() => {
            alert("تم إرسال الأمر لتشغيل: " + audioFile);
        })
        .catch((error) => {
            console.error("خطأ أثناء إرسال البيانات:", error);
        });
}
