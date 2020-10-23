<template>
    <div>
        <h1>Update Contacts</h1>
        <input
            type="contact_id"
            name="contact_id"
            v-model="contact_id"
            placeholder="contact_id" 
            style="margin:5px"/>
        <br>
        <input
            type="name"
            name="name"
            v-model="name"
            placeholder="name" 
            style="margin:5px"/>
        <br>
        <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email" 
            style="margin:5px"/>
        <br>
        <input
            type="phone"
            name="phone"
            v-model="phone"
            placeholder="phone" 
            style="margin:5px"/>
        <br>
        <input
            type="gender"
            name="gender"
            v-model="gender"
            placeholder="gender" 
            style="margin:5px"/>
        <br>
        <b-button
            @click='update' size="sm" class="my-2 my-sm-0" style="margin:5px">
            Update
        </b-button>
        <b-button
            @click='remove' size="sm" class="my-2 my-sm-0" style="margin:5px">
            Delete
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
import Update from '@/services/Update'
export default {
    data () {
        return {
            message: null,
            name: '',
            email: '',
            phone: '',
            gender: '',
            contact_id: '',
            resName: '',
            resEmail: '',
            resPhone: '',
            resGender: ''
        }
    },
    methods: {
        async update () {
            console.log('some issue with posting')
            const response = await Update.update({
                contact_id: this.contact_id,
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
        },
        async remove () {
            console.log('some issue with posting')
            const response = await Update.delete({
                contact_id: this.contact_id,
            })
            console.log(response.data)
            this.message = response.data.message
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