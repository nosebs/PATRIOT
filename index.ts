
import { SpoofSimPatch } from "./patches/spoof/spoofSim";

import { DisableForcedLoginPatch } from "./patches/disableForcedLogin";
import { FixGoogleAuthPatch } from "./patches/fixGoogleAuth";
import { NoWatermarkPatch } from "./patches/noWatermark";
import { RemoveDownloadRestrictionsPatch } from "./patches/removeDownloadRestrictions";
import { FeedFilterPatch } from "./patches/feedFilter";
console.log("Hello via Bun!");

Java.perform(() => [
    new SpoofSimPatch(),
    new DisableForcedLoginPatch(),
    new FixGoogleAuthPatch(),
    new NoWatermarkPatch(),
    new RemoveDownloadRestrictionsPatch(),
    //new FeedFilterPatch()
].forEach((patch) => patch.patch()))