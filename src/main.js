import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './i18n.js';

import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css';


import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTicket, faFlask , faBars, faX} from '@fortawesome/free-solid-svg-icons'

// import CSS resources
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);

library.add(faTicket, faFlask, faBars, faX)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(i18n);
app.use(BootstrapVue3)
app.use(router)
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('RadioButton', RadioButton);
app.component('Button', Button);
app.mount('#app')
