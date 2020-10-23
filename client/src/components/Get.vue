<template>
    <div>
        <h1>Retrieve Contacts</h1>
        <b-button @click='get' size="sm" class="my-2 my-sm-0" style="margin:5px" >
            Retrieve
        </b-button>
        <br>
        <br>
        <b-row align-h="center">
            <contact-card v-for="contact in getResponse"
                :key="contact._id" 
                :name="contact.name"
                :email="contact.email"
                :phone="contact.phone"
                :gender="contact.gender"
                :contact_id="contact._id"
            >
            </contact-card>
        </b-row>
    </div>
</template>

<script>
import Get from '@/services/Get'
import ContactCard from '@/components/ContactCard'
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
    },
    components: {
        'contact-card': ContactCard
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