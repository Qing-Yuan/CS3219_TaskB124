<template>
    <div>
        <h1>Add Contacts</h1>
        <input
            type="name"
            name="name"
            v-model="name"
            placeholder="name" />
        <br>
        <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email" />
        <br>
        <input
            type="phone"
            name="phone"
            v-model="phone"
            placeholder="phone" />
        <br>
        <input
            type="gender"
            name="gender"
            v-model="gender"
            placeholder="gender" />
        <br>
        <button
            @click='create'>
            Create
        </button>
        <br>
        <div class="success" v-html="message" />
        <br>
        <div class="success" v-html="name" />
        <br>
        <div class="success" v-html="email" />
        <br>
        <div class="success" v-html="phone" />
        <br>
        <div class="success" v-html="gender" />
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
            gender: ''
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
            this.name = "Name: " + response.data.data.name
            this.email = "Email: " + response.data.data.email
            this.phone = "Phone: " + response.data.data.phone
            this.gender = "Gender: " + response.data.data.gender
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