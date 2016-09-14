
function genTorrent(form){
                        var blob = null;
                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", form.fileURL.value);
                        xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
                        xhr.onload = function() {
                                var file = form.fileURL.value;
                                blob = xhr.response;//xhr.response is now a blob object
                                blob.name=file;
                                // Validate name and turn into string
                                var name = (form.fileName.value == "none" ) ? null : form.fileName.value;
                                blob.name = (name != null) ? blob.name : name;
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
                                options = null
                                createTorrent(blob, options, function (err, torrent) {
                                        if ( !err ) {
                                                alert( "SUCCESS", "; ", file, "; " , name, "; " , creator, "; " , comment, "; " , metadate, "; " , privacy, "; " , piecelen, "; " , announcers, "; " , webseeds );
                                        }else{
                                                alert( "ERROR", "; ", file, "; " , name, "; " , creator, "; " , comment, "; " , metadate, "; " , privacy, "; " , piecelen, "; " , announcers, "; " , webseeds );
                                        }
                                })
                        }
                        xhr.send();
                        // alert( file, "; " , name, "; " , creator, "; " , comment, "; " , metadate, "; " , privacy, "; " , piecelen, "; " , announcers, "; " , webseeds );
                }
