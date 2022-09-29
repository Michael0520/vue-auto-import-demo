<script setup>
const props = defineProps({
    // name 對應 svg-file
    name: {
        type: String,
        required: true,
    },
    // 可以新增一些 className 去定義
    className: {
        type: String,
    },
    // 重新賦予顏色，記得先將 svg 的 fill 屬性移除
    color: {
        type: String,
        default: "#333",
    },
});
const svgName = computed(() => {
    if (props.name.includes("/")) {
        return `#${props.name}`;
    } else {
        return `#/${props.name}`;
    }
});
const svgClass = computed(() =>
    props.className ? "svg-icon " + props.className : "svg-icon"
);
</script>
    
    
<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="svgName" :fill="color" />
    </svg>
</template>
  
<style>
.svg-icon {
    width: 100%;
    height: 100%;
    max-width: 100px;
    max-height: 100px;
    fill: currentColor;
    overflow: hidden;
}
</style>
  
  