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

            var lyricSection = '<div class="chord-section">'
                + '<div class="chord-section-header">'
                + '<input type="text" name="chord-name" placeholder="enter a chord">' 
                + '</div>'
                + selectedText 
                + '</div>';

            var lyrics_html = $('#tabpad').html();
        
            if(selectedText.extentOffset > 0 ) {
                var updated = lyrics_html.replace(selectedText, lyricSection);
                $('#tabpad').html(updated);
            }

        }   

        // Listen for Chord name entry and replace form with static content
        $('input[name="chord-name"]').blur(function(e) {
            e.preventDefault();

            var value = $(this).val();
            $(this).parent('.chord-section-header').html(value);
        });

    }

    $(document).bind("mouseup", Tabpad.Selector.mouseup); 

    


})(jQuery);




