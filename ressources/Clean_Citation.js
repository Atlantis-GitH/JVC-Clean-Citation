// ==UserScript==
// @name         JVC Clean Citation
// @namespace    JVC Clean Citation
// @version      1.3.5
// @description  Reduire Cascade citations imbriquées (Reduit taille message / Evite les msg d'erreur)
// @author       Atlantis
// @icon         https://images.emojiterra.com/google/android-11/128px/1f4ac.png
// @match        *://www.jeuxvideo.com/forums/42-*
// @match        *://www.jeuxvideo.com/forums/1-*
// @match        *://www.jeuxvideo.com/forums/0-*
// @match        *://www.jeuxvideo.com/recherche/forums/0-*
// @match        *://www.jeuxvideo.com/messages-prives/nouveau.php*
// @match        *://www.jeuxvideo.com/messages-prives/message.php*
// @license      MIT
// ==/UserScript==


createboutonetwo12();

function createboutonetwo12() {

    let toolbar = document.querySelector(".jv-editor-toolbar");
    let imgBtnGroup = toolbar.querySelectorAll(".btn-group")[1];

    let activateButton = document.createElement("button");
    activateButton.classList.add("btn")
    activateButton.classList.add("btn-jv-editor-toolbar")
    activateButton.setAttribute("type", "button")
    activateButton.innerHTML = "”"; // Texte du bouton
    activateButton.style.fontSize = "1.5em";
    activateButton.style.paddingTop = "0.3em";
    activateButton.setAttribute("id", "cite-one");
    activateButton.setAttribute("title", "Réduire au message Cité");
    activateButton.addEventListener("click", function() {
        erasecitation();
    });


    let activateButton2 = document.createElement("button");
    activateButton2.classList.add("btn")
    activateButton2.classList.add("btn-jv-editor-toolbar")
    activateButton2.setAttribute("type", "button")
    activateButton2.innerHTML = "“ ”"; // Texte du bouton
    activateButton2.style.fontSize = "1.5em";
    activateButton2.style.paddingTop = "0.3em";
    activateButton2.setAttribute("id", "cite-two");
    activateButton2.setAttribute("title", "Réduire au message Cité + Citation imbriqué");
    activateButton2.addEventListener("click", function() {
        erasecitation2();
    });

    // Ajout des boutons à la suite dans le même groupe de boutons
    imgBtnGroup.appendChild(activateButton);
    imgBtnGroup.appendChild(activateButton2);
}




function effacerLignesAvecMotif(texte) {
    var expression = /^(\s*>>|\s*> >).*\n?/gm;
    texte = texte.replace(expression, '');
    return texte;
}



function erasecitation() {
    let messageP;
    if (window.location.href.indexOf("jeuxvideo.com/messages-prives/") > -1) {
        messageP = document.getElementById("message");
    } else if (window.location.href.indexOf("jeuxvideo.com/forums/message/") > -1) {
        messageP = document.getElementById("text_commentaire");
    } else {
        messageP = document.getElementById("message_topic");
    }
    var text = messageP.value;
    text = effacerLignesAvecMotif(text);
    messageP.value = text;
    //simule_changement_zone_texte
    let changeEvent = new Event('change');
    messageP.dispatchEvent(changeEvent);
    //replacer_selecteur_sur_pc
    var userAgent = navigator.userAgent.toLowerCase();
    if (!userAgent.includes('mobile')) {
        messageP.selectionStart = messageP.value.length;
        messageP.focus();
    }
}

function effacerLignesAvecMotifmulti(texte) {
    var expression = /^(\s*>>>|\s*> >>|\s*>> >|\s*> > >).*\n?/gm;
    texte = texte.replace(expression, '');
    return texte;
}

function erasecitation2() {
    let messageP;
    if (window.location.href.indexOf("jeuxvideo.com/messages-prives/") > -1) {
        messageP = document.getElementById("message");
    } else if (window.location.href.indexOf("jeuxvideo.com/forums/message/") > -1) {
        messageP = document.getElementById("text_commentaire");
    } else {
        messageP = document.getElementById("message_topic");
    }
    var text = messageP.value;
    text = effacerLignesAvecMotifmulti(text);
    messageP.value = text;
    //simule_changement_zone_texte
    let changeEvent = new Event('change');
    messageP.dispatchEvent(changeEvent);
    //replacer_selecteur_sur_pc
    var userAgent = navigator.userAgent.toLowerCase();
    if (!userAgent.includes('mobile')) {
        messageP.selectionStart = messageP.value.length;
        messageP.focus();
    }
}
