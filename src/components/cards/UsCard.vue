<template>
    <div class="usx-component card" :class="[`bg-${variant}`, `text-${variant}-contrast`]">
        <!--<img src="..." class="card-img-top" alt="...">-->
        <img v-if="imgSrc" :src="imgSrc" :alt="imgAlt"/>
        <div class="card-body">
            <h5 class="card-title" v-if="title && !hasHeader">{{title}}</h5>
            <slot name="default"/>
            <!--
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            -->
        </div>
    </div>
<!--
    <div class="usx-component usa-card usx-card" :class="{
            'usa-card--flag':imgSrc && imgPos=='left', 
            'usa-card--flag usa-card--media-right': imgSrc && imgPos=='right',
            'usa-card--header-first': imgSrc && imgPos == 'top-body'
        }">
        <div :class="['usa-card__container', `bg-${variant}`, `border-${variant}`]">

            <header class="usx-component usa-card__header" v-if="title && !hasHeader">
                <h2 class="usa-card__heading">
                    {{ title }}
                </h2>
            </header>
            
            <div v-if="imgSrc" class="usa-card__media" :class="{'usa-card__media--inset': imgInset, 'usa-card__media--exdent': cardExdent}">
                <div class="usa-card__img">
                    <img :src="imgSrc" :alt="imgAlt"/>
                </div>
            </div>
   
            <slot name="default" v-if="hasFooter || hasBody || hasHeader"/>
            <div class="usa-card__body" :class="{'usa-card__body--exdent': cardExdent, 'usx-card-overflow':overflow}" v-else>
                <slot name="default"/>
            </div>

        </div>
    </div>

    -->
</template>

<script>
/**
 * USWDS card component
 * Supports a default slot for the body content, and a 'header' and 'footer' slot
 * @props
 */

import CoreMixin from '../../mixins/CoreMixin';

export default {
    name: 'us-card',
    mixins: [CoreMixin],
    props: {
        title: {
            type: String,
            default: null
        },
        variant: {
            type: String,
            default: 'none'
        },
        imgSrc: {
            type: String,
            default: null
        },
        imgAlt: {
            type: String,
            default: null
        },
        imgPos: {
            type: String,
            default: 'top'
        },
        imgInset: {
            type: Boolean,
            default: false
        },     
        overflow: {
            type: Boolean,
            default: false
        },
        cardExdent: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            hasHeader: null,
            hasFooter: null,
            hasBody: null,
        }
    },
    mounted(){
        this.hasHeader = this.hasChild('us-card-header');
        this.hasFooter = this.hasChild('us-card-footer');
        this.hasBody = this.hasChild('us-card-body');
        //this.init();
       //this.kids.defaultSlot = this.hasSlot('body');
    },
    methods: {
        init(){
            /*            
            if (this.$slots.default){
                this.$slots.default.map((child)=>{
                    console.log(Object.keys(child))
                    console.log(child)
                });
            }
            */
        }
    }
};
</script>
<style lang="scss">
// Fix style bug in uswds for right images
@media (min-width: 40em) {
    //.usa-card--flag .usa-card__media {
        //width: unset !important;
    //}
    .usx-card-overflow {
        overflow: auto;
        max-height: 400px;
    }
}

</style>
