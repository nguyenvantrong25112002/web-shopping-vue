<template>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script >
import { useDialogProductDetail } from "@/stores/product/dialog-product-detail"


export default {

    setup(props) {
        const storeDialogProductDetail = useDialogProductDetail()

        // var dialog = computed(() => storeDialogProductDetail.dialog)

        return {
            storeDialogProductDetail,
        }

    }
    // data() {
    //     return {
    //         dialog: false,
    //     }
    // },
}
</script>