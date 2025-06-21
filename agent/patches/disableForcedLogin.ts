import { Patch } from "./patch";
import Java from "frida-java-bridge";

export class DisableForcedLoginPatch extends Patch {
    mandatoryLoginService = Java.use("com.ss.android.ugc.aweme.services.MandatoryLoginService")
    override patch() {
        this.enableForcedLogin()
        this.shouldShowForcedLogin()
        this.shouldShowLoginTabFirst()
    }

    enableForcedLogin() {
        this.mandatoryLoginService.enableForcedLogin.overload("boolean").implementation = () => false
    }
    shouldShowForcedLogin() {
        this.mandatoryLoginService.shouldShowForcedLogin.overload("boolean").implementation = () => false
    }
    shouldShowLoginTabFirst() {
        this.mandatoryLoginService.shouldShowLoginTabFirst.overload().implementation = () => false
    }
}