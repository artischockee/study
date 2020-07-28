// Функция смены содержимого
function show(current_btn, content_id) {
    //console.log(current_btn)
    // active btn
    for (const button of document.getElementsByClassName('directions__card')) {
        button.classList.remove('activate__button')
    }
    current_btn.classList.add('activate__button')

    // active main content
    for (const content_block of document.getElementsByClassName('main_content')) {
        content_block.classList.add('hide_content')
    }
    document.getElementById(content_id).classList.remove('hide_content')
}

// Функция открытия модальных окон у портфолию
function open_modal(current_div, modal_id) {
    document.getElementById("modal").classList.remove("hide_modal");
    document.getElementById(modal_id).classList.remove("hide_modal")
}

// Функция закрытия модальных окон у портфолио
function close_modal(current_modal) {
    //console.log(current_modal);
    document.getElementById("modal").classList.add("hide_modal")

    for (const modal_block of document.getElementsByClassName('modal_window')) {
        modal_block.classList.add('hide_modal')
    }
}