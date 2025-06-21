import { Filter } from "./filter";

export class LiveFilter extends Filter {
    filter(aweme): boolean {
        return Java.use("com.ss.android.ugc.aweme.feed.model.Aweme").isLive.call(aweme)
    }
}