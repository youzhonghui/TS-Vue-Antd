<template>
    <div>
        <a-list itemLayout="horizontal" :dataSource="messages.data">
            <a-list-item slot="renderItem" slot-scope="item, index">
                <a-list-item-meta :description="item.text">
                    <a slot="title">{{item.name}}</a>
                    <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                    <div>Content {{index}}</div>
                </a-list-item-meta>
            </a-list-item>
        </a-list>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class MessageBox extends Vue {
    messages = {
        last_update: 0,
        data: []
    };

    syncMessage() {
        axios
            .get("http://localhost:3000/get")
            .then(response => {
                // console.log(response.data);
                if (response.data.last_update > this.messages.last_update) {
                    this.$set(
                        this.messages,
                        "last_update",
                        response.data.last_update
                    );
                    this.$set(this.messages, "data", response.data.data);
                }
            })
            .catch(error => {})
            .finally(() => {});
    }

    mounted() {
        window.setInterval(() => {
            this.syncMessage();
        }, 1000);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
