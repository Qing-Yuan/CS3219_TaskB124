<template>
    <div>
        <h1>Add Contacts</h1>
        <input
            type="name"
            name="name"
            v-model="name"
            placeholder="name"
            style="margin:5px" />
        <br>
        <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email"
            style="margin:5px" />
        <br>
        <input
            type="phone"
            name="phone"
            v-model="phone"
            placeholder="phone"
            style="margin:5px" />
        <br>
        <input
            type="gender"
            name="gender"
            v-model="gender"
            placeholder="gender"
            style="margin:5px" />
        <br>
        <b-button @click='create' size="sm" class="my-2 my-sm-0" style="margin:5px" >
            Create
        </b-button>
        <br>
        <div class="success" v-html="message" />
        <br>
        <div class="success" v-html="resName" />
        <br>
        <div class="success" v-html="resEmail" />
        <br>
        <div class="success" v-html="resPhone" />
        <br>
        <div class="success" v-html="resGender" />
    </div>
</template>

<script>
import Post from '@/services/Post'
export default {
    data () {
        return {
            message: null,
            name: '',
            email: '',
            phone: '',
            gender: '',
            resName: '',
            resEmail: '',
            resPhone: '',
            resGender: ''
        }
    },
    methods: {
        async create () {
            console.log('some issue with posting')
            const response = await Post.post({
                name: this.name,
                email: this.email,
                phone: this.phone,
                gender: this.gender
            })
            console.log(response.data)
            this.message = response.data.message
            this.resName = "Name: " + response.data.data.name
            this.resEmail = "Email: " + response.data.data.email
            this.resPhone = "Phone: " + response.data.data.phone
            this.resGender = "Gender: " + response.data.data.gender
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
.success {
    color: green;
}
</style>