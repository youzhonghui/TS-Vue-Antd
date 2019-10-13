<template>
    <div>
        <a-row>
            <a-col :span="6"></a-col>
            <a-col :span="12">
                <a-list itemLayout="horizontal" :dataSource="messages">
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
            </a-col>
            <a-col :span="6"></a-col>
        </a-row>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MessageBox extends Vue {
    messages = [
        {
            name: "user1",
            text: "Ant Design Title 1"
        },
        {
            name: "user2",
            text: "Ant Design Title 2"
        },
        {
            name: "user3",
            text: "Ant Design Title 3"
        },
        {
            name: "user4",
            text: "Ant Design Title 4"
        }
    ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
