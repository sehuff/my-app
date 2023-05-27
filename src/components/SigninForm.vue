<script lang="ts" setup>
import UserForm from "./UserForm.vue";
import {NewUser} from "../users";
import {useUsers} from "../stores/users";
import {useModal} from "../composables/modal";
import {ref} from "vue";

const usersStore = useUsers();
const modal = useModal()
const error = ref('');

async function handleSignin(newUser: NewUser)
{
    const body = JSON.stringify(newUser)
    const res = await window.fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body
    })
    if([401,404].includes(res.status))
    {
        error.value = "Username or Password was incorrect."
    }else{
        usersStore.authenticate()
        modal.hideModal()
    }
    //return this.authenticate()
}

</script>

<template>
    <UserForm @submit="handleSignin" :error="error"/>
</template>