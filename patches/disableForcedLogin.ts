import { Patch } from "./patch";
export class DisableForcedLoginPatch extends Patch {
    mandatoryLoginService = Java.use("com.ss.android.ugc.aweme.services.MandatoryLoginService")
    override patch() {
        this.enableForcedLogin()
        this.shouldShowForcedLogin()
        this.shouldShowLoginTabFirst()
    }

    enableForcedLogin() {
        this.mandatoryLoginService.enableForcedLogin.overload("boolean").implementation = () => {
            console.log('enableForcedLogin')
            return false
        }
    }
    shouldShowForcedLogin() {
        this.mandatoryLoginService.shouldShowForcedLogin.overload("boolean").implementation = () => {
            console.log('shouldShowForcedLogin')
            return false
        }
    }
    shouldShowLoginTabFirst() {
        this.mandatoryLoginService.shouldShowLoginTabFirst.overload().implementation = () => {
            console.log('shouldShowLoginTabFirst')
            return false
        }
    }
}