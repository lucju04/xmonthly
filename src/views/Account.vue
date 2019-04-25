<template>
  <div>
    <h1>Your accounts</h1>
    <AccountCard v-for="account in accounts" :key="account.id" :account="account" />
  </div>
</template>

<script>
import AccountCard from '@/components/AccountCard.vue';
import AccountService from '@/services/AccountService.js';

export default {
  components: {
    AccountCard,
  },
  data() {
    return {
      accounts: []
    }
  },
  created () {
    AccountService.getAccounts()
    .then(response => {
      this.accounts = response.data
    })
    .catch(error => {
      console.log('There was an error:', error.response)
    })
  }
}
</script>
