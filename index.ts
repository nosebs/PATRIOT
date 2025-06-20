import { SpoofSimPatch } from "./patches/spoof/spoofSim";

import { DisableForcedLoginPatch } from "./patches/disableForcedLogin";
import { FixGoogleAuthPatch } from "./patches/fixGoogleAuth";
import { NoWatermarkPatch } from "./patches/noWatermark";
console.log("Hello via Bun!");

try {
    console.log(Java.available)
    Java.perform(() => {
        [
            new SpoofSimPatch(),
            new DisableForcedLoginPatch(),
            new FixGoogleAuthPatch(),
            new NoWatermarkPatch()
        ].forEach((patch) => patch.patch())
    })
} catch (e) {
    console.log(e.stack)
}