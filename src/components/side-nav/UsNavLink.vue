<template>

    <router-link 
        v-if="item.to"
        :to="item.to"
        class="nav-link" 
        @click="onClick(item)">
        {{item.name}} {{item._id}}
    </router-link>
    
    <a v-else 
        class="nav-link" 
        :href="item.href"
        @click="onClick(item)">
        {{item.name}} {{item._id}}
    </a>

</template>

<script>

// https://designsystem.digital.gov/components/side-navigation/
export default {
    name: 'us-nav-link',
    props: {
        item: {
            type: Object,
            default(){
                return {};
            }
        }          
    }, 
    methods: {
        onClick(item){
            this.$emit('click', item);
        }
    }
};
</script>