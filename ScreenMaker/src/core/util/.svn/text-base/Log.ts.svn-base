// TypeScript file
class Log {
    public static trace(...params: any[]) {
        if (App.gameConfig.isDebug) {
            params[0] = "[DebugLog]" + params[0]
            console.log.apply(console, params);
        }
    }
}