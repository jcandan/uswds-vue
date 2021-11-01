# Side Navigation



<div class="mt-3 mb-3 usx-component">
    <us-side-nav class="w-50">
        <b-nav-item active>Page 1</b-nav-item>
        <b-nav-item @click="select('page-2')">Page 2</b-nav-item>
        <b-nav-item>Page 3</b-nav-item>
        <b-nav-item disabled>Page 4 (disabled)</b-nav-item>
        <b-nav-item :title="Page with children">            
            <b-nav-item>Child Link 1</b-nav-item>            
            <b-nav-item>Child Link 2</b-nav-item>            
            <b-nav-item>Child Link 3</b-nav-item>            
            <b-nav-item>Child Link 4</b-nav-item>            
            <b-nav-item>
                <b-nav-item>
                    Child page with children
                    <b-nav-item>Another Link</b-nav-item>            
                    <b-nav-item>Another Link</b-nav-item>            
                    <b-nav-item>Another Link</b-nav-item>            
                    <b-nav-item>Another Link</b-nav-item>            
                    <b-nav-item>Another Link</b-nav-item>            
                </b-nav-item>
            </b-nav-item>            
        </b-nav-item>
    </us-side-nav>
</div>




```
<div class="mt-3 mb-3">
    <b-nav vertical class="w-50">
        <b-nav-item 
            :class="{'active':selected.name == page.name}" 
            @click="selected = page" 
            :disabled="page.disabled"
            v-for="page in menu" :key="page.name">
            {{page.name}}
            <b-nav-item 
                :class="{'active':selected.name == kid.name}" 
                v-if="page.children"
                @click="selected = kid" 
                v-for="kid in page.children" :key="kid.name">
                {{kid.name}}
                <b-nav-item 
                    :class="{'active':selected.name == grandkid.name}" 
                    v-if="kid.children"
                    @click="selected = kid" 
                    v-for="grandkid in kid.children" :key="grandkid.name">
                    {{grandkid.name}}
                </b-nav-item>                
            </b-nav-item>
        </b-nav-item>
    </b-nav>
    {{selected}}
</div>
```

<div class="mt-3 mb-3">
    <us-side-nav class="w-50">
        <us-side-nav-item 
            :class="{'active':selected.name == page.name}" 
            @click="selected = page" 
            :disabled="page.disabled"
            v-for="page in menu" :key="page.name">
            {{page.name}}
            <us-side-nav-item 
                :class="{'active':selected.name == kid.name}" 
                v-if="page.children"
                @click="selected = kid" 
                v-for="kid in page.children" :key="kid.name">
                {{kid.name}}
                <us-side-nav-item 
                    :class="{'active':selected.name == grandkid.name}" 
                    v-if="kid.children"
                    @click="selected = kid" 
                    v-for="grandkid in kid.children" :key="grandkid.name">
                    {{grandkid.name}}
                </us-side-nav-item>                
            </us-side-nav-item>
        </us-side-nav-item>
    </us-side-nav>
    {{selected}}
</div>



This library doesn't provide an actual component for side-nav, instead provides style over-rideds so you can use the bootstrap side-nav as-is.

```vue
<b-nav vertical>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
</b-nav>    
```

<script>
import Color from "color";
import _ from 'lodash';

export default {
    data() {
        return {
            selected: {},
            menu: [
                {name: 'Page 1'},
                {name: 'Page 2'},
                {name: 'Page 3'},
                {name: 'Page 4 (disabled)', disabled:true},
                {name: 'Page 5 (with kids)', children: [
                    {name: 'Kid 1'},
                    {name: 'Kid 2'},
                    {name: 'Kid 3'},
                    {name: 'Kid 4 (with kids)', children: [
                        {name: 'Grand Kid 1'},
                        {name: 'Grand Kid 2'},
                        {name: 'Grand Kid 3'},
                        {name: 'Grand Kid 4'},
                    ]}
                ]}
            ]
        };
    },
    methods: {

        select(colorMeta){

        },


    }
}
</script>