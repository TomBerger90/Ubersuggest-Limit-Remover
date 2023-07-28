chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('app.neilpatel.com')) {
        try {
            await chrome.scripting.executeScript({
                target: { tabId: tabId },
                function: () => {
                    localStorage.clear();
                },
            });
        } catch (err) {
            console.error(`Erreur lors de l'exécution du script: ${err}`);
        }
    }
});
