let chatPlugin = (() => {
    return {
        createChatIcon: () => {
            const elmDiv = document.createElement("div"), elmBody = document.body, elmButton = document.createElement("button");
            elmDiv.classList = "chat_btn_wrapper";
            elmDiv.style = "position:fixed;bottom:10px;right:10px;";
            elmButton.classList = "chat_btn_icon";
            elmButton.setAttribute("onclick", "chatPlugin.showChatWindow()");
            elmButton.style = "background:url(https://img.icons8.com/doodle/48/000000/chat.png) no-repeat;border:none;width:50px;height:50px;cursor:pointer;";
            elmBody.appendChild(elmDiv);
            elmDiv.appendChild(elmButton);
        },

        showChatWindow: () => {
            console.log("Chat opened !!");
            alert('Chat Opened !');
        },

        getProductsList: () => {
            return { ProductA: "ProductA", ProductB: "ProductB" };
        }
    }
})();

(() => {
    const load = document.currentScript.getAttribute('load');
    return load === "true" ? chatPlugin.createChatIcon() : console.log("Issue with script !");
})();
