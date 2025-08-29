import { RouterView } from 'vue-router';
import SidebarNav from '@ui/SidebarNav.vue';
import ThemeToggle from '@ui/ThemeToggle.vue';
import { routes } from '@/router/routesMeta';
import SpinningPlate from '@/components/SpinningPlate.vue';
import plate1 from '@/assets/image/plate.png';
import plate2 from '@/assets/image/plate2.png';
import plate3 from '@/assets/image/plate3.png';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['layout']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['copyright']} */ ;
/** @type {__VLS_StyleScopedClasses['dark']} */ ;
/** @type {__VLS_StyleScopedClasses['copyright']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "layout" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "sidebar-footer" },
});
/** @type {[typeof ThemeToggle, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ThemeToggle, new ThemeToggle({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "copyright" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
__VLS_asFunctionalElement(__VLS_elements.aside, __VLS_elements.aside)({
    ...{ class: "sidebar" },
});
/** @type {[typeof SidebarNav, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(SidebarNav, new SidebarNav({
    routes: (__VLS_ctx.routes),
}));
const __VLS_5 = __VLS_4({
    routes: (__VLS_ctx.routes),
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
// @ts-ignore
[routes,];
__VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)({
    ...{ class: "content" },
});
const __VLS_8 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, ]} */ ;
// @ts-ignore
RouterView;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {[typeof SpinningPlate, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(SpinningPlate, new SpinningPlate({
    srcs: ([__VLS_ctx.plate1, __VLS_ctx.plate2, __VLS_ctx.plate3]),
    size: "min(28vmin, 300px)",
    offset: "calc(min(26vmin, 300px) + 20px)",
    gain: (0.09),
    friction: (0.935),
}));
const __VLS_14 = __VLS_13({
    srcs: ([__VLS_ctx.plate1, __VLS_ctx.plate2, __VLS_ctx.plate3]),
    size: "min(28vmin, 300px)",
    offset: "calc(min(26vmin, 300px) + 20px)",
    gain: (0.09),
    friction: (0.935),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
// @ts-ignore
[plate1, plate2, plate3,];
/** @type {__VLS_StyleScopedClasses['layout']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['copyright']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        RouterView: RouterView,
        SidebarNav: SidebarNav,
        ThemeToggle: ThemeToggle,
        routes: routes,
        SpinningPlate: SpinningPlate,
        plate1: plate1,
        plate2: plate2,
        plate3: plate3,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
