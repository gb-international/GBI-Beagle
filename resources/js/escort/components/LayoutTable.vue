<template>
    <div class="container p-4">
        <div class="back">
            <slot name="back"></slot>
        </div>
        <h5 class="text-muted">
            <slot name="title"></slot>
        </h5>
        <div class="escort-body pt-4 pb-4 whitesomke word-break">
            <table class="table table-hover table-bottom-border">

                <thead class="text-muted">
                    <slot name="table-head"></slot>
                </thead>

                <tbody>
                    <slot name="table-body"></slot>
                </tbody>
                
            </table>
            <div>
                <slot name="footer"> </slot>
            </div>
        </div>
    </div>
</template>