<script setup lang="ts">
    const props = defineProps({
        names: {
            type: Array,
            required: true
        },
        selectedTab: {
            type: String,
            required: false
        }
    })

    const emit = defineEmits(['changeTab'])

    const clickOnTab = (tabName) => {
        emit('changeTab', tabName)
    }
</script>

<template>
    <div>
        <ul class="flex items-center gap-6 mb-5">
            <li v-for="tab in names"
            :key="tab.name"
            @click="clickOnTab(tab.name)"
            class="font-[500] text-[14px] text-[#55637F] leading-[22.4px] cursor-pointer"
            :class="{'selected': tab.name === selectedTab}">
                {{ tab.label }}
            </li>
        </ul>
    </div>
    <div>
        <slot/>
    </div>
</template>
