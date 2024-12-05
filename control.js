// إعداد Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBGv3JmZB71ztx-PwR_wMmT0f8jZlDDT2U",
    authDomain: "ai-voice-interface.firebaseapp.com",
    databaseURL: "https://ai-voice-interface-default-rtdb.firebaseio.com",
    projectId: "ai-voice-interface",
    storageBucket: "ai-voice-interface.appspot.com",
    messagingSenderId: "997645849088",
    appId: "1:997645849088:web:6929a069d1e7e387b1bee5"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// وظيفة لإرسال الأوامر إلى قاعدة البيانات
function sendCommand(audioFile) {
    firebase.database().ref("command").set(audioFile)
        .then(() => alert("تم إرسال الأمر لتشغيل: " + audioFile))
        .catch((error) => console.error("خطأ أثناء إرسال البيانات:", error));
}
