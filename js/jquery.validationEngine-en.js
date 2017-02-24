(function(e) {
    e.fn.validationEngineLanguage = function() {};
    e.validationEngineLanguage = {
        newLang: function() {
            e.validationEngineLanguage.allRules = {
                required: {
                    regex: "none",
                    alertText: "* This field is required",
                    alertTextCheckboxMultiple: "* Please select an option",
                    alertTextCheckboxe: "* This checkbox is required",
                    alertTextDateRange: "* Both date range fields are required"
                },
                dateRange: {
                    regex: "none",
                    alertText: "* Invalid ",
                    alertText2: "Date Range"
                },
                dateTimeRange: {
                    regex: "none",
                    alertText: "* Invalid ",
                    alertText2: "Date Time Range"
                },
                minSize: {
                    regex: "none",
                    alertText: "* Minimum ",
                    alertText2: " characters allowed"
                },
                maxSize: {
                    regex: "none",
                    alertText: "* Maximum ",
                    alertText2: " characters allowed"
                },
                groupRequired: {
                    regex: "none",
                    alertText: "* You must fill one of the following fields"
                },
                min: {
                    regex: "none",
                    alertText: "* Minimum value is "
                },
                max: {
                    regex: "none",
                    alertText: "* Maximum value is "
                },
                past: {
                    regex: "none",
                    alertText: "* Date prior to "
                },
                future: {
                    regex: "none",
                    alertText: "* Date past "
                },
                maxCheckbox: {
                    regex: "none",
                    alertText: "* Maximum ",
                    alertText2: " options allowed"
                },
                minCheckbox: {
                    regex: "none",
                    alertText: "* Please select ",
                    alertText2: " options"
                },
                equals: {
                    regex: "none",
                    alertText: "* Fields do not match"
                },
                phone: {
                    regex: /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    alertText: "* Invalid phone number"
                },
                usaphone: {
                    regex: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                    alertText: "* Invalid usa phone number"
                },
                email: {
                    regex: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    alertText: "* Invalid email address"
                },
                integer: {
                    regex: /^[\-\+]?\d+$/,
                    alertText: "* Not a valid integer"
                },
                amount: {
                    regex: /^\d+(\.\d{1,2})?$/,
                    alertText: "* Invalid amount"
                },
                number: {
                    regex: /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
                    alertText: "* Invalid floating decimal number"
                },
                date: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    alertText: "* Invalid date, must be in YYYY-MM-DD format"
                },
                ipv4: {
                    regex: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    alertText: "* Invalid IP address"
                },
                url: {
                    regex: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    alertText: "* Invalid URL"
                },
                onlyNumberSp: {
                    regex: /^[0-9\ ]+$/,
                    alertText: "* Numbers only"
                },
                onlyLetterSp: {
                    regex: /^[a-zA-Z\ \']+$/,
                    alertText: "* Letters only"
                },
                onlyLetterNumber: {
                    regex: /^[0-9a-zA-Z\ ]+$/,
                    alertText: "* No special characters allowed"
                },
                onlyImagesAllowed: {
                    regex: /([^\/\\]+)\.(jpeg|jpg|png|gif|JPEG|JPG|PNG|GIF)$/i,
                    alertText: "* please upload valid file"
                },
                onlyZipAllowed: {
                    regex: /^\S+\.(zip|ZIP)$/,
                    alertText: "* Please upload zip files only"
                },
                onlyHtmlAllowed: {
                    regex: /^\S+\.(html|HTML)$/,
                    alertText: "* Please upload html files only"
                },
                username: {
                    regex: /^[A-Za-z0-9_]{1,20}$/,
                    alertText: "* No special characters allowed except underscore('_')."
                },
                slug: {
                    regex: /^[A-Za-z0-9_]{1,20}$/,
                    alertText: "* No special characters allowed except underscore('_')."
                },
                ajaxUserCall: {
                    url: "ajaxValidateFieldUser",
                    extraData: "name=eric",
                    alertText: "* This user is already taken",
                    alertTextLoad: "* Validating, please wait"
                },
                ajaxUserCallPhp: {
                    url: "phpajax/ajaxValidateFieldUser.php",
                    extraData: "name=eric",
                    alertTextOk: "* This username is available",
                    alertText: "* This user is already taken",
                    alertTextLoad: "* Validating, please wait"
                },
                ajaxNameCall: {
                    url: "ajaxValidateFieldName",
                    alertText: "* This name is already taken",
                    alertTextOk: "* This name is available",
                    alertTextLoad: "* Validating, please wait"
                },
                ajaxNameCallPhp: {
                    url: "phpajax/ajaxValidateFieldName.php",
                    alertText: "* This name is already taken",
                    alertTextLoad: "* Validating, please wait"
                },
                validate2fields: {
                    alertText: "* Please input HELLO"
                },
                dateFormat: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    alertText: "* Invalid Date"
                },
                dateTimeFormat: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    alertText: "* Invalid Date or Date Format",
                    alertText2: "Expected Format: ",
                    alertText3: "mm/dd/yyyy hh:mm:ss AM|PM or ",
                    alertText4: "yyyy-mm-dd hh:mm:ss AM|PM"
                }
            }
        }
    };
    e.validationEngineLanguage.newLang()
})(jQuery)