// استهداف مشغل الصوت
const audioPlayer = document.getElementById("audioPlayer");

// التحقق من وجود رسالة جديدة في localStorage
function checkForCommand() {
    const command = localStorage.getItem("playAudioCommand");
    if (command) {
        // تشغيل الملف الصوتي
        audioPlayer.src = command;
        audioPlayer.play();
        // إزالة الأمر بعد التنفيذ
        localStorage.removeItem("playAudioCommand");
    }
}

// التحقق من الأوامر كل نصف ثانية
setInterval(checkForCommand, 500);
