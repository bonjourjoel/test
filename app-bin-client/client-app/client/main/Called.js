import { SharedCalledTest } from "../../../shared-libs/lib/SharedCalledTest.js";
import { ClientCall } from "../../../shared-libs/client/ClientCall.js";
export class Called {
    getMsg() {
        return "Ready " + new SharedCalledTest().getMsg() + new ClientCall().getMsg();
    }
}