let scrollIntervalId = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "start" ) {
        console.log("Iniciando Scroll");
    
        if(scrollIntervalId !== null) {
        }
        if (scrollIntervalId === null) {
        scrollIntervalId = setInterval(() => {
            window.scrollBy({
                top: 2, 
                behavior: 'smooth'
            });
        }, 20);
    }
    }
    if (message.action === "stop" && scrollIntervalId !== null) {
        clearInterval();
        scrollIntervalId = null;
        console.log("Parando Scroll");
    }

});