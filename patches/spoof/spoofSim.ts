import { Patch } from "../patch";
export class SpoofSimPatch extends Patch {
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
        this.telephonyManager.getSimCountryIso.overload().implementation = () => {
            console.log('getSimCountryIso')
            return "KZ"
        }
    }

    getNetworkCountryIso() {
        this.telephonyManager.getNetworkCountryIso.overload().implementation = () => {
            console.log('getNetworkCountryIso')
            return "KZ"
        }
    }
    getNetworkCountryIso2() {
        this.telephonyManager.getNetworkCountryIso.overload('int').implementation = () => {
            console.log('getNetworkCountryIso2')
            return "KZ"
        }
    }

    getSimOperator() {
        this.telephonyManager.getSimOperator.overload().implementation = () => {
            console.log('getSimOperator')
            return "40177" //401	77	40177	Asia and the Middle East	Kazakhstan	KZ	MTS	Tele2.kz	KAZ77	GSM 900 / GSM 1800 / UMTS 900
        }
    }

    getNetworkOperator() {
        this.telephonyManager.getNetworkOperator.overload().implementation = () => {
            console.log('getNetworkOperator')
            return "40177"
        }
    }

    getSimOperatorName() {
        this.telephonyManager.getSimOperatorName.overload().implementation = () => {
            console.log('getSimOperatorName')
            return "MTS"
        }
    }

    getNetworkOperatorName() {
        this.telephonyManager.getNetworkOperatorName.overload().implementation = () => {
            console.log('getNetworkOperatorName')
            return "MTS"
        }
    }
}