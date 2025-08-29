import { onMounted, ref } from 'vue';
import { ProjectsService } from '../api/ProjectsService';
const projects = ref([]);
onMounted(async () => { projects.value = await ProjectsService.list(); });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['list']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['list']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "list" },
});
for (const [p] of __VLS_getVForSourceType((__VLS_ctx.projects))) {
    // @ts-ignore
    [projects,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (p.id),
        ...{ class: "item" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "wrapper" },
    });
    __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
        href: (p.url),
        target: "_blank",
        rel: "noopener",
        ...{ class: "title-link" },
    });
    if (p.icon) {
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "kyiv-icon" },
            'aria-hidden': "true",
        });
        (p.icon);
    }
    (p.title);
    if (p.giturl) {
        __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
            ...{ class: "gh-link" },
            href: (p.giturl),
            target: "_blank",
            rel: "noopener",
            'aria-label': (`GitHub: ${p.title}`),
            title: "Open on GitHub",
        });
        __VLS_asFunctionalElement(__VLS_elements.img)({
            ...{ class: "gh-icon gh-icon--light" },
            src: "@/assets/image/icons/github-icon-white.svg",
            alt: "",
            'aria-hidden': "true",
        });
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "sr-only" },
        });
    }
    if (p.tags?.length) {
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
        (p.tags.join(', '));
    }
}
/** @type {__VLS_StyleScopedClasses['list']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['title-link']} */ ;
/** @type {__VLS_StyleScopedClasses['kyiv-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['gh-link']} */ ;
/** @type {__VLS_StyleScopedClasses['gh-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['gh-icon--light']} */ ;
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        projects: projects,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
