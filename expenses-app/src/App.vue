<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :income="+income" :outgoings="+outgoings" />
    <TransactionList :transactions="transactions" />
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

  import { ref, computed } from 'vue';

  const transactions = ref([
    { id: 1, text: 'Candy', amount: -112.10 },
    { id: 2, text: 'Refund', amount: 299.95 },
    { id: 3, text: 'Mbappe fund', amount: -25.25 },
    { id: 4, text: 'Cabbages', amount: -3.20 },
    { id: 5, text: 'Paycheck', amount: 500 }
  ]);

  const total = computed(() => {
    return transactions.value.reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0);
  });

  const income = computed(() => {
    return transactions.value.filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0).toFixed(2);
  });

  const outgoings = computed(() => {
    return transactions.value.filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0).toFixed(2);
  });


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