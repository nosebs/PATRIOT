import { Filter } from "./filter";

export class StoryFilter extends Filter {
    filter(aweme): boolean {
        return Java.use("com.ss.android.ugc.aweme.feed.model.Aweme").getIsTikTokStory.call(aweme)
    }
}