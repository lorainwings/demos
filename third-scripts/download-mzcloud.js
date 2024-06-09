let mainTaskControl, groupTaskControl, globalGroup;
const xhrArray = window.xhrArray = new Set();
const currentAlbum = {
    done: true,
    name: '',
    num: 0,
    value: 0,
    get sended() {
        return this.value
    },
    set sended(value) {
        this.value = value
        if (value === this.num) {
            log(`所有请求完成,可以进行错误处理~~~`)
        }
    }
};

function setCurrentAlbum(albumInfo) {
    Object.keys
    currentAlbum.name = name
    currentAlbum.num = num
    currentAlbum.done = done
    currentAlbum.sended = sended
}

function log(str, type = 'STEP', ...args) {
    console.log(`%c[${type}]: ${str}`, 'color: green; font-size: 18px; font-weight: 700', ...args)
}

async function delay(time, cb = () => { }) {
    const proItem = createPromise()
    setTimeout(async () => {
        await cb()
        proItem.resolve()
    }, time)
    await proItem.promise;
}

function createPromise() {
    let resolve, reject, promise;
    promise = new Promise((rs, rj) => {
        (resolve = rs, reject = rj)
    })
    return { promise, resolve, reject }
}


async function domLoaded(parent) {
    const proItem = createPromise()
    const config = { attributes: true, childList: true, subtree: true };
    let timer = null
    const callback = function (mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === "attributes") {
                // log("The " + mutation.attributeName + " attribute was modified.");
                clearTimeout(timer)
                if (mutation.target === parent.lastElementChild) {
                    proItem.resolve()
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(parent, config);
    timer = setTimeout(proItem.resolve, 5000)
    await proItem.promise
    observer.disconnect();
}

function getAlbumInfo(al) {
    const name = al.querySelector('.a-i-content h3').innerText;
    const num = al.querySelector('.a-i-content p').innerText;
    return { name, num }
}


async function loadAlbum() {
    const proItem = createPromise()
    const timer = setInterval(async () => {
        const loadBtn = document.querySelector('.p-item.loadmore')
        if (loadBtn) loadBtn.click()
        else {
            clearInterval(timer);
            const elems = document.querySelector('.list-content .p-list');
            await domLoaded(elems);
            const checkElems = elems.querySelectorAll('.icon.i-selected');
            proItem.resolve([...checkElems])

        }
    }, 500);
    const photos = await proItem.promise
    return photos
}


async function download() {
    const dwBtn = document.querySelector('.hd-hander-wrap .btn-link.text-blue')
    dwBtn.click()
}

function findAlbums() {
    const albums = document.querySelectorAll('.l-bd .a-item')
    return [...albums]
}

function select(el) {
    const posX = window.getComputedStyle(el).backgroundPositionX
    if (posX === '-139px') {
        el.click()
    }
}

function cancle(el) {
    const posX = window.getComputedStyle(el).backgroundPositionX
    if (posX === '-106px') {
        el.click()
    }
}

async function selectOrCancle(elems, action) {
    elems.forEach(it => {
        action ? select(it) : cancle(it)
    })
}

function initBtn() {
    const elStart = document.querySelector('.header div .begin-album-btn')
    const elNext = document.querySelector('.header div .next-group-btn')
    elNext.disabled = false
    elStart.disabled = true
}

function resetBtn() {
    const elStart = document.querySelector('.header div .begin-album-btn')
    const elNext = document.querySelector('.header div .next-group-btn')
    elStart.innerText = `下一相册`
    elStart.disabled = false
    elNext.disabled = true
}

async function downloadPart(photos, limit = 100) {
    initBtn()
    const count = Math.ceil(photos.length / limit)
    for (let i = 0; i < count; i++) {
        groupTaskControl = createPromise()
        const group = globalGroup = photos.slice(i * limit, (i + 1) * limit);
        await delay(1000)
        selectOrCancle(group, true)
        await download()
        await delay(2000)
        await groupTaskControl.promise
        log(`第${i + 1}组下载完成, 等待下一组...`)
        selectOrCancle(group, false)
    }
    resetBtn()
}

async function downloadWhole(photos) {
    initBtn()
    groupTaskControl = createPromise()
    globalGroup = photos
    await delay(1000)
    selectOrCancle(photos, true)
    await download()
    await delay(2000)
    await groupTaskControl.promise
    resetBtn()
}

async function downloadTask() {
    const albums = findAlbums()
    for (const al of albums) {
        mainTaskControl = createPromise()
        al.click()
        const { name, num } = getAlbumInfo(al)
        setCurrentAlbum({ name, num, sended: 0, done: false })
        log(`选中相册:${name}; 照片张数:${num}\n`)
        await delay(1000)
        const photos = await loadAlbum()
        log(`相册${name}的图片加载就绪, 准备下载......`)
        await downloadWhole(photos)
        log(`相册${name}下载完成, 开始下一个相册图片下载`)
        await mainTaskControl.promise
    }
    setCurrentAlbum({ name: "", num: 0, done: true, sended: 0 })
    log(`所有相册下载完毕~`)
}

function renderHtml() {
    const header = document.querySelector('.header')
    const target = document.querySelector('.faq-entry')
    const container = document.createElement('div')
    container.innerHTML = `
        <button class="begin-album-btn" style="width: 140px; height: 40px; font-size: 18px; margin-right: 10px">下载相册</button>
        <button class="next-group-btn" disabled style="width: 140px; height: 40px; font-size: 18px">批量保存</button>
    `
    header.insertBefore(container, target)
    const elStart = document.querySelector('.header div .begin-album-btn')
    const elNext = document.querySelector('.header div .next-group-btn')
    elStart.onclick = async function () {
        const { done } = currentAlbum
        if (done) {
            downloadTask()
        } else {
            mainTaskControl.resolve()
        }
    }
    elNext.onclick = () => {
        selectOrCancle(globalGroup, false)
        groupTaskControl.resolve()
    }
}

async function errorHandle() {
    for (const xhr of xhrArray) {
        const { level, url } = xhr
        const u = new URL(url)
        if (level !== 'error') continue
        for (const c of globalGroup) {
            const r = window.getComputedStyle(c.parentElement).backgroundImage.includes(u.pathname);
            if (!r) continue
            log(`失败元素:`, 'Error', c.parentElement);
            cancle(c);
        }
    }
}


function errorCatch() {
    window.addEventListener('error', (e) => {
        console.log('捕获document error', e);
    }, true)

    window.onerror = function (...err) {
        console.log('捕获window error', err);
    }

    window.addEventListener('unhandledrejection', (e) => {
        e.preventDefault();
        console.log('捕获promise error', e);
    })

    const apiHack = {
        url: null,
        method: null,
        open: XMLHttpRequest.prototype.open,
        send: XMLHttpRequest.prototype.send,
        alert: window.alert,
        init() {
            const _t = this;
            window.alert = function (...args) {
                console.log(...args)
            }

            XMLHttpRequest.prototype.open = function (...args) {
                const [m, u] = args
                _t.url = u
                _t.method = m
                _t.open.apply(this, args);
            };

            XMLHttpRequest.prototype.send = function (...args) {
                const xhrInfo = {
                    url: _t.url,
                    type: _t.method,
                    data: args[0] || {}
                };

                this.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        currentAlbum.sended++;
                        xhrInfo.res = this.response;
                        xhrInfo.status = this.status;
                        xhrInfo.level = this.status >= 200 && this.status < 400 ? "success" : (xhrArray.add(xhrInfo), "error")
                    }
                });

                this.addEventListener('error', async (e) => {
                    console.log('捕获xhr onerror', e);
                })

                try {
                    _t.send.apply(this, args);
                } catch (e) {
                    console.log('捕获xhr error', e);
                }
            };
        }
    };
    apiHack.init()
}


errorCatch()
delay(2000, renderHtml)

