import { Filter } from "./filter";

export class AdFilter extends Filter {
    filter(aweme): boolean {
        return Java.use("com.ss.android.ugc.aweme.feed.model.Aweme").isAd.call(aweme)
    }
}