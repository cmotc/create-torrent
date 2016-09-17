
function genTorrent(form){
                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", form.fileURL.value);
                        xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
                        xhr.onload = function() {
                                var blob = new File([""], "filename");;
                                var file = form.fileURL.value;
                                blob = xhr.response;//xhr.response is now a blob object
                                blob.name=file;
                                // Validate name and turn into string
                                var b_name = (form.fileName.value == "none" ) ? null : form.fileName.value;
                                blob.name = (name != null) ? blob.name : name;
                                var b_creator = (form.createdBy.value == "none") ? null : form.createdBy.value;
                                // Validate comment and turn into string
                                var b_comment = (form.comment.value == "none") ? null : form.comment.value;
                                // Validate time and turn into string
                                var b_metadate = (form.creationDate.value == "none") ? null : form.creationDate.value;
                                // Determine if the user wants the torrent to be private and turn into bool
                                var b_privacy = (form.privateTorrent.value == "true") ? true : false;
                                // Set an arbitrary piece length
                                var b_piecelen = (form.pieceLength.value == "none") ? null: form.pieceLength.value;
                                // Turn supplemental announcers into array of strings, comma-separated
                                var b_announcers = (form.announceList.value == "none") ? null : form.announceList.value.split(",");
                                // Turn supplemental webseeds into array of strings, comma-separated
                                var b_webseeds = (form.urlList.value == "none") ? null : form.urlList.value.split(",");
                                /*options = { name: blob.name, comment: comment, createdBy: creator, creationDate: metadate, private: privacy, pieceLength: piecelen, announceList: announcers, urlList: webseeds};*/
                                createTorrent(blob, { name: b_name } , function (err, torrent) {
                                        if ( !err ) {
                                                alert( "SUCCESS", "; ", file, "; " , b_name, "; " , b_creator, "; " , b_comment, "; " , b_metadate, "; " , b_privacy, "; " , b_piecelen, "; " , b_announcers, "; " , b_webseeds );
                                        }else{
                                                alert( "ERROR", "; ", file, "; " , b_name, "; " , b_creator, "; " , b_comment, "; " , b_metadate, "; " , b_privacy, "; " , b_piecelen, "; " , b_announcers, "; " , b_webseeds );
                                        }
                                })
                        }
                        xhr.send();
                        // alert( file, "; " , name, "; " , creator, "; " , comment, "; " , metadate, "; " , privacy, "; " , piecelen, "; " , announcers, "; " , webseeds );
                }
