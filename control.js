// إعداد Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBGv3JmZB71ztx-PwR_wMmT0f8jZlDDT2U",
    authDomain: "ai-voice-interface.firebaseapp.com",
    databaseURL: "https://ai-voice-interface-default-rtdb.firebaseio.com",
    projectId: "ai-voice-interface",
    storageBucket: "ai-voice-interface.firebasestorage.app",
    messagingSenderId: "997645849088",
    appId: "1:997645849088:web:ffc8183b9a0015adb1bee5"
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
