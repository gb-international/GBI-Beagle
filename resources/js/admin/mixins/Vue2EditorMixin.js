import { VueEditor, Quill } from "vue2-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
const Vue2EditorMixin = {
    components:{
        "vue-editor": VueEditor,
    },
    data(){
        return{
            customModulesForEditor: [
                { alias: "imageDrop", module: ImageDrop },
                { alias: "imageResize", module: ImageResize },
            ],
            editorSettings: {
                modules: {
                    imageDrop: true,
                    imageResize: {},
                    toolbar: [
                        //[{ header: [false, 1, 2, 3, 4, 5, 6] }],
                        ["bold", "italic", "underline", "strike"], // toggled buttons
                        [
                          { align: "" },
                          { align: "center" },
                          { align: "right" },
                          { align: "justify" }
                        ],
                        ["blockquote", "code-block"],
                        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                        ["link", "image", "video"],
                        ["clean"] // remove formatting button
                      ],
                },
            },
        }
    },
    methods:{
        handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
            var formData = new FormData();
            formData.append("image", file);
            axios({
                url: "/api/images",
                method: "POST",
                data: formData,
            })
                .then((result) => {
                    let url = result.data.url; // Get url from response
                    Editor.insertEmbed(cursorLocation, "image", url);
                    resetUploader();
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        handleImageRemoved: function (file, Editor, cursorLocation, resetUploader) {
            var formData = new FormData();
            formData.append("image", file);
            axios({
                url: "/api/images/delete",
                method: "POST",
                data: formData,
            })
                .then((result) => {
                    let url = result.data.url; // Get url from response
                    Editor.insertEmbed(cursorLocation, "image", url);
                    resetUploader();
                })
                .catch((err) => {
                    console.log(err);
                });
        },

    }
    
}

export default Vue2EditorMixin;