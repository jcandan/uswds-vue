<template>

    <nav class="usx-component nav flex-column" v-if="menu">

        <li class="nav-item py-3" v-for="item in menu" :key="item._id">

            <us-nav-item 
                :item="item" 
                @click="onSelectParent(item)" 
                class="p-0 m-0"
                :class="{'active': item._id == selectedParent._id}"
                :aria-current="(item._id == item._id) ? 'page' : false"
            />

            <ul class="nav flex-column" v-if="item.children">
                <li class="nav-item" v-for="childItem in item.children" :key="childItem._id">
                    <us-nav-item 
                        :item="childItem" 
                        @click="onSelectChild(item, childItem)" 
                        class="usx-nav-item-child"
                        :class="{'active-child': childItem._id == selectedChild._id}"
                        :aria-current="(childItem._id == selectedChild._id) ? 'page' : false"
                    />
                </li>   
            </ul>

        </li>        

    </nav>


     <!--
    <ul v-if="!title" ref="sidenavParentRef" class="usx-component usx-sidenav usa-sidenav">
        Slots for side nav item 
        <slot></slot>
    </ul>        

     Slots for side nav item 
    <us-side-nav-item v-else :title="title" @click="onClick()">
        <slot></slot>
    </us-side-nav-item>      
        -->
</template>

<script>

import UsNavItem from "./UsNavLink.vue";

// https://designsystem.digital.gov/components/side-navigation/
export default {
    name: 'us-side-nav',
    components: {
        UsNavItem
    },
    props: {
        links: {
            type: Array,
            default(){
                return [
                    {name: 'Page 1', children: [
                        {name: 'Page 1.1', icon: 'fal fa-play', to: {name:'create'}},
                        {name: 'Page 1.2', icon: 'fal fa-cogs', to: {name:'settings'}},
                        {name: 'Page 1.3', icon: 'fal fa-chevron-circle-right', to: {name:'deploy'}},
                    ]},
                    {name: 'Page 2', icon: 'fal fa-play', to: {name:'create'}},                    
                ]
            }
        },
        title: {
            type: String,
            default: null
        }          
    },
    data() {
        return {
            menu: null,
            selectedParent: {},
            selectedChild: {}
        }
    },  
    mounted(){
        let ct = 0;
        let newMenu = this.links;

        // Add unique id's into menu to make life easier
        const addIds = (items) => {
            for (let i=0; i<items.length; i+=1){
                items[i]._id = ct;
                ct += 1;
                if (items[i].children){
                    addIds(items[i].children)
                }
            }
        }

        addIds(newMenu);
        this.menu = newMenu;

    },  
    methods: {
        
        onSelectParent(parent){
            this.selectedParent = parent;
            this.$emit('click');
        },

        onSelectChild(parent, child){
            this.selectedParent = parent;
            this.selectedChild = child;
            this.$emit('click');
        }
    }
};
</script>
<style lang="scss">
// Side nav
.usx-component.nav {

    &.flex-column {

        a.active {
            background-color: unset;
        }

        .nav-link {
            color: #5c5c5c;
            font-weight: normal;
            &:hover {
                background-color: #eee;                
            }
        }


        .active {
            color: #005ea2;
            font-weight: 700;
        }

        .active-child {
            color: #005ea2;
            font-weight: 700;
        }

        .nav-item {
            border-top: 1px solid #e6e6e6;            
            &.active {
                border-left: 3px solid #004c97;    
            }
        }

        .usx-nav-item-child {
            padding-left: 2rem;
        }
        
    }
}
</style>