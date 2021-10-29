# Side Navigation

<div class="mt-3 mb-3 usx-component">
    <b-nav vertical class="w-25">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
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
            link: null
        };
    },
    methods: {

        select(colorMeta){

        },


    }
}
</script>