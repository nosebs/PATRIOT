import { Filter } from "./filter";

export class CardFilter extends Filter {
    filter(aweme): boolean {
        return Java.use("com.ss.android.ugc.aweme.feed.model.Aweme").isCard.call(aweme)
    }
}