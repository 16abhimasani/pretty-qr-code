/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AnimationPreset, QRCodeAnimation } from "./components/pretty-qr-code/animations";
export namespace Components {
    interface PrettyQrCode {
        "animateQRCode": (animation?: AnimationPreset | QRCodeAnimation) => Promise<void>;
        "contents": string;
        "getModuleCount": () => Promise<number>;
        "legacy": boolean;
        "maskXToYRatio": number;
        "moduleColor": string;
        "positionCenterColor": string;
        "positionRingColor": string;
        "protocol": string;
    }
}
declare global {
    interface HTMLPrettyQrCodeElement extends Components.PrettyQrCode, HTMLStencilElement {
    }
    var HTMLPrettyQrCodeElement: {
        prototype: HTMLPrettyQrCodeElement;
        new (): HTMLPrettyQrCodeElement;
    };
    interface HTMLElementTagNameMap {
        "pretty-qr-code": HTMLPrettyQrCodeElement;
    }
}
declare namespace LocalJSX {
    interface PrettyQrCode {
        "contents"?: string;
        "legacy"?: boolean;
        "maskXToYRatio"?: number;
        "moduleColor"?: string;
        "onCodeRendered"?: (event: CustomEvent<any>) => void;
        "positionCenterColor"?: string;
        "positionRingColor"?: string;
        "protocol"?: string;
    }
    interface IntrinsicElements {
        "pretty-qr-code": PrettyQrCode;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pretty-qr-code": LocalJSX.PrettyQrCode & JSXBase.HTMLAttributes<HTMLPrettyQrCodeElement>;
        }
    }
}
