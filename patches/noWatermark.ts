import { Patch } from "./patch";
export class NoWatermarkPatch extends Patch {
    aclCommonShare = Java.use("com.ss.android.ugc.aweme.feed.model.ACLCommonShare")
    override patch() {
        this.getTranscode()
    }

    getTranscode() {
        this.aclCommonShare.getTranscode.overload().implementation = () => {
            return 1
        }
    }
}