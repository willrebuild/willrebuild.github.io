var nebAddress, nebState;
var nebulas = require("nebulas"),
    Account = nebulas.Account,
    neb = new nebulas.Neb();
NebPay = require("nebpay");
nebPay = new NebPay();
var nebConfigArr = {
    mainnet: {
        contractAddress: "n1jps9rYGfU75XUMsuoW7zkNkbSMqK99QoY",
        txhash: "f5422eaa59c0ae5e3696a38b9e74992235210d202f0de163b62f0d296e075541",
        host: "https://mainnet.nebulas.io",
        payhost: "https://pay.nebulas.io/api/mainnet/pay"
    },
    testnet: {
        contractAddress: "n1qB2A2xph8ZSJm9WYjMmAPrj9479vVwR16",
        txhash: "68111b2408b2a5f35deecc0babcc7ff8d8dd33bed9a1e40168efa596b2ac4676",
        host: "https://testnet.nebulas.io",
        payhost: "https://pay.nebulas.io/api/pay"
    }
};
var nebNowTime = Math.round((new Date()).getTime() / 1000);
nebConfig = nebConfigArr["mainnet"];
neb.setRequest(new nebulas.HttpRequest(nebConfig["host"]));

var nebApiCall = function (callFunction, callArgs, callback) {
    var from = Account.NewAccount().getAddressString();
    var value = "0";
    var nonce = "0"
    var gas_price = "1000000"
    var gas_limit = "2000000"
    var contract = {
        "function": callFunction,
        "args": JSON.stringify(callArgs)
    }
    neb.api.call(from, nebConfig["contractAddress"], value, nonce, gas_price, gas_limit, contract).then(function (resp) {
        var data = null;
        try {
            data = JSON.parse(resp.result);
        } catch (e) {
        }
        callback(data);
    }).catch(function (err) {
        console.log("error:" + err.message)
    })
}

var nebPayCall = (function () {
    var txhash;
    var intervalQuery;
    var funcIntervalQuery = function (successCb) {
        neb.api.getTransactionReceipt({hash: txhash}).then(function (resp) {
            console.log("tx result: " + JSON.stringify(resp))
            if (resp.status == 1) {
                clearInterval(intervalQuery)
                successCb(resp)
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
    return function (callFunction, callArgs, money, cb, successCb) {
        var to = nebConfig["contractAddress"];
        var value = money;
        var callFunction = callFunction
        var callArgs = JSON.stringify(callArgs)

        serialNumber = nebPay.call(to, value, callFunction, callArgs, {
            listener: function (resp) {
                if (resp.txhash) {
                    txhash = resp.txhash;
                    cb(txhash)
                    intervalQuery = setInterval(function () {
                        funcIntervalQuery(successCb);
                    }, 5000);
                }
            }
        });
    }
})()


var sell = function (id) {
    dialog_sold.open()
    $('#dialog_sold a.button').click(function () {
        var sold_money = $('#sold_money').val();
        sold_money = Number(sold_money);
        if (sold_money <= 0) {
            dialog_sold.close();
            dialog_message.open();
            dialog_message.setContent('<p class="_mt25">The price of dinosaur must be numberic and can not be zero.</p>');
            return false;
        }
        nebPayCall("setDragonOnMarket", [id, sold_money], 0, function (hash) {
            dialog_sold.close();
            dialog_message.open();
            dialog_message.setContent('<p class="_mt25">Submit success, please wait for the result</p>');
        }, function () {
            dialog_sold.close()
            dialog_message.close();
        })
    })
}
var attack = function (defender_id) {
    dialog_attack.open()
    nebApiCall("getSelfDragon", [nebAddress], function (my_list) {
        console.log(JSON.stringify(my_list))
        var id_list = [];
        $.each(my_list, function (k, row) {
            if (typeof row == 'object') id_list.push(k)
        })
        id_list = id_list.reverse()
        if (!id_list.length) {
            dialog_attack.close()
            dialog_attack_no_dinosaur.open()
            return false
        }
        nebApiCall("getDragonIdList", [id_list], function (data) {
            console.log(JSON.stringify(data))
            var html = '';
            $.each(id_list, function (k, id) {
                if (data.data[id]) {
                    data.data[id]["id"] = id;
                    html += getDialogDinosaurItem(data.data[id])
                }
            })
            $('#dialog_dinosaur_list').html(html);
            $('#dialog_dinosaur_list a.attack_send').click(function () {
                var attacker_id = $(this).data('id');
                nebApiCall('getFightLog', [attacker_id], function (my_log) {
                    console.log(JSON.stringify(my_log))
                    var log_id_list = [];
                    if (my_log && my_log.log) {
                        $.each(my_log.log, function (k, row) {
                            if (typeof row == 'string') log_id_list.push(k)
                        })
                    }
                    log_id_list = log_id_list.reverse();
                    var max_id = -1;
                    if (log_id_list.length) max_id = log_id_list[0]
                    nebPayCall("fight", [attacker_id, defender_id], 0, function (hash) {
                        console.log("max_id", max_id);
                        location.href = 'attack_pending.html?attacker_id=' + attacker_id + '&defender_id=' + defender_id + '&hash=' + hash + '&max_id=' + max_id;
                    }, function () {
                    })
                })
            })
        })
    })
}
