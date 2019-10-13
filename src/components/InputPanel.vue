<template>
    <div style="margin-top: 20px">
        <a-textarea
            placeholder="Type your message here."
            v-model="typed_msg"
            :autosize="{ minRows: 2, maxRows: 6 }"
        />
        <div style="margin-top: 10px; float: right" @click="send">
            <a-button type="primary">Send</a-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class InputPanel extends Vue {
    typed_msg: string = "";

    send() {
        axios
            .get("http://localhost:3000/new", { params: {data: this.typed_msg } })
            .then(response => {
                console.log('send success!')
            })
            .catch(error => {})
            .finally(() => {});
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
