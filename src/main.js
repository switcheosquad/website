import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createMetaManager } from "vue-meta";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBalanceScale,
  faBars,
  faCube,
  faExternalLink,
  faGlobe,
  faMoneyBillWaveAlt,
  faShieldCheck,
  faTimes,
  faUserSecret,
} from "@fortawesome/pro-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faBalanceScale,
  faCube,
  faExternalLink,
  faFacebook,
  faGithub,
  faGlobe,
  faInstagram,
  faMoneyBillWaveAlt,
  faShieldCheck,
  faTimes,
  faTelegram,
  faTwitter,
  faUserSecret
);

createApp(App)
  .use(router)
  .use(createMetaManager())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
