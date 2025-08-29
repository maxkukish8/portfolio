import { ref, onMounted } from 'vue';
const isDark = ref(false);
const apply = () => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark.value);
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};
const setTheme = (theme) => {
    isDark.value = theme === 'dark';
    apply();
};
onMounted(() => {
    const saved = localStorage.getItem('theme'); // 'light' | 'dark' | null
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    isDark.value = saved ? saved === 'dark' : prefersDark;
    apply();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "theme-toggle" },
    role: "group",
    'aria-label': "Theme",
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.setTheme('light');
            // @ts-ignore
            [setTheme,];
        } },
    type: "button",
    ...{ class: "btn" },
    ...{ class: ({ active: !__VLS_ctx.isDark }) },
    'aria-pressed': (!__VLS_ctx.isDark),
});
// @ts-ignore
[isDark, isDark,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.setTheme('dark');
            // @ts-ignore
            [setTheme,];
        } },
    type: "button",
    ...{ class: "btn" },
    ...{ class: ({ active: __VLS_ctx.isDark }) },
    'aria-pressed': (__VLS_ctx.isDark),
});
// @ts-ignore
[isDark, isDark,];
/** @type {__VLS_StyleScopedClasses['theme-toggle']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        isDark: isDark,
        setTheme: setTheme,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
