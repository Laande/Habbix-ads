let ads = [
    'adsbygoogle adsbygoogle-noablate',
    'roomenterad-habblet-container',
    'adsbygoogle',
    'google-auto-placed',
    'adpn-19a33276fx365f-1',
    'adpn-19a33276fx365f-2'
];

function removeElementsByClass(className) {
    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
        console.log(`Removed element with class ${className}`);
    }
}

function removeElementById(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.remove();
        console.log(`Removed element with id ${elementId}`);
    }
}

function mutationCallback(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            for (let addedNode of mutation.addedNodes) {
                for (let className of ads) {
                    if (addedNode.classList.contains(className)) {
                        addedNode.remove();
                    }
                }
                if (ads.includes(addedNode.id)) {
                    addedNode.remove();
                }
            }
        }
    }
}

const observer = new MutationObserver(mutationCallback);
const observerConfig = { childList: true, subtree: true };
observer.observe(document.body, observerConfig);

for (let className of ads) {
    removeElementsByClass(className);
    removeElementById(className);
}
