const {server, headers} = require("../conf/conf");
const fetch = require("node-fetch");

const get = function (url) {
    return fetch(url, {headers: headers}).then((resp) => {
        return resp.text()
    }).then((data) => {
        return data
    }).catch((e) => {
        console.log(e)
        return null
    })
}

const getAriaPage = function (page) {
    if (page === 'home') {
        return get(server.A + "/assets/aria/index.html")
    }
    if (page === 'terms-conditions') {
        return get(server.A + "/assets/aria/terms-conditions.html")
    }
    if (page === 'privacy-policy') {
        return get(server.A + "/assets/aria/privacy-policy.html")
    }
}

const getSpotifyPlayerPage = function (page) {
    if (page === 'home') {
        return get(server.B + "/assets/spotify/index.html")
    }
}

const getDazzlePage = function (page) {
    if (page === 'home') {
        return get(server.B + "/assets/dazzle/index.html")
    }
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
            let html = await get(`${at}/${path}`, res);
            if (html) {
                return res.send(html);
            }
        }

        return res.redirect(`${at}/${path}`)
    },
    fetchPage: async function (req, res) {
        let {entity} = req.params, page = req.url.split('/')[2], html;
        switch (entity) {
            case 'aria': html = await getAriaPage(page); break;
            case 'dazzle': html = await getDazzlePage(page); break;
            case 'spotify': html = await getSpotifyPlayerPage(page); break;
        }
        return html ? res.send(html) : res.status(404).send()
    }
}