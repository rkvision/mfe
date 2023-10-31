import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to startup the app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
}


// Call Mount function immediately
// If we are in developemt or in isolation
if(process.env.NODE_ENV == 'development') {
    const devRoot = document.getElementById("_dashboard_dev_root");
    if(devRoot) {
        mount(devRoot);
    }
}

// We are running through container
// We should export the mount

export { mount }