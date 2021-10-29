<template>
    <bv-alert       
        :class="['usx-alert', `usx-alert-${variant}`, `usx-alert-${size}`]"
        :show="show"
        :dismissible="dismissible"
        :variant="variant"
        :fade="fade"
        :dismissLabel="dismissLabel">
        <div class="usx-alert-icon float-left" v-if="!noIcon">
            <i v-if="variant=='warning'" class="fas fa-exclamation-triangle"></i>
            <i v-else-if="variant=='danger'" class="fas fa-exclamation-circle"></i>
            <i v-else-if="variant=='success'" class="fas fa-check-circle"></i>
            <i v-else class="fas fa-info-circle"></i>
        </div>
        <div class="usx-alert-content" :class="(noIcon) ? '':'usx-alert-content-with-icon'">
            <h2 class="usx-alert-heading" v-if="title">{{title}}</h2>
            <div><slot name="default"></slot></div>
        </div>
    </bv-alert>

</template>

<script>

import Vue from 'vue';
import { BAlert } from 'bootstrap-vue'


export default {
    name: 'b-alert',
    //extends: BAlert,
    props: {
        size: {
            type: String,
            default: 'lg'
        },         
        title: {
            type: String,
            default: null
        },        
        dismissLabel: {
            type: String,
            default: 'Close'
        },
        variant: {
            type: String,
            default: 'info'
        },
        fade: {
            type: Boolean,
            default: false
        },  
        noIcon: {
            type: Boolean,
            default: false
        },                
        show: {
            type: [Boolean, Number, String],
            default: false
        },
        dismissible: {
            type: Boolean,
            default: false
        }
    },    
    components: {
        'bv-alert': BAlert,
    },
    data(){
        return {
        }
    },
    mounted(){

    },
    methods:{
    }
};
</script>
<style lang="scss">

//@import "~bootstrap/scss/bootstrap.scss";

.usx-alert {

    /*
    .usx-alert.usx-alert-lg .usx-alert-heading {
        font-weight: bold;
        font-size: 1.33rem;
        line-height: .9;
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
    */

    &.usx-alert-lg {
        .usx-alert-content {
            padding-top: 10px;
            padding-bottom: 10px;
        }  
        .usx-alert-icon {
            padding-top: 10px;
            font-size: 24px;
            line-height: 100%;
        }
        .usx-alert-heading {
            display: inline-block;
            font-weight: bold;
            font-size: 24px;
            line-height: .9;
            margin-top: 0;
            margin-bottom: 0;
        }
        .usx-alert-content-with-icon {
            padding-left: 32px;
        }
    }

    &.usx-alert-sm {
        .usx-alert-content {
            font-size: 1rem;
            line-height: 1rem;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 1.5rem;
        }        
        .usx-alert-icon {
            padding-top: 0px;
            font-size: 1rem;
            line-height: 1rem;
        }
        .usx-alert-heading {
            display: none;
        }

    }

    // Unset any existing bootstrap styles that we need to
    //&.alert, &.alert-primary, &.alert-secondary, &.alert-success, &.alert-danger, &.alert-warning, &.alert-info, &.alert-light, &.alert-dark {
        //border: unset;
        //border-radius: unset;
        //background-color: unset;
        //border-left-color: unset;
        //border-left-width: unset;
    //}

    border-radius: 0px !important; 
    border-width: 0px !important;
    border-left-width: .5rem  !important;
    border-left-style: solid  !important;
    //border-left-color: red;
    //background-color: rgba($info, .1) !important;

    &.usx-alert-info {
        background-color: #e7f6f8 !important; 
        border-left-color: #00bde3 !important;    
        color: #1b1b1b !important;     
    }

    &.usx-alert-warning {
        background-color: #faf3d1 !important; 
        border-left-color: #ffbe2e !important; 
        color: #1b1b1b !important; 
    }

    &.usx-alert-success {
        background-color: #ecf3ec !important; 
        border-left-color: #00a91c !important; 
        color: #1b1b1b !important; 
    }

    &.usx-alert-error, &.usx-alert-danger {
        background-color: #f4e3db !important; 
        border-left-color: #d54309 !important; 
        color: #1b1b1b !important; 
    }

}

</style>
