<template>
    <form class="form" :class="className.join(' ')" @submit.prevent="submit($event)">
        <div v-for="field in fields" v-bind:key="field.id" class="form__field">
            <label class="form__label" v-bind:class="{
                'valid': rulesIsSuccess(field.name, field.value) && field.value,
                'invalid': !rulesIsSuccess(field.name, field.value) && field.value,
            }" v-bind:for="field.id">
                <h3 class="form__field-title">{{ field.title }}</h3>
                <input class="form__input" v-bind:id="field.id" v-bind:type="field.type" v-bind:placeholder="field.title"
                    v-bind:name="field.name" v-model="field.value" v-on:input="rulesIsSuccess(field.name, field.value)">
            </label>
        </div>
        <div class="form__field" v-if="textBtn">
            <button class="form__submit" type="submit" v-bind:disabled="!allInputsIsSuccess">{{ textBtn }}</button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        fields: {
            type: Array,
            required: true,
        },
        className: {
            type: Array,
            default: () => [],
        },
        textBtn: String,
    },
    data: () => ({
        inputsRuleResults: {},
        allInputsIsSuccess: false,
    }),
    mounted() {
        for (const key in this.fields) {
            const { name, } = this.fields[key];

            this.inputsRuleResults[name] = [];
        }
    },
    methods: {
        submit(e) {
            const form = e.currentTarget;
            const fd = new FormData(form);

            this.$emit("submit", fd);
        },
        rulesIsSuccess(name, value) {
            const { rules = [], } = Object.keys(this.fields).reduce((acc, key) => {
                if (this.fields[key].name === name) {
                    acc = this.fields[key];
                }

                return acc;
            }, {});

            if (!rules.length) {
                return true;
            }

            const resultChecked = rules.reduce((acc, { name: ruleName, value: ruleVal }) => {
                if (!(name in acc)) {
                    acc[name] = [];
                }

                switch (ruleName) {
                    case "min":
                        acc[name].push(value.length >= ruleVal);
                        break;
                    case "max":
                        acc[name].push(value.length <= ruleVal);
                        break;
                    case "repeatAs":
                        const findIdxInputByName = Object
                            .keys(this.fields)
                            .find((key) => this.fields[key].name === ruleVal);
                        const val = this.fields[findIdxInputByName].value;

                        acc[name].push(value === val);
                        break;
                }

                return acc;
            }, {});

            this.inputsRuleResults[name] = resultChecked[name];
            this.allInputsIsSuccess = Object.keys(this.inputsRuleResults).every((key) => this.inputsRuleResults[key].every(Boolean));

            return resultChecked[name].every(Boolean);
        },
    },
}
</script>