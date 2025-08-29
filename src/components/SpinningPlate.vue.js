import { ref, onMounted, onBeforeUnmount, onBeforeUpdate, computed } from 'vue';
const props = withDefaults(defineProps(), {
    size: 'min(52vmin, 520px)',
    offset: 'calc(min(52vmin, 520px) + 24px)',
    friction: 0.93,
    gain: 0.08,
    maxVel: 8,
});
const dirs = [1, -1, 1];
const mid = computed(() => Math.floor(props.srcs.length / 2));
const offsets = computed(() => props.srcs.map((_, i) => `calc( (${i - mid.value}) * (${props.offset}) )`));
const plateEls = ref([]);
onBeforeUpdate(() => { plateEls.value = []; });
const setPlate = (el) => {
    if (el instanceof HTMLImageElement)
        plateEls.value.push(el);
};
let angles = props.srcs.map(() => 0);
let vel = 0;
let rafId = 0;
const step = () => {
    for (let i = 0; i < plateEls.value.length; i++) {
        angles[i] += vel * (dirs[i] ?? 1);
        const el = plateEls.value[i];
        if (el) {
            el.style.transform =
                `translate(-50%, -50%) translateY(${offsets.value[i]}) rotate(${angles[i]}deg)`;
        }
    }
    vel *= props.friction;
    if (Math.abs(vel) < 0.001)
        vel = 0;
    rafId = requestAnimationFrame(step);
};
const onWheel = (e) => {
    let dy = e.deltaY;
    if (e.deltaMode === 1)
        dy *= 16;
    else if (e.deltaMode === 2)
        dy *= window.innerHeight;
    const add = Math.max(-props.maxVel, Math.min(props.maxVel, dy * props.gain));
    vel += add; // вниз → позитивна швидкість
};
onMounted(() => {
    rafId = requestAnimationFrame(step);
    window.addEventListener('wheel', onWheel, { passive: true });
});
onBeforeUnmount(() => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('wheel', onWheel);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    size: 'min(52vmin, 520px)',
    offset: 'calc(min(52vmin, 520px) + 24px)',
    friction: 0.93,
    gain: 0.08,
    maxVel: 8,
});
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['plates-layer']} */ ;
/** @type {__VLS_StyleScopedClasses['plate']} */ ;
/** @type {__VLS_StyleScopedClasses['plates-layer']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "plates-layer" },
    'aria-hidden': "true",
});
for (const [s, i] of __VLS_getVForSourceType((__VLS_ctx.srcs))) {
    // @ts-ignore
    [srcs,];
    __VLS_asFunctionalElement(__VLS_elements.img)({
        key: (i),
        ref: (__VLS_ctx.setPlate),
        ...{ class: "plate" },
        src: (s),
        alt: "",
        ...{ style: ({ '--size': __VLS_ctx.size, '--offset': __VLS_ctx.offsets[i] }) },
    });
    // @ts-ignore
    [setPlate, size, offsets,];
}
/** @type {__VLS_StyleScopedClasses['plates-layer']} */ ;
/** @type {__VLS_StyleScopedClasses['plate']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        offsets: offsets,
        setPlate: setPlate,
    }),
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
