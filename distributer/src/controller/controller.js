const {server, headers} = require("../conf/conf");
const fetch = require("node-fetch");

const get = function (url, res) {
    return fetch(url, {headers: headers}).then((resp) => {
        return resp.text()
    }).then((data) => {
        return res.send(data)
    }).catch((e) => {
        return res.status(500).send()
    })
}

const getAriaPage = function (page, res) {
    if (page === 'home') {
        return get(server.A + "/assets/aria/index.html", res)
    }
    return res.status(404).send()
}

const getSpotifyPlayerPage = function (page, res) {
    if (page === 'home') {
        return get(server.B + "/assets/spotify/index.html", res)
    }
    return res.status(404).send()
}

const getDazzlePage = function (page, res) {
    if (page === 'home') {
        return get(server.B + "/assets/dazzle/index.html", res)
    }
    return res.status(404).send()
}

module.exports = {
    fetchFile: async function (req, res) {
        let {origin} = req.params;
        let {referer} = req.headers;
        if (!referer) {
            return res.status(400).send()
        }
        let isHtml = /(.*\.html$)/.test(req.url);

        let path = `assets/${req.url.slice(1)}`, at;
        if (origin === 'aria') {
            at = server.A;
        } else if (origin === 'dazzle' || origin === 'spotify') {
            at = server.B
        } else {
            return res.status(404).send()
        }

        if (isHtml) {
            return get(`${at}/${path}`, res);
        }

        return res.redirect(`${at}/${path}`)
    },
    fetchPage: async function (req, res) {
        let {entity} = req.params, page = req.url.split('/')[2];
        switch (entity) {
            case 'aria': return getAriaPage(page, res);
            case 'dazzle': return getDazzlePage(page, res);
            case 'spotify': return getSpotifyPlayerPage(page, res);
        }
        return res.status(404).send()
    }
}
