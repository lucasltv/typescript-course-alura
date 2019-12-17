System.register([], function (exports_1, context_1) {
    "use strict";
    var DaysOfWeek;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (DaysOfWeek) {
                DaysOfWeek[DaysOfWeek["Domingo"] = 0] = "Domingo";
                DaysOfWeek[DaysOfWeek["Segunda"] = 1] = "Segunda";
                DaysOfWeek[DaysOfWeek["Terca"] = 2] = "Terca";
                DaysOfWeek[DaysOfWeek["Quarta"] = 3] = "Quarta";
                DaysOfWeek[DaysOfWeek["Quinta"] = 4] = "Quinta";
                DaysOfWeek[DaysOfWeek["Sexta"] = 5] = "Sexta";
                DaysOfWeek[DaysOfWeek["Sabado"] = 6] = "Sabado";
            })(DaysOfWeek || (DaysOfWeek = {}));
            exports_1("DaysOfWeek", DaysOfWeek);
        }
    };
});
