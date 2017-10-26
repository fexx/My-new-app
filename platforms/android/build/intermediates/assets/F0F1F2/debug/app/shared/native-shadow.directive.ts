import { AfterViewInit, Directive, ElementRef, HostListener, Input } from "@angular/core";
import { Color } from "color";

declare const android: any;
declare const CGSizeMake: any;

@Directive({ selector: "[nsShadow]"})
export class NativeShadowDirective implements AfterViewInit {

    @Input() nsShadow: string;

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        if (this.nsShadow === "") {
            this.nsShadow = "2";
        }
    }

    @HostListener("loaded") onloaded() {
        const tnsView = this.el.nativeElement;
        if (tnsView.android) {
            const shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
            shape.setColor(android.graphics.Color.WHITE);
            shape.setCornerRadius(18);
            tnsView.android.setBackgroundDrawable(shape);
            tnsView.android.setElevation(parseFloat(this.nsShadow));
        } else if (tnsView.ios) {
            tnsView.ios.layer.maskToBounds = false;
            tnsView.ios.layer.shadowColor = new Color("#000000").ios.CGColor;
            tnsView.ios.layer.shadowOffset = CGSizeMake(2.0, 2.0);
            tnsView.ios.layer.shadowOpacity = 0.70;
            tnsView.ioself.layer.shadowRadius = parseFloat(this.nsShadow);
        }
    }
}
