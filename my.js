/*copy data from unicode textbox */
function copy_data_unicode(){
    document.getElementById('unicode_text').select();
    document.execCommand('copy');
}


/*enable tab function in all textareas */
const textareas = document.querySelectorAll('textarea');

textareas.forEach(textarea => {
    textarea.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            e.preventDefault();

            const start = this.selectionStart;
            const end = this.selectionEnd;

            // Insert a tab character at the cursor position
            this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);

            // Move the cursor to the right of the inserted tab
            this.selectionStart = this.selectionEnd = start + 1;
        }
    });
});
