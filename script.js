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

// استماع للأوامر القادمة من Firebase وتشغيل الملف الصوتي
const audioPlayer = document.getElementById("audioPlayer");

firebase.database().ref("command").on("value", (snapshot) => {
    const command = snapshot.val();
    if (command) {
        audioPlayer.src = command;
        audioPlayer.play()
            .then(() => console.log("تم تشغيل الصوت بنجاح"))
            .catch((error) => console.error("خطأ أثناء تشغيل الصوت:", error));
        firebase.database().ref("command").set(null); // إعادة ضبط الأمر
    }
});
