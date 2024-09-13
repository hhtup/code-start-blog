import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', ()=>{

    const user = reactive(
        JSON.parse(localStorage.getItem('user') || '{}')
    )
    
    return {user}
})