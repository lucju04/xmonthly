<template>
    <div class="account-card -shadow">
        <div class="account-card-header">
            <h4>{{ account.name }}</h4><span>{{ account.currency }}</span>
        </div>
        <div class="account-card-content">
            <p>{{ account.description }}</p>
        </div>
        <div class="account-card-footer">
            <span>{{ account.amount }} {{ account.currency }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        account: Object
    },
}
</script>

<style>

.account-card {
    padding: 5px;
    background-color: white;
    padding: 20px;
    margin-bottom: 24px;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    cursor: pointer;
    max-width: 500px;
    display: grid;
    grid-template-rows: 0.5fr 1fr 0.5fr;
}

.account-card:hover {
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
    -webkit-box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.account-card h4 {
    margin: 0px;
}

.account-card-header h4 {
    display: inline;
}

.account-card-header span {
    float: right;
}

.account-card-footer span {
    float: right;
}
</style>
