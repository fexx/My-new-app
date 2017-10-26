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
            shape.setColor(android.graphics.Color.WHITE);
            shape.setCornerRadius(18);
            tnsView.android.setBackgroundDrawable(shape);
            tnsView.android.setElevation(parseFloat(this.nsShadow));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNoYWRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXRpdmUtc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRjtBQUMxRiwrQkFBOEI7QUFNOUI7SUFJSSwrQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDO0lBRXRDLCtDQUFlLEdBQWY7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFFdUIsd0NBQVEsR0FBUjtRQUNwQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDL0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDdkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNMLENBQUM7SUExQlE7UUFBUixZQUFLLEVBQUU7OzJEQUFrQjtJQVVGO1FBQXZCLG1CQUFZLENBQUMsUUFBUSxDQUFDOzs7O3lEQWdCdEI7SUE1QlEscUJBQXFCO1FBRGpDLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7eUNBS1QsaUJBQVU7T0FKekIscUJBQXFCLENBNkJqQztJQUFELDRCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuZGVjbGFyZSBjb25zdCBDR1NpemVNYWtlOiBhbnk7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogXCJbbnNTaGFkb3ddXCJ9KVxuZXhwb3J0IGNsYXNzIE5hdGl2ZVNoYWRvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCkgbnNTaGFkb3c6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5zU2hhZG93ID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLm5zU2hhZG93ID0gXCIyXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibG9hZGVkXCIpIG9ubG9hZGVkKCkge1xuICAgICAgICBjb25zdCB0bnNWaWV3ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpZiAodG5zVmlldy5hbmRyb2lkKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUoKTtcbiAgICAgICAgICAgIHNoYXBlLnNldFNoYXBlKGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS5SRUNUQU5HTEUpO1xuICAgICAgICAgICAgc2hhcGUuc2V0Q29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5XSElURSk7XG4gICAgICAgICAgICBzaGFwZS5zZXRDb3JuZXJSYWRpdXMoMTgpO1xuICAgICAgICAgICAgdG5zVmlldy5hbmRyb2lkLnNldEJhY2tncm91bmREcmF3YWJsZShzaGFwZSk7XG4gICAgICAgICAgICB0bnNWaWV3LmFuZHJvaWQuc2V0RWxldmF0aW9uKHBhcnNlRmxvYXQodGhpcy5uc1NoYWRvdykpO1xuICAgICAgICB9IGVsc2UgaWYgKHRuc1ZpZXcuaW9zKSB7XG4gICAgICAgICAgICB0bnNWaWV3Lmlvcy5sYXllci5tYXNrVG9Cb3VuZHMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLnNoYWRvd0NvbG9yID0gbmV3IENvbG9yKFwiIzAwMDAwMFwiKS5pb3MuQ0dDb2xvcjtcbiAgICAgICAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLnNoYWRvd09mZnNldCA9IENHU2l6ZU1ha2UoMi4wLCAyLjApO1xuICAgICAgICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93T3BhY2l0eSA9IDAuNzA7XG4gICAgICAgICAgICB0bnNWaWV3Lmlvc2VsZi5sYXllci5zaGFkb3dSYWRpdXMgPSBwYXJzZUZsb2F0KHRoaXMubnNTaGFkb3cpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19