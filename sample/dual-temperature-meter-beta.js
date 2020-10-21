/* -----------------------------------------------
/* Author : Saravanan Santhanakrishnan  - saravanans.design@gmail.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : -
/* GitHub : https://github.com/saravanansdesign/dual-temperature-meter.js
/* Dependencies : jQuery 3.5.1 & Above
/* How to use? : Check the GitHub README
/* v1.0.0
/* ----------------------------------------------- */
(function($) {
    $.fn.dualTemperatureMeter = function(options) {

        var t_per,fahrenheit,celsius;

        this.initialize = function (){

            var default_obj = {
                d : "",
                deg : "c",
                h : 300,
                t : null,
                bg : "#f41e33"
            };

            var t_obj = {
                d : options.target,
                deg : options.degree ? options.degree : default_obj.deg,
                h : options.height ? options.height : default_obj.h,
                t : options.temperature,
                bg : options.color ? options.color : default_obj.bg
            };

            if(t_obj.deg === "f"){
                fahrenheit = t_obj.t;
                celsius = (t_obj.t -32) * 5 / 9;
                t_per = (celsius + 60) * 0.6;

            }else{
                celsius = t_obj.t;
                t_per = (t_obj.t + 60) * 0.6;
                fahrenheit = t_obj.t * 9 / 5 + 32;
            }

            var t_dom = '<div style="height: '+t_obj.h+'px;display: inline-block;vertical-align: top;">' +
                '    <div style="height:100%;display: inline-block;vertical-align: top;position: relative;">' +
                '        <div style="height: '+t_per+'%; background: '+t_obj.bg+'; width: 14%; position: absolute; bottom: 16.6%; left: 43.5%; transform: rotate(180deg);"></div>' +
                '        <img src="./temperature-img.png" style="height: 100%;">' +
                '    </div>' +
                '</div>';

            var defaultVal = $.extend(default_obj, options); //overwrite default values if there

            return this.each(function(index, el) {
                const data = {
                    fahrenheit: fahrenheit ? fahrenheit : (t_obj.t + 60) * 0.6,
                    celsius: celsius ? celsius : ((t_obj.t -32) * 5 / 9)
                };

                $("#"+t_obj.d).html(t_dom);

                if (typeof defaultVal.actions == 'function')
                    defaultVal.actions(data);
            });
        };

        return this.initialize();
    }
})(jQuery);
