<template>
    <div class="container p-4">

        <div class="back">
            <slot name="back">Back</slot>
            <h5 class="text-muted">
                <slot name="title_heading"></slot>
            </h5>
        </div>

        <h3 class="text-heading text-uppercase text-center  word-break">
            <slot name="title"></slot>
        </h3>
        
        <div class="">
            <slot name="body"></slot>
        </div>
        
        <div class="footer-layout">
            <slot name="footer"></slot>
        </div>
        
    </div>
</template>