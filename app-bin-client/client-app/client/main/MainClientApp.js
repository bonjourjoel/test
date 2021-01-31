import { Called } from "./Called.js";
export class MainClientApp {
    onDeviceReady() {
        document.getElementById('deviceready').classList.add('ready');
    }
    main() {
        const msg = new Called().getMsg();
        document.getElementById('MSGREADY').innerHTML = msg;
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }
}
new MainClientApp().main();