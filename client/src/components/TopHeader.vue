<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-button @click='goGet' size="sm" class="my-2 my-sm-0" style="margin:5px" >
                        Get Contacts
                    </b-button>
                    <b-button @click='goCreate' size="sm" class="my-2 my-sm-0" style="margin:5px" >
                        Create Contact
                    </b-button>
                    <b-button @click='goUpdate' size="sm" class="my-2 my-sm-0" style="margin:5px" >
                        Update
                    </b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    methods: {
    async goGet () {
      this.$router.push({name: 'get'})
    },
    async goCreate () {
      this.$router.push({name: 'post'})
    },
    async goUpdate () {
      this.$router.push({name: 'update'})
    }
  }
}
</script>

<style scoped>

</style>