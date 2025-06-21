import { Patch } from "./patch";
export class RemoveDownloadRestrictionsPatch extends Patch {
    aclCommonShare = Java.use("com.ss.android.ugc.aweme.feed.model.ACLCommonShare")
    override patch() {
        this.getCode()
        this.getShowType()
    }

    getCode() {
        this.aclCommonShare.getCode.overload().implementation = () => 0
    }

    getShowType() {
        this.aclCommonShare.getShowType.overload().implementation = () => 2
    }
}