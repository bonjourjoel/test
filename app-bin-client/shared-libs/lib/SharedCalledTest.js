import { SharedCalledTest2 } from "./SharedCalledTest2.js";
export class SharedCalledTest {
    getMsg() {
        return new SharedCalledTest2().getMsg() + " from ext lib...";
    }
}