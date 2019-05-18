/**
 * Date工具类
 */
class DateUtils extends BaseClass {
    public constructor() {
        super();
    }

    /**
     * 根据秒数格式化字符串
     * @param second 秒数
     * @param type 1:00:00:00   2:yyyy-mm-dd h:m:s    3:00:00   4:xx天前，xx小时前，xx分钟前
     * @return
     *
     */
    public getFormatBySecond(second: number, type: number = 1): string {
        var str: string = "";
        switch (type) {
            case 1:
                str = this.getFormatBySecond1(second);
                break;
            case 2:
                str = this.getFormatBySecond2(second);
                break;
            case 3:
                str = this.getFormatBySecond3(second);
                break;
            case 4:
                str = this.getFormatBySecond4(second);
                break;
            case 5:
                str = this.getFormatBySecond5(second);
                break;
            case 6:
                str = this.getFormatBySecond6(second);
                break;
        }
        return str;
    }

    //1: 00:00:00
    private getFormatBySecond1(t: number = 0): string {
        var hourst: number = Math.floor(t / 3600);
        var hours: string;
        if (hourst == 0) {
            hours = "00";
        } else {
            if (hourst < 10)
                hours = "0" + hourst;
            else
                hours = "" + hourst;
        }
        var minst: number = Math.floor((t - hourst * 3600) / 60);
        var secondt: number = Math.floor((t - hourst * 3600) % 60);
        var mins: string;
        var sens: string;
        if (minst == 0) {
            mins = "00";
        } else if (minst < 10) {
            mins = "0" + minst;
        } else {
            mins = "" + minst;
        }
        if (secondt == 0) {
            sens = "00";
        } else if (secondt < 10) {
            sens = "0" + secondt;
        } else {
            sens = "" + secondt;
        }
        return hours + ":" + mins + ":" + sens;
    }

    //3: 00:00
    private getFormatBySecond3(t: number = 0): string {
        var hourst: number = Math.floor(t / 3600);
        var minst: number = Math.floor((t - hourst * 3600) / 60);
        var secondt: number = Math.floor((t - hourst * 3600) % 60);
        var mins: string;
        var sens: string;
        if (minst == 0) {
            mins = "00";
        } else if (minst < 10) {
            mins = "0" + minst;
        } else {
            mins = "" + minst;
        }
        if (secondt == 0) {
            sens = "00";
        } else if (secondt < 10) {
            sens = "0" + secondt;
        } else {
            sens = "" + secondt;
        }
        return mins + ":" + sens;
    }

    //2:yyyy-mm-dd h:m:s
    private getFormatBySecond2(time: number): string {
        var date: Date = new Date(time);
        var year: number = date.getFullYear();
        var month: number = date.getMonth() + 1; 	//返回的月份从0-11；
        var day: number = date.getDate();
        var hours: number = date.getHours();
        var minute: number = date.getMinutes();
        var second: number = date.getSeconds();
        return year + "-" + month + "-" + day + " " + hours + ":" + minute + ":" + second;

    }
    //2:yyyy-mm-dd h:m:s 传入的单位是ms
    private getFormatBySecond6(time: number): string {
        var date: Date = new Date(time);
        // var year: number = date.getFullYear();
        var month: number = date.getMonth() + 1; 	//返回的月份从0-11；
        var day: number = date.getDate();
        var hours: number = date.getHours();
        var minute: number = date.getMinutes();
        // var second: number = date.getSeconds();
        return month + "-" + day + "  " + hours + ":" + (Number(minute) >= 10 ? (minute + "") : ("0" + minute));

    }

    //4:xx天前，xx小时前，xx分钟前
    private getFormatBySecond4(time: number): string {
        var t = Math.floor(time / 3600);
        if (t > 0) {
            if (Math.floor(t / 24 / 90) >= 1) {
                return "三个月前";
            }
            else if (Math.floor(t / 24 / 60) >= 1) {
                return "两个月前";
            }
            else if (Math.floor(t / 24 / 30) >= 1) {
                return "一个月前";
            }
            else if (t > 24) {
                return Math.floor(t / 24) + "天前";
            }
            else {
                return t + "小时前";
            }
        }
        else {
            if (Math.floor(time / 60) == 0) return "刚刚";
            else return Math.floor(time / 60) + "分钟前";

        }
    }

    private getFormatBySecond5(time: number): string {
        //每个时间单位所对应的秒数
        var oneDay: number = 3600 * 24;
        var oneHourst: number = 3600;
        var oneMinst: number = 60;

        var days = Math.floor(time / oneDay);
        var hourst: number = Math.floor(time % oneDay / oneHourst)
        var minst: number = Math.floor((time - (hourst * oneHourst) - (days * oneDay)) / oneMinst)  //Math.floor(time % oneDay % oneHourst / oneMinst);
        var secondt: number = Math.floor((time - hourst * oneHourst) % oneMinst) //time;

        var dayss: string = "";
        var hourss: string = ""
        var minss: string = "";
        var secss: string = ""
        if (time > 0) {
            //天
            if (days == 0) {
                dayss = "";
                //小时
                if (hourst == 0) {
                    hourss = "";
                    //分
                    if (minst == 0) {
                        minss = "";
                        if (secondt == 0) {
                            secss = "";
                        } else if (secondt < 10) {
                            secss = "0" + secondt + "秒";
                        } else {
                            secss = "" + secondt + "秒";
                        }

                        // return secss;
                    }
                    else {
                        minss = "" + minst + "分钟";
                        if (secondt == 0) {
                            secss = "";
                        } else if (secondt < 10) {
                            secss = "0" + secondt + "秒";
                        } else {
                            secss = "" + secondt + "秒";
                        }

                    }

                    return minss;
                }
                else {
                    hourss = hourst + "小时";
                    if (minst == 0) {
                        minss = "0分钟";
                        if (secondt == 0) {
                            secss = "";
                        } else if (secondt < 10) {
                            secss = "0" + secondt + "秒";
                        } else {
                            secss = "" + secondt + "秒";
                        }

                        // return  hourss+minss

                    } else if (minst < 10) {
                        minss = "0" + minst + "分钟";
                    } else {
                        minss = "" + minst + "分钟";
                    }

                    return hourss + minss;

                }
            }
            else {
                dayss = days + "天";
                if (hourst == 0) {
                    hourss = "";
                } else {
                    if (hourst < 10)
                        hourss = "0" + hourst + "小时";
                    else
                        hourss = "" + hourst + "小时";
                    if (minst < 10) {
                        minss = "0" + minst + "分钟"
                    } else {
                        minss = "" + minst + "分钟"
                    }
                }
                return dayss + hourss + minss;
            }
        }
        return "";
    }

}