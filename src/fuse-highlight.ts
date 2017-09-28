import { deepGet, deepSet } from './deep';

export class FuseHighlightValueConverter {


    toView(value: Array<any>, cssClass: string) {

        cssClass = cssClass || '';

        let counter = value.length;

        while (counter--) {

            value[counter].item.highlighted = {};
            var matchesCounter = value[counter].matches.length;

            while (matchesCounter--) {
                var result = [];

                let fieldName: string = value[counter].matches[matchesCounter].key;

                let text = deepGet(value[counter].item, fieldName.split('.'), {});


                var matches = value[counter].matches[matchesCounter].indices; // assume these are the matched indices

                var pair = matches.shift();

                // Build the formatted string
                for (var i = 0; i < text.length; i++) {
                    var char = text.charAt(i)
                    if (pair && i == pair[0]) {
                        result.push(`<span class='${cssClass}'>`);
                    }
                    result.push(char)
                    if (pair && i == pair[1]) {
                        result.push('</span>')
                        pair = matches.shift()
                    }
                }

                let highlightedValue = result.join('');

                // if (fieldName.includes('.')) {
                deepSet(value[counter].item.highlighted, fieldName, highlightedValue);
                // }
                // else {
                //     value[counter].item.highlighted[`${fieldName}`] = highlightedValue;
                // }
            }
        }
        return value;
    }
}