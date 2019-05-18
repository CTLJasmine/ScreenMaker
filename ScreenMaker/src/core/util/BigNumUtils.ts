class BigNumUtils {
    /** list[0]:底数 list[1]:指数 */
    public static formatListToNum(list: any[]) {
        let num: string;
        if (list[1] <= 8) {
            num = (Math.pow(10, list[1]) * list[0]).toFixed(0) + "";
        }
        else if (list[1] > 8) {
            num = (Math.pow(10, list[1] - 6) * list[0]).toFixed(0) + "M";
        }
        else if (list[1] > 10) {
            num = (Math.pow(10, list[1] - 8) * list[0]).toFixed(0) + "B";
        }
        else if (list[1] > 12) {
            num = (Math.pow(10, list[1] - 10) * list[0]).toFixed(0) + "t";
        }
        else if (list[1] > 14) {
            num = (Math.pow(10, list[1] - 12) * list[0]).toFixed(0) + "q";
        }
        else if (list[1] > 16) {
            num = (Math.pow(10, list[1] - 14) * list[0]).toFixed(0) + "Q";
        }
        else if (list[1] > 18) {
            num = (Math.pow(10, list[1] - 16) * list[0]).toFixed(0) + "s";
        }
        else if (list[1] > 20) {
            num = (Math.pow(10, list[1] - 18) * list[0]).toFixed(0) + "S";
        }
        return num;
    }

    public static formatNum(value: any) {
        let len = value.toString().length;
        let num: string;
        if (len <= 9) {
            num = value + "";
        }
        else if (len > 9) {
            num = Math.floor(value / Math.pow(10, 6)) + "M";
        }
        else if (len > 11) {
            num = Math.floor(value / Math.pow(10, 8)) + "B";
        }
        else if (len > 13) {
            num = Math.floor(value / Math.pow(10, 10)) + "t";
        }
        else if (len > 15) {
            num = Math.floor(value / Math.pow(10, 12)) + "q";
        }
        else if (len > 17) {
            num = Math.floor(value / Math.pow(10, 14)) + "Q";
        }
        else if (len > 19) {
            num = Math.floor(value / Math.pow(10, 16)) + "s";
        }
        else if (len > 21) {
            num = Math.floor(value / Math.pow(10, 18)) + "S";
        }
        return num;
    }

    public compareNum(a1, a2) {
        let a, b;
        if (a1 instanceof Array) {
            a = Math.pow(10, a1[1]) * a1[0];
            b = Math.pow(10, a1[1]) * a1[0];
        } else if (a1 instanceof String || a1 instanceof Number) {
            a = Number(a1);
            b = Number(a2);
        }

        return a >= b;
    }
}