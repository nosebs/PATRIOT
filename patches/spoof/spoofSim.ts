import { Patch } from "../patch";


export class SpoofSimPatch extends Patch {

    simCountry = "KZ"
    simMCCMNC = "40177"
    simOperator = "MTS"

    telephonyManager = Java.use("android.telephony.TelephonyManager")
    override patch() {
        this.getSimCountryIso()
        this.getNetworkCountryIso()
        this.getNetworkCountryIso2()
        this.getSimOperator()
        this.getNetworkOperator()
        this.getSimOperatorName()
        this.getNetworkOperatorName()
    }

    getSimCountryIso() {
        this.telephonyManager.getSimCountryIso.overload().implementation = () => this.simCountry
    }

    getNetworkCountryIso() {
        this.telephonyManager.getNetworkCountryIso.overload().implementation = () => this.simCountry
    }
    getNetworkCountryIso2() {
        this.telephonyManager.getNetworkCountryIso.overload('int').implementation = () => this.simCountry
    }

    getSimOperator() {
        this.telephonyManager.getSimOperator.overload().implementation = () => this.simMCCMNC
    }

    getNetworkOperator() {
        this.telephonyManager.getNetworkOperator.overload().implementation = () => this.simMCCMNC
    }

    getSimOperatorName() {
        this.telephonyManager.getSimOperatorName.overload().implementation = () => this.simOperator
    }

    getNetworkOperatorName() {
        this.telephonyManager.getNetworkOperatorName.overload().implementation = () => this.simOperator
    }
}