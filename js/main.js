"use strict";

// ピックアップすらいど
$('.slide--pickup').slick({
    autoplay: true,
    dots: true, 
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
        breakpoint: 750,
        settings: {
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        }
    }]
});

// タブ切り替え
const planTabs = document.querySelectorAll(".c-plan-tabs__button");
const planContents = document.querySelectorAll(".c-plan-tabs__content");

planTabs.forEach((planTab, index) => {
    planTab.addEventListener("click", () => {
        // ボタンのアクティブ状態をリセット
        planTabs.forEach((t) => {
            t.classList.remove("c-plan-tabs__button--active");
        });
        // コンテンツのアクティブ状態をリセット
        planContents.forEach((planContent) => {
            planContent.classList.remove("c-plan-tabs__content--active");
        });

        // クリックしたボタンをアクティブに
        planTab.classList.add("c-plan-tabs__button--active");
        // 対応するコンテンツをアクティブに
        planContents[index].classList.add("c-plan-tabs__content--active");
    });
});

// バーガーメニュー開閉
const menuBtn = document.getElementById("header-nav__btn");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
    if (!header.classList.contains("open")) {
        header.classList.add("open"); 
    } else {
        header.classList.remove("open"); 
    }
});

// ナビメニューのスクロールアニメーション
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".header__navLink");

    const options = {
        root: null,
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");

                navLinks.forEach((navLink) => {
                    // 第2引数が true のときは 必ず追加、false のときは 必ず削除 します。
                    navLink.classList.toggle("current",
                        navLink.getAttribute("data-target") === id
                    );
                });
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });

});

// モーダルの実装
const body = document.querySelector("body");
const modalLayer = document.querySelector(".modal--layer");
const modalClose = document.querySelector(".modal--close");
const gridImages = document.querySelectorAll(".gallery-img__wrapper");
const modalImg = document.querySelector(".modal-img__wrapper img");

gridImages.forEach((gridImage) => {
    gridImage.addEventListener("click", () => {

        const img = gridImage.querySelector("img");
        const imgSrc = img.getAttribute("src");

        modalImg.setAttribute("src", imgSrc);
        modalLayer.classList.add("active");
        body.style.overflow = "hidden";

    });
    const closeModal = () => {
        modalLayer.classList.remove("active");
        body.style.overflow = "unset";
    };

    modalClose.addEventListener("click", closeModal);
    modalLayer.addEventListener("click", closeModal);
});