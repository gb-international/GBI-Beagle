
Vue.component("v-select", {
    template: "",

    props: {
        id: {
            default: ""
        },
        value: {
            default: ""
        },
        options: {
            required: true,
            type: Array
        },
        labelField: {
            default: "name"
        },
        valueField: {
            default: "id"
        },
        filterable: {
            default: false,
            type: Boolean
        },
        disabled: {
            default: false,
            type: Boolean
        },
        required: {
            default: false,
            type: Boolean
        },
        autoclose: {
            default: true,
            type: Boolean
        },
        placeholder: {
            default: ""
        },
        filterPlaceholder: {
            default: "Select..."
        },
        noMatchText: {
            default: "no item found"
        }
    },
    data() {
        return {
            // isOpen: false,
            isOpen: true,
            selected: null,
            filter: "",
            hoverIndex: -1
        };
    },
    computed: {
        filteredOptions() {
            return this.options.filter(option => {
                return (
                    this.getLabel(option)
                        .toLowerCase()
                        .indexOf(this.filter) > -1
                );
            });
        }
    },
    methods: {
        select(option) {
            if (!option) {
                return;
            }

            this.$emit("input", this.getValue(option));

            if (this.autoclose) {
                this.filter = "";
                this.isOpen = false;
            }
        },
        open() {
            this.isOpen = true;

            this.$nextTick(() => {
                if (this.selected) {
                    this.hoverIndex = this.getOptionIndex(this.selected);
                    this.scrollToOption(this.selected);
                }

                if (this.filterable) {
                    this.$refs.filter.focus();
                }
            });
        },
        getLabel(option) {
            if (option) {
                return obj_get(option, this.labelField, option);
            }
            return "";
        },
        getValue(option) {
            return obj_get(option, this.valueField, option);
        },
        getOptionFromValue(val) {
            return this.options.find(option => {
                return val === this.getValue(option);
            });
        },
        getOptionIndex(option) {
            return this.filteredOptions.findIndex(opt => opt === option);
        },
        navigateOption(direction) {
            if (this.filteredOptions.length === 0) {
                return;
            }

            this.hoverIndex += direction;

            if (this.hoverIndex >= this.filteredOptions.length) {
                this.hoverIndex = 0;
            } else if (this.hoverIndex < 0) {
                this.hoverIndex = this.filteredOptions.length - 1;
            }

            this.scrollToOption(this.filteredOptions[this.hoverIndex]);
        },
        scrollToOption(option) {
            const index = this.getOptionIndex(option);

            if (index < 0) {
                return;
            }

            const target = this.$refs["option-" + index];

            if (target) {
                scrollTo(target[0]);
            }
        }
    },
    watch: {
        value(val) {
            this.selected = this.getOptionFromValue(val);
        }
    },
    mounted() {
        this.selected = this.getOptionFromValue(this.value);
    }
});

const scrollTo = (target, container = null) => {
    container = container || target.closest(".scroll-container") || document.body;

    const top = target.offsetTop;
    const bottom = target.offsetTop + target.offsetHeight;
    const viewRectTop = container.scrollTop;
    const viewRectBottom = viewRectTop + container.clientHeight;

    if (top < viewRectTop) {
        container.scrollTop = top;
    } else if (bottom > viewRectBottom) {
        container.scrollTop = bottom - container.clientHeight;
    }
};

const obj_get = (collection, value, def = null) => {
    const v = value.split(".").reduce((a, b) => {
        return a[b];
    }, collection);

    if (v !== undefined) {
        return v;
    }

    return def;
};

const isFunction = value => {
    return Object.prototype.toString.call(value) === "[object Function]";
};

const isObject = value => {
    return Object.prototype.toString.call(value) === "[object Object]";
};

Vue.directive("clickaway", {
    bind(el, { value: callback }) {
        if (!isFunction(callback)) {
            return;
        }

        const handler = event => {
            if (el.contains(event.target)) {
                return;
            }

            el.__cache.callback(event);
        };

        el.__cache = {
            callback,
            handler: handler
        };

        document.addEventListener("click", el.__cache.handler, false);
    },

    update(el, { value }) {
        if (isFunction(value)) {
            el.__cache.callback = value;
        }
    },

    unbind(el) {
        document.removeEventListener("click", el.__cache.handler, false);
    }
});

// new Vue({
//     el: "#app",
//     data: {
//         selected: "Option 3",
//         opts: [
//             { id: '1', name: 'Option 1' },
//             { id: '2', name: 'Option 2' },
//             { id: '3', name: 'Option 3' },
//             { id: '4', name: 'Option 4' },
//             { id: '5', name: 'Option 5' },
//             { id: '6', name: 'Option 6' },
//             { id: '7', name: 'Option 7' },
//             { id: '8', name: 'Option 8' },
//             { id: '9', name: 'Option 9' },
//             { id: '10', name: 'Option 10' },
//             { id: '11', name: 'Option 11' },
//             { id: '12', name: 'Option 12' },
//             { id: '13', name: 'Option 13' },
//             { id: '14', name: 'Option 14' },
//             { id: '15', name: 'Option 15' },
//             { id: '16', name: 'Option 16' },
//             { id: '17', name: 'Option 17' },
//             { id: '18', name: 'Option 18' },
//             { id: '19', name: 'Option 19' },
//             { id: '20', name: 'Option 20' },
//             { id: '21', name: 'Option 21' },
//             { id: '22', name: 'Option 22' },
//             { id: '23', name: 'Option 23' },
//             { id: '24', name: 'Option 24' },
//             { id: '25', name: 'Option 25' },

//         ]
//     },
//     mounted() {
//         setTimeout(() => {
//             this.selected = "Option 1";
//         }, 2000);
//         setTimeout(() => {
//             this.selected = "Option 1";
//         }, 2000);

//         // setTimeout(() => {
//         //   this.selected = 'Option 21'
//         // }, 4000)
//     }
// });
