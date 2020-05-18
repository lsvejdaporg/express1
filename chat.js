exports.apiChat = function (req, res) {
    console.log(req.params.fn);
    if (req.params.fn == "addMsg") {
        res.send("pridani zpravy:" + req.body.msg + " od " + req.body.nick);
    } else if (req.params.fn == "listMsgs") {
        res.send("seznam zprav");
    } else {
        res.status(404).send("funkce neexistuje");
    }
}
