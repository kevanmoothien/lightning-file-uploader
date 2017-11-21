({
	handleUploadFinished: function (cmp, event) {
        // Get the list of uploaded files
        var uploadedFiles = event.getParam("files");
        console.log("Files uploaded : " + uploadedFiles.length);
    }
})
