"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("color");
var NativeShadowDirective = /** @class */ (function () {
    function NativeShadowDirective(el) {
        this.el = el;
    }
    NativeShadowDirective.prototype.ngAfterViewInit = function () {
        if (this.nsShadow === "") {
            this.nsShadow = "2";
        }
    };
    NativeShadowDirective.prototype.onloaded = function () {
        var tnsView = this.el.nativeElement;
        if (tnsView.android) {
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
            shape.setColo(android.graphics.Color.WHITE);
            shape.setCornerRadius(18);
            tnsView.android.setBackgroundDrawable(shape);
            tnsView.android.setElevation(parseInt(this.nsShadow, 10));
        }
        else if (tnsView.ios) {
            tnsView.ios.layer.maskToBounds = false;
            tnsView.ios.layer.shadowColor = new color_1.Color("#000000").ios.CGColor;
            tnsView.ios.layer.shadowOffset = CGSizeMake(2.0, 2.0);
            tnsView.ios.layer.shadowOpacity = 0.70;
            tnsView.ioself.layer.shadowRadius = parseFloat(this.nsShadow);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NativeShadowDirective.prototype, "nsShadow", void 0);
    __decorate([
        core_1.HostListener("loaded"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NativeShadowDirective.prototype, "onloaded", null);
    NativeShadowDirective = __decorate([
        core_1.Directive({ selector: "[nsShadow]" }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], NativeShadowDirective);
    return NativeShadowDirective;
}());
exports.NativeShadowDirective = NativeShadowDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNoYWRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXRpdmUtc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRjtBQUMxRiwrQkFBOEI7QUFNOUI7SUFJSSwrQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDO0lBRXRDLCtDQUFlLEdBQWY7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFFdUIsd0NBQVEsR0FBUjtRQUNwQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDL0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDTCxDQUFDO0lBMUJRO1FBQVIsWUFBSyxFQUFFOzsyREFBa0I7SUFVRjtRQUF2QixtQkFBWSxDQUFDLFFBQVEsQ0FBQzs7Ozt5REFnQnRCO0lBNUJRLHFCQUFxQjtRQURqQyxnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO3lDQUtULGlCQUFVO09BSnpCLHFCQUFxQixDQTZCakM7SUFBRCw0QkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcbmRlY2xhcmUgY29uc3QgQ0dTaXplTWFrZTogYW55O1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6IFwiW25zU2hhZG93XVwifSlcbmV4cG9ydCBjbGFzcyBOYXRpdmVTaGFkb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgpIG5zU2hhZG93OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5uc1NoYWRvdyA9PT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5uc1NoYWRvdyA9IFwiMlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImxvYWRlZFwiKSBvbmxvYWRlZCgpIHtcbiAgICAgICAgY29uc3QgdG5zVmlldyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKHRuc1ZpZXcuYW5kcm9pZCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlKCk7XG4gICAgICAgICAgICBzaGFwZS5zZXRTaGFwZShhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUuUkVDVEFOR0xFKTtcbiAgICAgICAgICAgIHNoYXBlLnNldENvbG8oYW5kcm9pZC5ncmFwaGljcy5Db2xvci5XSElURSk7XG4gICAgICAgICAgICBzaGFwZS5zZXRDb3JuZXJSYWRpdXMoMTgpO1xuICAgICAgICAgICAgdG5zVmlldy5hbmRyb2lkLnNldEJhY2tncm91bmREcmF3YWJsZShzaGFwZSk7XG4gICAgICAgICAgICB0bnNWaWV3LmFuZHJvaWQuc2V0RWxldmF0aW9uKHBhcnNlSW50KHRoaXMubnNTaGFkb3csIDEwKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodG5zVmlldy5pb3MpIHtcbiAgICAgICAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLm1hc2tUb0JvdW5kcyA9IGZhbHNlO1xuICAgICAgICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93Q29sb3IgPSBuZXcgQ29sb3IoXCIjMDAwMDAwXCIpLmlvcy5DR0NvbG9yO1xuICAgICAgICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93T2Zmc2V0ID0gQ0dTaXplTWFrZSgyLjAsIDIuMCk7XG4gICAgICAgICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dPcGFjaXR5ID0gMC43MDtcbiAgICAgICAgICAgIHRuc1ZpZXcuaW9zZWxmLmxheWVyLnNoYWRvd1JhZGl1cyA9IHBhcnNlRmxvYXQodGhpcy5uc1NoYWRvdyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=