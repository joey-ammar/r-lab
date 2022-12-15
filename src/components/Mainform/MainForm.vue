<script setup>
import { reactive, ref } from "vue";
import { useTicketStore } from "../../stores/Store";
import i18n from "../../i18n";
import Input from "../Resuable/Input/Input.vue";
import Textarea from "../Resuable/Textarea/Textarea.vue";
import Checkbox from "../Resuable/Checkbox/Checkbox.vue";
import Button from "../Resuable/Button/Button.vue";
import GitlabDropDown from "../Resuable/GitlabelDropdown/GitlabelDropdown.vue";
import Row from "../Resuable/Row/Row.vue";
const { t } = i18n.global;
let saveTicketInStore = useTicketStore();


/* Project */
let selectedProject = ref(null);
let information = ref("Select a project");

/* The form starts empty */
let form = reactive({
    ticket: null,
    from: null,
    description: null,
    project: null,
    label: null,
    team: null,
    priority: null,
    quap: null,
    planned: true,
});


</script>
<template>
    <div class="wrapper">
        <div class="push-form">
            <h1>{{ saveTicketInStore.ticketNumberStore }}</h1>
            <form>
                <Row>
                    <Input :value="form.ticket" :placeholder="t('TicketNumber')" icon="pi pi-user" type="text" />
                    <Input :value="form.from" :placeholder="t('Username')" icon="pi pi-ticket" type="text" />
                </Row>

                <Row>
                    <Textarea class="mt-3" :value="form.description" :placeholder="t('Description')"
                        icon="pi pi-info-circle" />
                </Row>

                <!--Project-->
                <Row>
                    <GitlabDropDown :placeholder="t('projectName')" :prefix="selectedProject" :options="form.project"
                        :about="information" full />
                </Row>

                <!--Project-->
                <Row>
                    <GitlabDropDown :placeholder="t('projectLabel')" :prefix="selectedProject" :options="form.project"
                        :about="information" full />
                    <GitlabDropDown :placeholder="t('Teams')" :prefix="selectedProject" :options="form.project"
                        :about="information" full />
                </Row>
                <!--Project-->
                <Row>
                    <GitlabDropDown :placeholder="t('Priorities')" :prefix="selectedProject" :options="form.project"
                        :about="information" full />
                    <GitlabDropDown :placeholder="t('Quap')" :prefix="selectedProject" :options="form.project"
                        :about="information" full />
                </Row>

                <!--Planned or not!-->

                <Row>
                    <Checkbox />
                </Row>

                <!--Submit-->
                <Row>
                    <Button :submit="t('Submit')" />
                </Row>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../../sass/Basic.scss";
@import "../../sass/Variable.scss";

.wrapper {
    @include flex-between;
}

.push-form {
    margin-top: 10rem;
}

.radio-btn {
    margin-left: 3px;
}

@media screen and (max-width: $bp-desktop-small),
       screen and (min-width: $bp-desktop-small), 
       screen and (min-width: $bp-desktop-small) and (max-width: $bp-desktop), 
       screen and (min-width: $bp-desktop-small) and (max-width: $bp-content-shift), 
       screen and (min-width: $bp-desktop-small) and (max-width: $bp-content-shift),
       screen and (min-width: $bp-content-shift)  {
    input, .wrapper, .push-form {
        width: 90%;
        margin: 10rem auto;
    }
}



</style>
