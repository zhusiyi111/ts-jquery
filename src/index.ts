







class jQuery {
    constructor(selector: string) {
        const nodes = document.querySelectorAll(selector);
        const result: any = {};

        for (let i in nodes) {

            if (nodes.hasOwnProperty(i)) {
                this[i] = nodes[i];
            }
        }
        this['length'] = nodes.length;
    }

    length: number;
    [key: number]: Element;

    html(html: string) {
        for (let i in this) {
            this[i].innerHTML = html;
        }
    }
}


function $(selector: string) {
    return new jQuery(selector);
}


(window as any).$ = $;

export default $;