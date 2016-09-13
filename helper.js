
function genTorrent(form){
                        var file = form.fileURL.value;
                        // Validate name and turn into string
                        var name = (form.fileName.value == "none" ) ? null : form.fileName.value;
                        //blob.name = (name != null) ? blob.name() : name;
                        // Validate creator and turn into string
                        var creator = (form.createdBy.value == "none") ? null : form.createdBy.value;
                        // Validate comment and turn into string
                        var comment = (form.comment.value == "none") ? null : form.comment.value;
                        // Validate time and turn into string
                        var metadate = (form.creationDate.value == "none") ? null : form.creationDate.value;
                        // Determine if the user wants the torrent to be private and turn into bool
                        var privacy = (form.privateTorrent.value == "true") ? true : false;
                        // Set an arbitrary piece length
                        var piecelen = (form.pieceLength.value == "none") ? null: form.pieceLength.value;
                        // Turn supplemental announcers into array of strings, comma-separated
                        var announcers = (form.announceList.value == "none") ? null : form.announceList.value.split(",");
                        // Turn supplemental webseeds into array of strings, comma-separated
                        var webseeds = (form.urlList.value == "none") ? null : form.urlList.value.split(",");
                        // alert( file, "; " , name, "; " , creator, "; " , comment, "; " , metadate, "; " , privacy, "; " , piecelen, "; " , announcers, "; " , webseeds );
                        createTorrent(file, function (err, torrent) {
                                if ( !err ) {
                                        alert( "SUCCESS", "; ", file, "; " , name, "; " , creator, "; " , comment, "; " , metadate, "; " , privacy, "; " , piecelen, "; " , announcers, "; " , webseeds );
                                }else{
                                        alert( "ERROR", "; ", file, "; " , name, "; " , creator, "; " , comment, "; " , metadate, "; " , privacy, "; " , piecelen, "; " , announcers, "; " , webseeds );
                                }
                        })
                }
