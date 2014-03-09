(function($) {
        
    if(!window.Tabpad) {
        Tabpad = {};
    }

    Tabpad.Selector = {};
    Tabpad.Selector.getSelected = function() {
        var t = '';

        if(window.getSelection) {
            t = window.getSelection();
        } else if(document.getSelection) {
            t = document.getSelection();
        } else if(document.selection) {
            t = document.selection.createRange().text;
        }

        return t;
    }

    Tabpad.Selector.mouseup = function() {

        var selectedText = Tabpad.Selector.getSelected();
        if(selectedText != '') {

            var lyricSection = '<div class="chord-section">' + selectedText + '</div>';
            var verse_contents = $('#tabpad .verse');

            $(verse_contents).each(function(idx, contents) {

                var index = (idx + 1);
                var contents_html = $(contents).html();

                if(selectedText.extentOffset > 0) {
                    var updated = contents_html.replace(selectedText, lyricSection);
                    $('#tabpad .verse:nth-child(' + index + ')').html(updated); 
                }
            });

        }   
    }

    $(document).bind("mouseup", Tabpad.Selector.mouseup); 

})(jQuery);




