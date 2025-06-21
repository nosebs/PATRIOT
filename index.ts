
import { SpoofSimPatch } from "./patches/spoof/spoofSim";

import { DisableForcedLoginPatch } from "./patches/disableForcedLogin";
import { FixGoogleAuthPatch } from "./patches/fixGoogleAuth";
import { NoWatermarkPatch } from "./patches/noWatermark";
import { RemoveDownloadRestrictionsPatch } from "./patches/removeDownloadRestrictions";
console.log("Hello via Bun!");

Java.perform(() => [
    new SpoofSimPatch(),
    new DisableForcedLoginPatch(),
    new FixGoogleAuthPatch(),
    new NoWatermarkPatch(),
    new RemoveDownloadRestrictionsPatch()
].forEach((patch) => patch.patch()))