import { Patch } from "./patch";
export class FixGoogleAuthPatch extends Patch {
    googleAuth = Java.use("com.bytedance.lobby.google.GoogleAuth")
    googleOnetapAuth = Java.use("com.bytedance.lobby.google.GoogleOneTapAuth")
    override patch() {
        this.isAvailable()
    }

    isAvailable() {
        this.googleAuth.isAvailable.overload().implementation = () => {
            console.log('isAvailable')
            return false
        }
        this.googleOnetapAuth.isAvailable.overload().implementation = () => {
            console.log('isAvailable2')
            return false
        }
    }
}