function windowHeight(){
    var getAllHeight = window.document.documentElement.offsetHeight;
    return getAllHeight;
}
function courentPositionScroll() {
    var getCourentPosScroll = window.pageYOffset;
    return getCourentPosScroll + window.innerHeight
}
function showMenu() {
    /*------- define varables ------------ */
    var getWrapper,getLists,selectedMenuWrapper,moreLang,selectedList,copySelecMenu,copyCourentSelecMenu;

     getWrapper = window.document.body.querySelector("#selectLang");
    getLists = getWrapper.querySelectorAll("ul");
    selectedMenuWrapper = getLists[0];
    selectedList = getWrapper.querySelector(".selectedMenu");
    moreLang = getLists[1];
    moreLang_Lists =moreLang.querySelectorAll("li");


    /*----- show menu event handler -------*/
    getWrapper.addEventListener('click',function () {
        if(moreLang.classList.contains("dis_None"))
        {
            moreLang.classList.remove("dis_None");
            /*----- more languge event handle !!!  -------*/
            for(var moreLangCounter = 0 ; moreLangCounter<moreLang_Lists.length;moreLangCounter++)
            {
                moreLang_Lists[moreLangCounter].addEventListener('click',function () {
                    /*-------------- remove class selected menu ---------------- */
                    selectedList.classList.remove("subMenuIcon")
                    selectedList.classList.remove("selectedMenu")
                    /*-------------- remove class selected menu ---------------- */

                    /*-------------- copy selected menu  ---------------- */
                    copySelecMenu = selectedList.cloneNode(true);
                    /*-------------- copy selected menu  ---------------- */

                    /*-------------- copy courent selected menu  ---------------- */
                    copyCourentSelecMenu = this.cloneNode(true);

                    /*-------------- ADD CourentSelecMenu menu ---------------- */
                    copyCourentSelecMenu.classList.add("subMenuIcon")
                    copyCourentSelecMenu.classList.add("selectedMenu")
                    /*--------------ADD CourentSelecMenu menu---------------- */

                    /*-------------- copy courent selected menu  ---------------- */

                    /*-------------- remove courent selected menu  in parent  ---------------- */
                    this.parentElement.removeChild(this)
                    /*-------------- remove courent selected menu  in parent  ---------------- */

                    /*-------------- remove  selected menu  in parent  ---------------- */
                    selectedList.parentElement.removeChild(selectedList)
                    /*-------------- remove  selected menu  in parent  ---------------- */

                    /*-------------- add courent select language in selected wrapper ---------------- */
                    selectedMenuWrapper.appendChild(copyCourentSelecMenu)
                    /*-------------- add courent select language in selected wrapper---------------- */

                    /*-------------- add after select language in more wrapper ---------------- */
                    moreLang.appendChild(copySelecMenu);
                    /*-------------- add courent select language in more wrapper---------------- */

                    getWrapper = window.document.body.querySelector("#selectLang");
                    getLists = getWrapper.querySelectorAll("ul");
                    selectedMenuWrapper = getLists[0];
                    selectedList = getWrapper.querySelector(".selectedMenu");
                    moreLang = getLists[1];
                    moreLang_Lists =moreLang.querySelectorAll("li");
                })
            }

            /*----- more languge event handle !!!  -------*/
        }

        else
        {
            moreLang.classList.add("dis_None");
        }
    })
    /*----- show menu event handler -------*/
    /*----- preevent defalt language selected  -------*/
    selectedList.addEventListener('click',function (eventHandle) {
        eventHandle.preventDefault();
    })
    /*----- preevent defalt language selected  -------*/



}
function fixedTopMenu(topMenuId,asideId) {
    var getTopMenuId = window.document.body.querySelector("#" + topMenuId)
    var getAside = window.document.body.querySelector("#"+asideId);
    var courentOfsetTop = getAside.offsetTop
    window.addEventListener('scroll',function () {
        var getScrollPos = window.pageYOffset;
        if (getScrollPos > 0)
            {
                getTopMenuId.style.position = "fixed"
                getTopMenuId.style.width = "100%"
                getTopMenuId.style.top = "0"
                getTopMenuId.style.left = "0"
                getAside.style.top = "68px"
    }
    else
        {
            getTopMenuId.style.position = "relative"
            getTopMenuId.style.width = "100%"
            getAside.style.top = courentOfsetTop+"px"
        }

    })
}
function rndNum(min,max) {
    var rnd = window.Math.round(window.Math.random() * (max-min) + min );
  return rnd; 
}
function colorRand() {
    var r =rndNum(0,255) ;
    var g=rndNum(0,255) ;
    var b =rndNum(0,255) ;
    var str = "rgb(" + r + "," + g + "," + b + ")";
    return str;
}

function createSpanGeneratorColor() {
    var spnGenerator = window.document.createElement("span");
    var createAttr = window.document.createAttribute("style");
    createAttr.value = "background:"+colorRand()+";";
    spnGenerator.setAttributeNode(createAttr);
    spnGenerator.classList.add("colorCell")
    spnGenerator.classList.add("fadeIn")
    spnGenerator.classList.add("posrelAside")
    var createHeader = window.document.createElement("header");
    createHeader.classList.add("posAb")
    createHeader.classList.add("w100")
    spnGenerator.appendChild(createHeader)
    var createLikeImg = window.document.createElement("img");
    createLikeImg.src = "img/heart.svg";
    createLikeImg.alt = "like color (رنگ )" + spnGenerator.style.background ;
    createHeader.appendChild(createLikeImg)
    var numberLike = window.document.createElement('span');
    numberLike.classList.add("numberLiked");
    numberLike.innerText = "0"
    createHeader.appendChild(numberLike)
    var showPopUpiconWrapper = window.document.createElement("span");
    showPopUpiconWrapper.classList.add('fl_Right');
    showPopUpiconWrapper.classList.add('showPopUpiconWrapper');
    var showPopUpicon = window.document.createElement("img");
    showPopUpicon.src ="img/list.svg";
    showPopUpiconWrapper.appendChild(showPopUpicon)
    createHeader.appendChild(showPopUpiconWrapper)
    return spnGenerator;
}
function postGenerator(postWrapperID) {
   var postWrapper =  window.document.body.querySelector("#"+postWrapperID);
   var getHeight = window.outerHeight;
   if(getHeight>700)
       if(getHeight>=720 && getHeight<768)
           for(var counter = 1 ; counter <=23; counter++)
               postWrapper.appendChild(createSpanGeneratorColor());
       else if(getHeight>=768 && getHeight<=800)
           for(var counter = 1 ; counter <=28; counter++)
               postWrapper.appendChild(createSpanGeneratorColor());
       else if (getHeight>800 && getHeight<=950)
           for(var counter = 1 ; counter <=32; counter++)
               postWrapper.appendChild(createSpanGeneratorColor());
       else if(getHeight>950 && getHeight<=1080)
           for(var counter = 1 ; counter <=38; counter++)
               postWrapper.appendChild(createSpanGeneratorColor());
       else if (getHeight>1080 && getHeight<=1200)
           for(var counter = 1 ; counter <=42; counter++)
               postWrapper.appendChild(createSpanGeneratorColor());
       else if(getHeight>1200 && getHeight<=1280)
           for(var counter = 1 ; counter <=48; counter++)
               postWrapper.appendChild(createSpanGeneratorColor());
    var colorCels = window.document.body.querySelectorAll(".colorCell");
   if(colorCels.length >=4)
        for(var counterMg =0 ; counterMg<= 4; counterMg++)
           colorCels[counterMg].style.marginTop = "0"
    window.addEventListener('scroll',function () {
        var contentHeight = window.document.body.querySelector("#content").offsetHeight;
        var courentScroll = courentPositionScroll();
        var getPosts = window.document.body.querySelectorAll(".colorCell");
        var getPostsLength = getPosts.length;
        var cand  =courentScroll >= ( contentHeight - 25) && getPostsLength<70;
        if(cand)
        {
             iv1 = setInterval(function () {
                  contentHeight = window.document.body.querySelector("#content").offsetHeight;
                  courentScroll = courentPositionScroll();
                  getPosts = window.document.body.querySelectorAll(".colorCell");
                  getPostsLength = getPosts.length;
                  cand  =courentScroll >= ( contentHeight - 25) && getPostsLength<70;
                 if(cand)
                    postWrapper.appendChild(createSpanGeneratorColor());
                 else
                 {
                     clearInterval(iv1)
                     contentHeight = window.document.body.querySelector("#content").offsetHeight;
                     courentScroll = courentPositionScroll();
                     getPosts = window.document.body.querySelectorAll(".colorCell");
                     getPostsLength = getPosts.length;
                     var numberOfChecked = 70;

                     if(courentScroll >= ( contentHeight - 25) && getPostsLength>=numberOfChecked)
                     {

                         var getContentElement = window.document.body.querySelector("#content");
                         getContentElement.appendChild(BtnMoreColorGenerator());
                         var getBtns = window.document.body.querySelectorAll(".moreColors");
                         getLenthBtn = getBtns.length;
                         if(getLenthBtn > 0) {
                             for (var counter = getLenthBtn - 1 ; counter > 0; counter--)
                                 getBtns[counter].parentElement.removeChild(getBtns[counter]);

                         }
                         getBtns[0].addEventListener('click',function () {
                            this.parentElement.removeChild(this);

                            for(var againColorGenerator = 1 ; againColorGenerator<=20 ; againColorGenerator++)
                                postWrapper.appendChild(createSpanGeneratorColor());
                             getContentElement = window.document.body.querySelector("#content");
                             getContentElement.appendChild(BtnMoreColorGenerator());
                             numberOfChecked+=20 ;

                         })
                         getBtns[0].addEventListener('mouseover',function () {
                             setTimeout(function () {

                                 getBtns[0].querySelector("img").src = "img/diamond_white.svg"
                             },500)
                         })
                         getBtns[0].addEventListener('mouseleave',function () {
                             setTimeout(function () {
                                 getBtns[0].querySelector("img").src = "img/diamond.svg"
                             },500)
                         })
                     }
                 }
            },1000)
        }
        else
            for(var counterClearInterval = 0 ; counterClearInterval<= iv1;counterClearInterval++)
            {
                clearInterval(iv1)
                iv1--
            }

        contentHeight = window.document.body.querySelector("#content").offsetHeight;
        courentScroll = courentPositionScroll();
        getPosts = window.document.body.querySelectorAll(".colorCell");
        getPostsLength = getPosts.length;
        var numberOfChecked = 70;

        if(courentScroll >= ( contentHeight - 25) && getPostsLength>=numberOfChecked)
        {

            var getContentElement = window.document.body.querySelector("#content");
            getContentElement.appendChild(BtnMoreColorGenerator());
            var getBtns = window.document.body.querySelectorAll(".moreColors");
            getLenthBtn = getBtns.length;
            if(getLenthBtn > 0) {
                for (var counter = getLenthBtn - 1 ; counter > 0; counter--)
                    getBtns[counter].parentElement.removeChild(getBtns[counter]);

            }
            getBtns[0].addEventListener('click',function () {
                this.parentElement.removeChild(this);

                for(var againColorGenerator = 1 ; againColorGenerator<=20 ; againColorGenerator++)
                    postWrapper.appendChild(createSpanGeneratorColor());
                getContentElement = window.document.body.querySelector("#content");
                getContentElement.appendChild(BtnMoreColorGenerator());
                numberOfChecked+=20 ;

            })
            getBtns[0].addEventListener('mouseover',function () {
                setTimeout(function () {

                    getBtns[0].querySelector("img").src = "img/diamond_white.svg"
                },500)
            })
            getBtns[0].addEventListener('mouseleave',function () {
                setTimeout(function () {
                    getBtns[0].querySelector("img").src = "img/diamond.svg"
                },500)
            })
        }


    })
}

function BtnMoreColorGenerator() {
    var createBtnGenerator = window.document.createElement("div");
    createBtnGenerator.classList.add("shdowBox")
    createBtnGenerator.classList.add("bg_White")
    createBtnGenerator.classList.add("boxSizingBB")
    createBtnGenerator.classList.add("moreColors")
    var iconCreatorBtn = window.document.createElement("span");
    iconCreatorBtn.id = "iconWrapper";
    iconCreatorBtn.classList.add("shdowBox");
    iconCreatorBtn.classList.add("bg_White");
    iconCreatorBtn.classList.add("boxSizingBB");
    iconCreatorBtn.classList.add("dis_Inblk");
    iconCreatorBtn.classList.add("h100");
    iconCreatorBtn.classList.add("textCenter");
    var imageIcon = window.document.createElement("img");
    imageIcon.classList.add("posrel");
    imageIcon.alt = "تولید رنگ های  بیشتر ";
    imageIcon.src = "img/diamond.svg";
    iconCreatorBtn.appendChild(imageIcon);
    createBtnGenerator.appendChild(iconCreatorBtn)
    var textBtn = window.document.createTextNode(" تولید رنگ بیشتر");
    createBtnGenerator.appendChild(textBtn);
    return createBtnGenerator;
}