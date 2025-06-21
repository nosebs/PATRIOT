import { Patch } from "./patch";
import Java from "frida-java-bridge";

export class NoWatermarkPatch extends Patch {
    aclCommonShare = Java.use("com.ss.android.ugc.aweme.feed.model.ACLCommonShare")
    override patch() {
        this.getTranscode()
    }

    getTranscode() {
        this.aclCommonShare.getTranscode.overload().implementation = () => 1 //Remote watermark
    }
}