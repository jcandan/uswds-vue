<template>

    <nav class="usx-component usx-side-nav nav flex-column" v-if="menu">

        <li class="nav-item" v-for="item in menu" :key="item._id">

            <div class="nav-item-wrapper">
                <us-nav-item 
                    :item="item" 
                    @click="onSelectParent(item)" 
                    class="pt-1 pb-1"
                    :class="{'active': item._id == selectedParent._id}"
                    :aria-current="(item._id == item._id) ? 'page' : false"
                />
            </div>

            <ul class="nav flex-column" v-if="item.children">
                
                <li class="nav-item" v-for="childItem in item.children" :key="childItem._id">
                    <us-nav-item 
                        :item="childItem" 
                        @click="onSelectChild(item, childItem)" 
                        class="usx-nav-item-child"
                        :class="{'active-child': childItem._id == selectedChild._id}"
                        :aria-current="(childItem._id == selectedChild._id) ? 'page' : false"
                    />

                    <ul class="nav flex-column" v-if="childItem.children">
                        <li class="nav-item" v-for="grandChildItem in childItem.children" :key="grandChildItem._id">
                            <us-nav-item 
                                :item="grandChildItem" 
                                @click="onSelectChild(item, grandChildItem)" 
                                class="usx-nav-item-grandchild"
                                :class="{'active-child': grandChildItem._id == selectedChild._id}"
                                :aria-current="(grandChildItem._id == selectedChild._id) ? 'page' : false"
                            />
                        </li>  
                    </ul>

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
/*
.usx-component.nav {

    &.flex-column {

        a.nav-link:hover {
            text-decoration: none !important;
        }
            
        :focus {
            outline: none;
            outline-offset: 0;;
        }

        a.active {
            background-color: unset;
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
            //border-top: 1px solid #e6e6e6;            
            //border-top: 1px solid red;      

            .nav-link {
                color: #5c5c5c;
                font-weight: normal;
                &:hover {
                    background-color: #eee;                
                }
            }

            &.active {
                .nav-link {
                    border-left: 3px solid #004c97; 
                }

             
            }
        }

        .usx-nav-item-child {
            padding-left: 2rem;
        }
        
    }
}
    */


.usx-side-nav {

    .nav-item-wrapper {
        padding-top: 4px;
        padding-bottom: 4px;
        &:hover {
            background-color: #eee;                
        }        
    }

    .nav-item {
        border: none;
        border-top: 1px solid #e6e6e6;
        margin-bottom: 0;
    }

    .usx-nav-item-child {
        padding-left: 2rem;
    }

    .usx-nav-item-grandchild {
        padding-left: 4rem;
    }

    /*
    .nav-item  {
        &.active a:first-child, &.router-link-active a:first-child {
            color: #005ea2;
            font-weight: 700;      
            background-color: #eee;
            //border-left: 3px solid #004c97;        

           
        }
    }
    */

    .nav-link {

        cursor: pointer;

        color: #5c5c5c;
        font-weight: normal;

        &.active-child {
            color: #005ea2;
            font-weight: 700;
        }

        &.active, &.router-link-active {
            color: #005ea2;
            font-weight: 700;      
            //background-color: #eee;
            border-left: 3px solid #004c97;    
        }       

        &:hover {
            background-color: #eee;                
            border-bottom: none !important;
            margin-bottom: 0px !important; 
        }
    }


}    

</style>