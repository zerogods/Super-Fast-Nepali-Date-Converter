// Works fine but still it's a work in progess.. ;) 

var NE_Date = function (Fx) {
    var TZ = " 00:00:00 GMT+545";
    var BS = [[31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30], [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30], [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]];
    var NE_D = ["आईतबार", "सोमबार", "मंगलबार", "बुधबार", "बिहीबार", "शुक्रबार", "शनिबार"];
    var NE_M = ["बैशाख", "जेष्ठ", "अषाढ", "श्रावण", "भदौ", "असोज", "कार्तिक", "मंगसिर", "पौष", "माघ", "फाल्गुन", "चैत्र"];
    var EN_D = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var EN_M = [[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]];
    var NE_Num = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    function is_Valid(Y, M, D) {
        return (Y >= 2000 && Y <= 2029 && M >= 1 && M <= 12 && D <= (EN_Mon(Y)[M - 1]) && D >= 1) ? true : false;
    }

    function Output(NE) {
        var out = false;
        switch (Fx) {
            case 1:
                out = NE[0] + "/" + NE[1] + "/" + NE[2] + ", " + EN_D[NE[3] - 1];
                break;
            case 2:
                out = NE[0] + "/" + NE[1] + "/" + NE[2];
                break;
            case 3:
                out = [NE[4], NE[0] + "/" + NE[1] + "/" + NE[2]];
                break;
            default:
                out = NE_Number(NE[0]) + " " + NE_M[NE[1] - 1] + " " + NE_Number(NE[2]) + " गते, " + NE_D[NE[3] - 1];
                break;
        }
        return out ? out : false;
    }

    function NE_Number(num) {
        var Arr = num.toString().split("");
        var NE = "";
        for (var i = 0; i < Arr.length; i++) {
            if (typeof (Arr[i] * 1) === "number") {
                NE += NE_Num[Arr[i] * 1];
            } else {
                NE += Arr[i];
            }
        }
        return NE;
    }

    function EN_Mon(Y) {
        return is_Leap(Y) ? EN_M[1] : EN_M[0];
    }

    function is_Leap(Y) {
        return (Y % 100 === 0) ? (Y % 400 === 0) ? true : false : (Y % 4 === 0) ? true : false;
    }

    function Get_Day(Y, M, D) {
        return new Date(Y + "/" + M + "/" + D + TZ).getDay() + 1;
    }

    function Convert(Y, M, D, X) {
        var NE = false, DYN = [is_Leap(Y) ? 13 : 14, (Y === (2020 || 2024)) ? 16 : 17],
                YY = (Y.toString().split("")[1]) * 1;
        if (is_Valid(Y, M, D)) {
            if (M < 4 || (M === 4 && D < DYN[0])) {
                NE = Core(8, BS[YY * 1], Count_Days(YMD2TS(Y, M, D), YMD2TS(Y, 1, 1)) + DYN[1]);
                NE[0] = Y + 56;
            } else {
                NE = Core(0, BS[YY + 1], Count_Days(YMD2TS(Y, M, D), YMD2TS(Y, 4, DYN[0])) + 1);
                NE[0] = Y + 57;
            }
            NE[3] = Get_Day(Y, M, D);
            NE[4] = YMD2TS(Y, M, D);
        }
        return NE ? X === undefined ? Output(NE) : NE : false;
    }

    function Count_Days(From, To) {
        return Math.floor((From - To) / 86400000);
    }

    function Core(i, Arr, D) {
        for (var M = i; M < 12; M++) {
            if (D <= Arr[M]) {
                break;
            } else {
                D -= Arr[M];
            }
        }
        return ["", M + 1, D];
    }

    function CheckX(from, to) {
        var out = false, F = new Date(from), T = new Date(to), X = "", Y = "";
        var V_Date = (F !== "Invalid Date" && T !== "Invalid Date") ? true : false;
        if (V_Date && typeof from === "number" && typeof to === "number") {
            X = TS2YMD(from);
            Y = TS2YMD(to);
            out = [YMD2TS(X[0], X[1], X[2]), YMD2TS(Y[0], Y[1], Y[2])];
        } else if (V_Date) {
            X = TS2YMD(F.getTime());
            Y = TS2YMD(T.getTime());
            out = [YMD2TS(X[0], X[1], X[2]), YMD2TS(Y[0], Y[1], Y[2])];
        }
        return out;
    }

    function MultiX(from, to) {
        var CHX = CheckX(from, to);
        if (!CHX) {
            return false;
        } else {
            var c = 0, out = [];
            for (var i = CHX[0]; i <= CHX[1]; i = i + 86400000) {
                if (i === 1) {
                    TS2YMD(TS, 0);
                    (BS(Y)[M - 1]);
                }
                out[c] = [TS2YMD(i, 0), TS_2_BS(i)];
                c++;
            }
            return out;
        }
    }

    function MX2(from, to) {
        var CHX = CheckX(from, to);
        if (!CHX) {
            return false;
        } else {
            var c = 0, out = [];
            var Days = Count_Days(CHX[1], CHX[0]);
            var YMD = TS2YMD(CHX[0]);
            var init = Convert(YMD[0], YMD[1], YMD[2], 0);
            var EY = YMD[0] * 1, EM = YMD[1] * 1, ED = YMD[2] * 1;
            var NY = init[0] * 1, NM = init[1] * 1, ND = init[2] * 1 - 1;
            var EYY = (EY.toString().charAt(2) + "" + EY.toString().charAt(3)) * 1;
            var DDay = init[3] * 1;
            while (Days > 0) {
                if (ND > BS[EYY][NM - 1]) {
                    ND = 1;
                    NM++;
                    if (NM > 12) {
                        NM = 1;
                        NY++;
                    }
                } else if (ED > EN_Mon(EYY)[EM - 1]) {
                    ED = 1;
                    EM++;
                    if (EM > 12) {
                        EM = 1;
                        EY++;
                        EYY++;
                    }
                }

                if (DDay > 6) {
                    DDay = 0;
                } else {
                    DDay++;
                }
                out[c] = [TS2YMD(CHX[0], 0), NE_Number(NY) + " " + NE_M[NM - 1] + " " + NE_Number(ND) + " गते, " + NE_D[DDay]];
                Days--;
                ND++;
                ED++;
                c++;
                CHX[0] = CHX[0] + 86400000;
            }
            return out;
        }
    }

    function TS_2_BS(TS, X) {
        var YMD = TS2YMD(TS);
        return Convert(YMD[0], YMD[1], YMD[2], X);
    }

    function YMD2TS(Y, M, D) {
        return new Date(Y + "/" + M * 1 + "/" + D + TZ).getTime();
    }

    function TS2YMD(TS, X) {
        var D = new Date(TS);
        switch (X) {
            case undefined:
                return [D.getFullYear(), D.getMonth() + 1, D.getDate()];
            case "Day":
                return D.getDay() * 1 + 1;
            case "D":
                return D.getDate();
            case "Y":
                return D.getFullYear();
            case "M":
                return D.getMonth() * 1 + 1;
            default :
                return D.getFullYear() + "/" + (D.getMonth() * 1 + 1) + "/" + D.getDate();
        }
    }

    return {
        Format: function (X) {
            Fx = X;
        },
        CE2BS: function (Y, M, D, X) {
            return Convert(Y, M, D, X);
        },
        TS2BS: function (TS, X) {
            return TS_2_BS(TS * 1, X);
        },
        X2BS: function (From, To, X) {
            return MultiX(From, To, X);
        },
        MX2BS: function (From, To) {
            return MX2(From, To);
        }
    };
};

       
