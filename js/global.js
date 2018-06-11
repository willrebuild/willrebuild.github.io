var myNebAdress;

$(function () {
    initData();
    window.postMessage({
        "target": "contentscript",
        "data": {},
        "method": "getAccount",
    }, "*");
    window.addEventListener('message', function (e) {
        if (e.data && e.data.data && e.data.data.account) {
            myNebAdress = e.data.data.account;

            $('#profile_neb_address').html(myNebAdress)
            //if (typeof start != 'undefined') start()

            loadData();
        }
    })

    setTimeout(function () {
        //如果没有装插件或者没有钱包，则到首页
        return
        if (!myNebAdress) {
            this.userAgent = navigator.userAgent.toUpperCase()
            this.address = localStorage.getItem("user_address") || ""
            this.address && this.getUserHistory(this.address)

            var address = "https://github.com/ChengOrangeJu/WebExtensionWallet";
            if (this.userAgent.match(/(IPHONE|ANDROID)/) && (this.UA = "mobile")) {
                address = "https://nano.nebulas.io/index.html"
                //if (confirm('Viking Storm game requires NAS nano App to Play')) {
                //}
            } else {
                if (confirm('Viking Storm game requires Nebulas browser extension that is available as plug in for goolge chorme')) {
                    location.href = address;
                } else {
                    location.href = "play.html";
                }
            }
        }
    }, 800)
})
