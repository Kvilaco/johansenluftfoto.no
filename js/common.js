/**
 * This file is used for injecting common elements like menus and footer into the document.
 *
 * The first part of this file contains data that can be easily changed when needed.
 */

/*
Top common items
 */
const menuItems = [
    {
        name: "Forside",
        link: "index.html",
    },
    {
        name: "Om meg",
        link: "about.html",
    },
    {
        name: "Portfolio",
        link: "portfolio.html",
    },
    {
        name: "Priser",
        link: "services_and_prices.html",
    },
    {
        name: "Kontakt",
        link: "contact.html",
    },
];

/*
Social network links and icons
 */
const socials = [
    {
        name: 'Instagram',
        icon: 'icons/instagram.svg',
        link: 'https://instagram.com',
    },
    {
        name: 'Facebook',
        icon: 'icons/facebook.svg',
        link: 'http://facebook.com',
    },
];

/*
Footer content
 */
const footerMarkup = 'Copyright © 2021 Johansen Luftfoto';

/*
Video background
 */
const videoSources = [
    {
        url: "https://folk.ntnu.no/joakilan/webtek-video/webtek2.webm",
        type: "video/webm",
    },
];

const videoFallbackImage = {
    src: "images/1920/DJI_0853.JPG.webp",
    alt: "Video failed to load",
};

// Insert nodes
function insertMenu() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const menu = document.createElement('div');
    const menuWrapper = document.createElement('div');
    menu.id = 'menu';
    menu.style.zIndex = 1000;

    menuItems.forEach(item => {
        const node = document.createElement('a');
        node.href = item.link
        node.textContent = item.name;
        menu.appendChild(node);
    });

    socials.forEach(item => {
        const node = document.createElement('a');
        node.href = item.link;
        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.alt = item.name;
        node.appendChild(icon);
        menu.appendChild(node);
    });

    menuWrapper.appendChild(menu);
    menuWrapper.classList.add('menu-wrapper');
    document.body.insertBefore(menuWrapper, document.body.childNodes[0]);
}

function insertFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = footerMarkup;

    document.body.appendChild(footer);
}

function videoBackground() {
    const video = document.createElement('video');
    video.id = 'bg-video';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.controls = false;
    video.poster = videoFallbackImage.src;
    videoSources.forEach(source => {
        const node = document.createElement('source');
        node.type = source.type;
        node.src = source.url;
        video.appendChild(node);
    });
    const fallback = document.createElement('img');
    fallback.src = videoFallbackImage.src;
    fallback.alt = videoFallbackImage.alt;
    document.body.insertBefore(video, document.body.childNodes[0]);
};