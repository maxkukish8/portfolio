import { ref, onBeforeUpdate, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import reaperSrc from '@/assets/image/icons/men-icon-white.png';
const props = defineProps();
const route = useRoute();
const navEl = ref(null);
const itemEls = ref([]);
const labelEls = ref([]);
onBeforeUpdate(() => {
    itemEls.value = [];
    labelEls.value = [];
});
const setItemRef = (el, _refs) => {
    if (el instanceof HTMLElement)
        itemEls.value.push(el);
};
const setLabelRef = (el, _refs) => {
    if (el instanceof HTMLElement)
        labelEls.value.push(el);
};
const activeIndex = ref(-1); // у кого текст приховано (фінальний стан)
const fadingIndex = ref(null); // хто зараз плавно зникає
const marker = ref({
    x: 0, y: 0,
    size: '40px',
    visible: false,
    phase: 'idle'
});
const findIndexByPath = (path) => props.routes.findIndex(r => r.to === path);
const animateTo = async (index, withEffects = true) => {
    if (!navEl.value || !itemEls.value[index] || !labelEls.value[index])
        return;
    const containerRect = navEl.value.getBoundingClientRect();
    const labelRect = labelEls.value[index].getBoundingClientRect();
    const iconW = parseFloat(marker.value.size);
    const iconH = iconW;
    const gap = 10;
    const rightX = Math.min(Math.round(labelRect.right - containerRect.left + gap), Math.round(containerRect.width - iconW));
    const centerY = Math.round(labelRect.top - containerRect.top + (labelRect.height - iconH) / 2);
    const startX = Math.round(labelRect.left - containerRect.left);
    // reset
    marker.value.visible = true;
    fadingIndex.value = null;
    if (!withEffects) {
        marker.value.x = startX;
        marker.value.y = centerY;
        marker.value.phase = 'over';
        activeIndex.value = index;
        return;
    }
    marker.value.x = rightX;
    marker.value.y = centerY;
    marker.value.phase = 'appear';
    await nextTick();
    setTimeout(() => {
        fadingIndex.value = index;
        marker.value.x = startX;
        marker.value.phase = 'over';
    }, 360);
    setTimeout(() => {
        activeIndex.value = index;
        fadingIndex.value = null;
    }, 200);
};
const onItemClick = (i) => {
    animateTo(i, true);
};
watch(() => route.path, async (p, old) => {
    await nextTick();
    const i = findIndexByPath(p);
    animateTo(i, old ? true : false);
}, { immediate: true });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['marker']} */ ;
/** @type {__VLS_StyleScopedClasses['marker']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({
    ...{ class: "nav" },
    ref: "navEl",
});
/** @type {typeof __VLS_ctx.navEl} */ ;
// @ts-ignore
[navEl,];
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "title" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "subtitle" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "marker" },
    ...{ class: (__VLS_ctx.marker.phase) },
    ...{ style: ({
            transform: `translate(${__VLS_ctx.marker.x}px, ${__VLS_ctx.marker.y}px)`,
            '--marker-size': __VLS_ctx.marker.size
        }) },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.marker.visible) }, null, null);
// @ts-ignore
[marker, marker, marker, marker, marker, vShow,];
__VLS_asFunctionalElement(__VLS_elements.img)({
    ...{ class: "marker__img" },
    src: (__VLS_ctx.reaperSrc),
    alt: "",
    'aria-hidden': "true",
});
// @ts-ignore
[reaperSrc,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "menu" },
});
for (const [item, i] of __VLS_getVForSourceType((__VLS_ctx.routes))) {
    // @ts-ignore
    [routes,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (item.to),
        ...{ class: "menu-item" },
        ref: (__VLS_ctx.setItemRef),
    });
    // @ts-ignore
    [setItemRef,];
    const __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ 'onClick': {} },
        to: (item.to),
        ...{ class: "link" },
        activeClass: "active",
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onClick': {} },
        to: (item.to),
        ...{ class: "link" },
        activeClass: "active",
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_4;
    let __VLS_5;
    const __VLS_6 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.onItemClick(i);
                // @ts-ignore
                [onItemClick,];
            } });
    const { default: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "label" },
        ...{ class: ({
                'is-fading': i === __VLS_ctx.fadingIndex,
                'is-active': i === __VLS_ctx.activeIndex
            }) },
        ref: (__VLS_ctx.setLabelRef),
    });
    // @ts-ignore
    [fadingIndex, activeIndex, setLabelRef,];
    (item.label);
    var __VLS_3;
}
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['marker']} */ ;
/** @type {__VLS_StyleScopedClasses['marker__img']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-item']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['is-fading']} */ ;
/** @type {__VLS_StyleScopedClasses['is-active']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        reaperSrc: reaperSrc,
        navEl: navEl,
        setItemRef: setItemRef,
        setLabelRef: setLabelRef,
        activeIndex: activeIndex,
        fadingIndex: fadingIndex,
        marker: marker,
        onItemClick: onItemClick,
    }),
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
