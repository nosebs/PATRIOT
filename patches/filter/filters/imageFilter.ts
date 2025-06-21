import { Filter } from "./filter";

export class ImageFilter extends Filter {
    filter(aweme): boolean {
        const _aweme = Java.use("com.ss.android.ugc.aweme.feed.model.Aweme")
        return _aweme.isImage.call(aweme) || _aweme.isPhotoMode.call(aweme)
    }
}