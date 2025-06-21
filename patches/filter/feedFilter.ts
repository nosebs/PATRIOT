import { Patch } from "../patch";
import { Filter } from "./filters/filter";

import { AdFilter } from "./filters/adFilter";
import { CardFilter } from "./filters/cardFilter";
import { LiveFilter } from "./filters/liveFilter";
import { StoryFilter } from "./filters/storyFilter";
import { ImageFilter } from "./filters/imageFilter";


export class FeedFilterPatch extends Patch {
    static filters: Filter[] = [
        new AdFilter(),
        new LiveFilter(),
        new StoryFilter(),
        new CardFilter(),
        //new ImageFilter()
    ]
    override patch() {
        const feedApiService = Java.use("com.ss.android.ugc.aweme.feed.FeedApiService")
        feedApiService.fetchFeedList.overload("X.0hSK").implementation = function(_0hSK) {
            const feedList = this.fetchFeedList(_0hSK)

            const awemes = feedList.getItems()
            const iterator = awemes.iterator();

            while (iterator.hasNext()) {
                const aweme = iterator.next()
                for(let filter of FeedFilterPatch.filters) {
                    if(filter.filter(aweme)) {
                        console.log('Filtered', Java.use("com.ss.android.ugc.aweme.feed.model.Aweme").getAid.call(aweme))
                        iterator.remove()
                        break;
                    }
                }
            }

            return feedList
        }
    }
}
