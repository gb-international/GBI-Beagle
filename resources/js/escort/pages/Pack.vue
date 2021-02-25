<template>
    <layout-table>
        <template #back>
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </template>
        <template #title>
            Quantity of items
        </template>
        <template #table-head>
            <th class="border-0">Food Item</th>
            <th class="border-0">Qty</th>
        </template>
        <template #table-body v-if="foods.length > 0">
            <tr v-for="food in foods" :key="food.id">
                <td>{{ food.name }}</td>
                <td>{{ food.quantity }}</td>
            </tr>
        </template>

        
        <template #table-body v-else>
            <tr class="text-center">
                No Snack available
            </tr>
        </template>


        <template #footer>

        </template>
    </layout-table>
</template>
<script>
import LayoutTable from '@/escort/components/LayoutTable'
import { mapState } from 'vuex'
export default {
    components:{
        LayoutTable
    },
    created(){
        this.$store.dispatch('getFoods');
    },
    computed:{
        ...mapState(['foods'])
    }
}
</script>