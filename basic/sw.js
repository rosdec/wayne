// Install event: Write here the code to be executed at the installation of the Service Worker
self.addEventListener('install', event => {
    console.log("Service Worker Installed");
});

// Activate event: Write here the code to be executed at the the activation of the Service Worker  
self.addEventListener('activate', event => {
    console.log("Service Worker Activated");
});

// Fetch event: Write here the code to be executed on every fetch API call
self.addEventListener('fetch', event => {
    console.log("Requested URL: " + event.request.url);
});