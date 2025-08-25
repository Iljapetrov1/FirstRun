// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.212/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var BIT_15990_FlowAnimation;
        (function (BIT_15990_FlowAnimation) {
            function Animate(ctx, Object, Speed, repeat, direction) {

        var animation = new TcHmi.Animation(Object.getId(), '') // Create the animation
            .addKeyframe('right', '100%', 0) // Add first keyframe to start position
            .addKeyframe('right', '0%', 1) // Add second keyframe to target position
            .duration(Speed);    // Set duration
            
            var iterationCountDefault = animation.iterationCount(); // 1
                animation.iterationCount('infinite');
              var iterationCount = animation.iterationCount(); // 'infinite'

              //var animation = new TcHmi.Animation('ViewDesktopBeckhoffLogo', '');
                var directionDefault = animation.direction(); // 'normal'
                    animation.direction('alternate');
                       var direction = animation.direction(); // 'alternate'

        animation.run();    // Runs the animation
            }
            BIT_15990_FlowAnimation.Animate = Animate;
        })(BIT_15990_FlowAnimation = Functions.BIT_15990_FlowAnimation || (Functions.BIT_15990_FlowAnimation = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('Animate', 'TcHmi.Functions.BIT_15990_FlowAnimation', TcHmi.Functions.BIT_15990_FlowAnimation.Animate);
