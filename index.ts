import { SpoofSimPatch } from "./patches/spoof/spoofSim";

import { DisableForcedLoginPatch } from "./patches/disableForcedLogin";
import { FixGoogleAuthPatch } from "./patches/fixGoogleAuth";
import { NoWatermarkPatch } from "./patches/noWatermark";
console.log("Hello via Bun!");

Java.perform(() => {
    [
        new SpoofSimPatch(),
        new DisableForcedLoginPatch(),
        new FixGoogleAuthPatch(),
        new NoWatermarkPatch()
    ].forEach((patch) => patch.patch())
})