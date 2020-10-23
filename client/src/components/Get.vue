<template>
    <div>
        <h1>Retrieve Contacts</h1>
        <button
            @click='get'>
            Retrieve
        </button>
        <br>
        <table class="table" style="width:75%">
            <col style="width:25%">
            <col style="width:25%">
            <col style="width:25%">
            <col style="width:25%">
            <thead>
                <tr>
                    <th class="text-left">
                    Name
                    </th>
                    <th class="text-left">
                    Email
                    </th>
                    <th class="text-left">
                    Phone
                    </th>
                    <th class="text-left">
                    Gender
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="item in getResponse"
                    :key="item.name"
                >
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.gender }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Get from '@/services/Get'
export default {
    data () {
        return {
            getResponse: null
        }
    },
    methods: {
        async get () {
            const response = await Get.get()
            console.log(response.data)
            this.getResponse = response.data.data
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}
.table {
    margin-left: auto;
    margin-right: auto;
}
</style>