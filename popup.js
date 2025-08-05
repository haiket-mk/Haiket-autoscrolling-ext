const btnStart = document.getElementById("start")
const btnStop = document.getElementById("stop")

console.log("Start Button:", btnStart)
console.log("Stop Button:", btnStop)

btnStart.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];

        // Envia a mensagem para o content.js
        chrome.tabs.sendMessage(tab.id, { action: "start" });

        // Injeta console.log direto na aba ativa
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                console.log("Scroll Started");
            }
        });
    });
});

btnStop.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];

        chrome.tabs.sendMessage(tab.id, { action: "stop" });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                console.log("Scroll Stopped");
            }
        });
    });
});
