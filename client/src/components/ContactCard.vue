<template>
    <div>
        <b-col>
            <b-card
                :title="name"
                img-src="../assets/profile.svg"
                img-alt="Contact-Info"
                img-top
                tag="contact"
                style="min-width:20rem; max-width:50rem"
                class="mb-2"
            >
                <b-row>
                    <b-col>
                        <div align="left">Email: </div>
                        <br>
                        <div align="left">Phone: </div>
                        <br>
                        <div align="left">Gender: </div>
                        <br>
                        <div align="left">Contact ID: </div>
                        <br>
                    </b-col>
                    <b-col>
                        <div v-html="email" align="center"/>
                        <br>
                        <div v-html="phone" align="center"/>
                        <br>
                        <div v-html="gender" align="center"/>
                        <br>
                        <div v-html="contact_id" align="center"/>
                        <br>
                    </b-col>
                </b-row>
            </b-card>
        </b-col>
    </div>
</template>

<script>
export default {
    props: ['name', 'email', 'phone', 'gender', 'contact_id']
    
}
</script>

<style scoped>

</style>