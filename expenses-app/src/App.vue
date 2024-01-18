<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</template>

<!-- Adding the setup keyword to a script tag to the script also removes the need from exporting components. -->
<script setup> 
  import Header from './components/Header.vue'
  import Balance from './components/Balance.vue'
  import IncomeExpenses from './components/IncomeExpenses.vue'
  import TransactionList from './components/TransactionList.vue'
  import AddTransaction from './components/AddTransaction.vue'

  // export default {
  //   components: {
  //     Header,
  //     Balance,
  //     IncomeExpenses,
  //     TransactionList,
  //     AddTransaction
  //   },
  // };
</script>