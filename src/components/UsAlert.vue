<template>
    <div class="usx-component alert d-flex" :class="['alert-'+variant]" role="alert">
        <!--
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        -->
        <div class='usx-alert-icon' :class="(title) ? 'usx-alert-icon-with-title' : 'usx-alert-icon-no-title'" v-if="!noIcon">
            <i v-if="variant=='warning'" class="fas fa-exclamation-triangle"></i>
            <i v-else-if="variant=='danger'" class="fas fa-exclamation-circle"></i>
            <i v-else-if="variant=='success'" class="fas fa-check-circle"></i>
            <i v-else class="fas fa-info-circle"></i>
        </div>
        <div>
            <h2 class="p-0 m-0" v-if="title">{{title}}</h2>
            <slot />
        </div>
        <button type="button" class="btn btn-link ms-auto p-0 m-0" data-bs-dismiss="alert" aria-label="Close">
            <i class="fas fa-times align-top"></i>
        </button>
        <!--
        <div class="usx-alert-content" :class="(noIcon) ? '':'usx-alert-content-with-icon'">
            <h2 class="usx-alert-heading" v-if="title">{{title}}</h2>
            <div><slot name="default"></slot></div>
        </div>
        -->
    </div>
<!--
    <div :class="['usx-component', 'alert', 'alert-'+variant]" v-bind="$props">
    </div>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
    An example alert with an icon
  </div>
</div>

-->
</template>

<script>


export default {
    name: 'us-alert',
    props: {
        size: {
            type: String,
            default: 'lg'
        },         
        title: {
            type: String,
            default: null
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
    }
};
</script>
<style lang="scss">

//@import "~bootstrap/scss/bootstrap.scss";

.usx-component.alert {

    .usx-alert-icon {
        font-size: 24px;
        line-height: 1rem;
        padding-right: 7px;
    }
    
    .usx-alert-icon-no-title {
        padding-top: 0px;
    }

    .usx-alert-icon-with-title {
        padding-top: 5px;
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

    &.alert-info {
        background-color: #e7f6f8 !important; 
        border-left-color: #00bde3 !important;    
        color: #1b1b1b !important;     
    }

    &.alert-warning {
        background-color: #faf3d1 !important; 
        border-left-color: #ffbe2e !important; 
        color: #1b1b1b !important; 
    }

    &.alert-success {
        background-color: #ecf3ec !important; 
        border-left-color: #00a91c !important; 
        color: #1b1b1b !important; 
    }

    &.alert-error, &.alert-danger {
        background-color: #f4e3db !important; 
        border-left-color: #d54309 !important; 
        color: #1b1b1b !important; 
    }

}



</style>
