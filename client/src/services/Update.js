import Api from '@/services/Api'

export default {
    update (data) {
        return Api().put('/api/contacts/' + data.contact_id, data)
    },
    delete (data) {
        return Api().delete('/api/contacts/' + data.contact_id, data)
    }
}