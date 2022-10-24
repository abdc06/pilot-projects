
jQuery(function () {
    startJS();
    searchRowBoxLine();
    allSserch(); //통합검색 이벤트
    calendar();
    file();
    zoomOption();
    CapsLockChk();
    inputWidth(); //input, select 자동 width 스타일적용 ex) ( data-width="32" ) ==> style="width:32px";
})

/* ---------------------------------------------- //sideNav() 시작 -------------------------------------------------------- */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
function sideMenu() { //side menu drop down
    var KEYCODE_F = 70;
    var dp01 = document.querySelector("#sideNav ul.depth01").children;
    depth01 = depth01fn(dp01);
    depth01_A = depth01Afn(dp01);
    foldBtn = document.querySelector("#container .menu-fold-btn");
    container = document.getElementById("container");
    headerLink = document.querySelectorAll("#wrapper #header .header-inner #mainNav .mainNav-inner li");

    function depth01fn(dp01) {
        var arrNumber = [];
        for (i = 0; i < dp01.length; i++) {
            arrNumber.push(dp01[i])
        }
        return arrNumber;
    }
    function depth01Afn(dp01) {
        var arrNumber = new Array();
        for (i = 0; i < dp01.length; i++) {
            arrNumber.push(dp01[i].children[0])
        }
        return arrNumber;
    }

    /* --------------------------------------------------- */
    /* -------- javasctript slideAnimation options --------*/
    /* --------------------------------------------------- */
    function slideUp(element, duration) {
        if (element != null) {
            element.style.height = element.offsetHeight + 'px'
            element.style.transitionProperty = 'height, margin, padding'
            element.style.transitionDuration = duration + 'ms'
            element.offsetHeight // eslint-disable-line no-unused-expressions
            element.style.overflow = 'hidden'
            element.style.height = 0
            element.style.paddingTop = 0
            element.style.paddingBottom = 0
            element.style.marginTop = 0
            element.style.marginBottom = 0
            window.setTimeout(function () {
                element.style.display = 'none'
                element.style.removeProperty('height')
                element.style.removeProperty('padding-top')
                element.style.removeProperty('padding-bottom')
                element.style.removeProperty('margin-top')
                element.style.removeProperty('margin-bottom')
                element.style.removeProperty('overflow')
                element.style.removeProperty('transition-duration')
                element.style.removeProperty('transition-property')
            }, duration)
        }
    }
    function slideDown(element, duration) {
        if (element != null) {
            element.style.removeProperty('display')
            element.style.display = window.getComputedStyle(element).display === 'none' ? 'block' : window.getComputedStyle(element).display
            var height = element.offsetHeight
            element.style.overflow = 'hidden'
            element.style.height = 0
            element.style.paddingTop = 0
            element.style.paddingBottom = 0
            element.style.marginTop = 0
            element.style.marginBottom = 0
            element.offsetHeight // eslint-disable-line no-unused-expressions
            element.style.transitionProperty = 'height, margin, padding'
            element.style.transitionDuration = duration + 'ms'
            element.style.height = height + 'px'
            element.style.removeProperty('padding-top')
            element.style.removeProperty('padding-bottom')
            element.style.removeProperty('margin-top')
            element.style.removeProperty('margin-bottom')
            window.setTimeout(function () {
                element.style.removeProperty('height')
                element.style.removeProperty('overflow')
                element.style.removeProperty('transition-duration')
                element.style.removeProperty('transition-property')
            }, duration)
        }
    }
    function slideToggle(element, duration) {
        if (window.getComputedStyle(element).display === 'none') {
            return this.slideDown(element, duration);
        } else {
            return this.slideUp(element, duration);
        }
    }
    function depth_01_Click(obj, tg, event) {
        //클릭한 메뉴에 class="on" 있을때 jQuery(obj).parent().hasClass('on')
        if (obj.parentNode.classList.contains('on')) {
            childrenDepthChk(obj, tg);
            //클릭한 메뉴에 class="on" 없을때
        } else {
            var depth01_li = document.querySelectorAll("#sideNav ul.depth01 li");
            for (i = 0; i < depth01_li.length; i++) {
                depth01_li[i].classList.remove('on');
                for (j = 0; j < depth01_li[i].getElementsByTagName('ul').length; j++) {
                    slideUp(depth01_li[i].getElementsByTagName('ul')[j], 500)
                }
            }
        }
    }
    // 하위메뉴 체크후 dropdown controll
    function depth_02_moreClick(obj, tg, event) {
        //클릭한 메뉴에 class="on" 있을때
        if (obj.parentNode.classList.contains("on")) {
            childrenDepthChk(obj, tg);
            //클릭한 메뉴에 class="on" 없을때
        } else {
            var aNextUl = obj.nextElementSibling;
            if(aNextUl != null){
                if (aNextUl.tagName === "UL") {
                    slideUp(aNextUl, 500);
                }
            }
        }
    }

    function childrenDepthChk(obj, tg) {
        var objNext = obj.nextElementSibling;
        var siblings_liFn = siblingsFn(obj, tg);
        var siblings_li = siblings_liFn[1];
        if (objNext !== null && obj.nextElementSibling.tagName === 'UL') {
            for (i = 0; i < siblings_li.length; i++) {
                for (j = 0; j < siblings_li[i].querySelectorAll('ul').length; j++) {
                    var ele = siblings_li[i].querySelectorAll('ul')[j];
                    slideUp(ele, 500);
                    for (k = 0; k < siblings_li[i].querySelectorAll('ul')[j].children.length; k++) {
                        siblings_li[i].querySelectorAll('ul')[j].children[k].classList.remove('on');
                    }
                }
            }
            slideDown(objNext, 500);
        } else {
            //클릭한 메뉴에 하위메뉴가 있을때
            for (i = 0; i < siblings_li.length; i++) {
                for (j = 0; j < siblings_li[i].querySelectorAll('ul').length; j++) {
                    var ele = siblings_li[i].querySelectorAll('ul')[j];
                    slideUp(ele, 500);
                }
            }
        }
    }

    // click.event => on.class controll
    function onControll(obj, tg, event) {
        var siblings_liFn = siblingsFn(obj, tg);
        var siblings_li = siblings_liFn[1];
        if (obj.nextElementSibling != null && obj.nextElementSibling.tagName === 'UL') {
            obj.parentNode.classList.toggle("on");
            for (i = 0; i < siblings_li.length; i++) {
                siblings_li[i].classList.remove("on");
            }
        } else {
            obj.parentNode.classList.toggle("on");
            for (i = 0; i < siblings_li.length; i++) {
                siblings_li[i].classList.remove("on");
            }
        }
    }

    // 하위메뉴 체크후 lastDepths.class 추가
    function lastChildrenChk2(obj) {
        if (!jQuery(obj).children().is('ul')) {
            jQuery(obj).addClass('lastDepth');
            jQuery(obj).children('a').addClass("lastDepths");
        } else if (jQuery(obj).children().is('ul')) {
            if (obj.classList.contains('on')) {
                slideDown(obj.querySelector('ul'), 500);
            }
        }
        if (jQuery(obj).closest('li').hasClass('on')) {
            var loadOn = jQuery(obj).closest("#sideNav").find("li.on");
            $.each(loadOn, function (idx, itm) {
                if (jQuery(itm).parent().parent().is("li")) {
                    jQuery(itm).parent().parents("li").addClass("on");
                    jQuery(itm).parent().parents("li").children("ul").slideDown(500);
                }
            });
        }
    }
    //jQuery "parent().siblings()" => fn() 기능
    function siblingsFn(obj, tg) {
        var childrens01 = obj.parentNode.children;
        var childrens02 = obj.parentNode.parentNode.children;
        var arrNumber01 = []
        var arrNumber02 = []
        for (i = 0; i < childrens01.length; i++) {
            if (childrens01[i] !== tg.parentNode) {
                arrNumber01.push(childrens01[i]);
            }
        }
        for (i = 0; i < childrens02.length; i++) {
            if (childrens02[i] !== tg.parentNode) {
                arrNumber02.push(childrens02[i]);
            }
        }
        return [arrNumber01, arrNumber02];
    }
    //jQuery "parents().siblings()" => fn() 기능
    function getParents(el, parentSelector /* optional */) {
        if (parentSelector === undefined) {
            parentSelector = document;
        }
        var parents = [];
        var p = el.parentNode;
        while (p !== parentSelector) {
            var o = p;
            parents.push(o);
            p = o.parentNode;
        }
        parents.push(parentSelector);

        return parents;
    }
    function depthChk(target) {
        if ($(target).parent().parent().hasClass("depth02")) {
            $(target).next().children().removeClass("on");
            jQuery("#sideNav ul.depth02 ul li a").next().slideUp(500);
        } else if ($(target).parent().parent().hasClass("depth03")) {
            $(target).next().children().removeClass("on");
            jQuery("#sideNav ul.depth03 ul li a").next().slideUp(500);
        } else if ($(target).parent().parent().hasClass("depth04")) {
            jQuery("#sideNav ul.depth04 ul li a").next().slideUp(500);
        }
    }
    for (var i = 0; i < depth01_A.length; i++) {
        depth01_A[i].addEventListener('click', function () {
            if (container.classList.contains("fold")) {
                container.classList.remove("fold");
            }
        });
    }

    jQuery(depth01_A).on("click", function (event) {
        var target = event.target;
        onControll(this, target, event);
        depth_01_Click(this, target, event);
    }).next().children().find('a').on("click", function (event) {
        var target = event.target;
        depthChk(target)
        onControll(this, target, event);
        depth_02_moreClick(this, target, event);
    });

    // 첫로딩시 메뉴 Dropdown
    function firstLoading(depth01) {
        depth01.forEach(function (item, index) {
            if (item.children[0].nextElementSibling == null) {
                item.classList.add('arrow-off');
            }
            if (item.classList.contains('on')) {
                item.querySelector('ul').style.display = 'block';
            }
            function itemsChilds(elements) {
                arrNumber = []
                for (i = 0; i < elements.children.length; i++) {
                    for (j = 0; j < elements.children[i].children.length; j++) {
                        arrNumber.push(elements.children[i].children[j]);
                    }
                }
                return arrNumber;
            }
            var obj02 = itemsChilds(item);
            obj02.forEach(function (item, idx2) {
                lastChildrenChk2(item);
                itemsChilds(item).forEach(function (item, idx3) {
                    lastChildrenChk2(item);
                    itemsChilds(item).forEach(function (item, idx4) {
                        lastChildrenChk2(item);
                        itemsChilds(item).forEach(function (item, idx5) {
                            lastChildrenChk2(item);
                        });
                    });
                });
            });
        });
    }
    firstLoading(depth01);

    var sideNav = document.getElementById("sideNav");
    foldBtn.addEventListener('click', function (event) {
        var target = event.target
        foldPos = document.querySelector(".fold-guide");
        foldPos.classList.toggle('fold');
        container.classList.toggle("fold");
        sideNav = document.getElementById("sideNav");
        sideNav_li = sideNav.getElementsByTagName("li");
        sideNav_li_a = sideNav.querySelectorAll("ul li a");
        if (container.classList.contains("fold")) {
            console.log('close');
            sideNav_li_a.forEach(function (element, index) {
                if (element.nextElementSibling !== null) {
                    slideUp(element.nextElementSibling, 500);
                }
            });
        } else {
            console.log('open');
            for (i = 0; i < sideNav_li.length; i++) {
                if (sideNav_li[i].classList.contains('on')) {
                    slideDown(sideNav_li[i].querySelector('ul'), 500);
                }
            }
        }
        target.setAttribute('disabled', true)
        setTimeout(function () {
            target.removeAttribute('disabled', false);
        }, 500);
    });

    jQuery(document).bind('keypress', function (event) {
        if (event.which === KEYCODE_F && event.shiftKey) {
            foldBtn.click();
        }
    });

    var lastDepth_A = document.querySelectorAll("li.lastDepth a.lastDepths");
    lastDepth_A.forEach(function (itm, idx, arr) {
        itm.addEventListener('click', function (e) {
            var tg = e.target; //alink click DOM정보
            var siblings_liFn = siblingsFn(itm, tg);
            var siblings_li = siblings_liFn[0];

            itm.parentNode.classList.add('on');
            itm.classList.add('active');
            for (i = 0; i < siblings_li.length; i++) {
                for (j = 0; j < siblings_li[i].children.length; j++) {
                    siblings_li[i].classList.remove('on');
                    siblings_li[i].children[i].classList.remove('active');
                }
            }
            var itmParents = getParents(itm);
            var arrNumber = []
            var arrNumber2 = []
            for (i = 0; i < itmParents.length; i++) {
                if (itmParents[i].tagName == "LI") {
                    arrNumber.push(itmParents[i]);
                }
            }
            for (i = 0; i < arrNumber.length; i++) {
                if (arrNumber[i] !== tg.parentNode) {
                    arrNumber2.push(arrNumber[i]);
                }
            }
            // jQuery(arrNumber).siblings().find("a").removeClass("active") 기능
            var lastArray = []
            arrNumber2.forEach(function (item, index, array) {
                var this_aTag = item.children[1].children;
                var lastArr = array.length - 1;
                lastArray.push(array[lastArr]);
                for (i = 0; i < this_aTag.length; i++) {
                    if (this_aTag[i].querySelector('a') !== tg) {
                        this_aTag[i].querySelector('a').classList.remove('active');
                    }
                }
            });
            var lastNum = lastArray.length - 1;
            var lastArrayChild = lastArray[lastNum].parentNode.children;
            var aArray = [];
            for (i = 0; i < lastArrayChild.length; i++) {
                var all_aTag = lastArrayChild[i].querySelectorAll('a');
                aArray.push(all_aTag);
            }
            for (i = 0; i < aArray.length; i++) {
                for (j = 0; j < aArray[i].length; j++) {
                    var aLinks = aArray[i][j];
                    if (aLinks !== tg) {
                        aLinks.classList.remove('active');
                    }
                }
            }
        });
    });

}

/* ---------------------------------------------- //sideNav() 끝 -------------------------------------------------------- */
function mainCenterTabEvent() { // 탭이벤트

    var tabBtn = jQuery(".tabs-btn li");
    var tabActive = jQuery(".tabs-btn li.on").position().left;
    var width = jQuery(".tabs-btn li.on").width();
    jQuery(".search-info > .bar").css("transform", "translateX(" + tabActive + "px)").css("width", width + "px");
    tabBtn.closest(".tabs-btn").next().next().children().hide();
    $.each(tabBtn, function (idx, itm) {
        if (jQuery(itm).hasClass('on') == true) {
            var target = jQuery(this).children().attr('href');
            tabBtn.closest(".tabs-btn").next().next().children(target).show();
        }
    });

    tabBtn.children().on("click", function () {
        var activeTab = jQuery(this).attr("href");
        jQuery(this).parent().addClass("on").siblings().removeClass("on");
        jQuery(this).closest(".tabs-btn").next().next().children(activeTab).show().stop().animate({ opacity: 1, filter: "Alpha(opacity=100)" }, 1000).siblings().hide().stop().animate({ opacity: 0, filter: "Alpha(opacity=0)" })

        return false;

    });
    tabBtn.children().on('click', function () {
        var t = jQuery(this).parent();
        var tabActive = jQuery(".tabs-btn li.on").position().left;
        var width = jQuery(".tabs-btn li.on").width();
        jQuery(".search-info > .bar").css("transform", "translateX(" + tabActive + "px)").css("width", width + "px");
        return false;
    });

}
function calendar() { //datepicker
    var date = jQuery('.datepickers').find('.dateficker');
    $.each(date, function (idx, itm) {
        var dateID = jQuery(itm).attr('id');
        var dateID = '#' + dateID;

        jQuery(dateID).datepicker({
            showOn: "button",
            buttonImage: "../static/images/common/calendar.png",
            buttonImageOnly: true,
            buttonText: "Select date",
            dateFormat: 'yy-mm-dd',
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dayNames: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            showMonthAfterYear: true,
            yearSuffix: '년',
            prevText: '이전 달',
            nextText: '다음 달',
        });

    });
}
function contentResizeHeight() { // content 높이값 자동 리사이즈
    content = document.getElementById('content');
    cntHeight = content.offsetHeight;
    cntHeaderHeight = content.querySelector('.content-header').offsetHeight;
    cntHeaderHeight = 37; //cntHeaderHeight값을 가져오지못하고있기때문에 수동으로 37값 입력
    jQuery(".content-inner").css({ height: "calc(100% - " + cntHeaderHeight + "px)" });
}
function modifyProductQuantity(id, quantity) { // year : up-down
    if (isNaN(jQuery("#" + id).val())) {
        jQuery("#" + id).focus();
        jQuery("#" + id).val(0);
        return;
    }
    var q = parseInt(jQuery("#" + id).val()) + parseInt(quantity);
    jQuery("#" + id).val(q);
}
function accordion() { // accordion 이벤트
    var $accordion = jQuery(".accordion");
    $accordion.find("dt a").on("click", function () {
        var display = jQuery(this).parent().next().css("display");

        //dd태그가 보이지 않는 경우만 열릴수 있도록 제어
        if (display == "none") {
            //초기화
            $accordion.find("dt.on").removeClass("on").next().stop().slideUp();
            //현재설정
            jQuery(this).parent().addClass("on").next().stop().slideDown();
        }

        return false;
    });
}
function containerHeight() { //고객센터 및 로그인 서브페이지 기본높이값 리사이즈 계산
    var windowHeight = jQuery(window).outerHeight();
    var container = jQuery("#container");
    var body = jQuery("body").height();
    container.css({ minHeight: (windowHeight - 150) + "px" });
}
function inputWidth() { //input, select 자동 width 스타일적용 ex) ( data-width="32" ) ==> style="width:32px";
    var inputs = jQuery("input, .quantity, select");
    $.each(inputs, function (idx, itm) {
        var inputs_width = jQuery(itm).attr('data-width');
        jQuery(itm).css({ width: inputs_width + "px", minWidth: inputs_width + "px" })
    });
}
function contentDropDown() {
    jQuery(".toggle-btn").next().hide();
    jQuery(".toggle-btn").on("click", function () {
        jQuery(this).toggleClass("on");
        jQuery(this).next().slideToggle();
        return false;
    });
}
function loginBtn() { //로그인버튼 효과
    jQuery('.login-btn').on('click', function (event) {
        event.preventDefault();
        var $div = jQuery('<div/>'),
            btnOffset = jQuery(this).offset(),
            xPos = event.pageX - btnOffset.left,
            yPos = event.pageY - btnOffset.top;

        $div.addClass('circle').css({ top: yPos - 15, left: xPos - 15 }).appendTo(jQuery(this));
        window.setTimeout(function () {
            $div.remove();
        }, 2000);

    });
}
function allSserch() {
    var KEYCODE_ESC = 27;
    var searchBtn = jQuery("#mainNav .search");
    var searchArea = jQuery("#All-search-area");
    var searchDel = jQuery(".search-del");
    var searchInput = searchArea.children().children('input[type="text"]');
    // searchBtn.parent().css("padding-top","3px");

    function searchOff() {
        searchBtn.removeClass("on")
        searchArea.removeClass("open");
        jQuery("#mask02").fadeOut().removeAttr("tabIndex");
        searchInput.val("");
        searchInput.removeClass("focus");
    }

    searchBtn.on("click", function () {
        jQuery(this).toggleClass("on");
        searchArea.toggleClass("open");
        if (jQuery(this).hasClass("on")) {
            jQuery("#mask02").fadeIn().attr("tabIndex", 0);
        } else {
            jQuery("#mask02").fadeOut().removeAttr("tabIndex");
            searchInput.val("");
            searchInput.removeClass("focus");
        }
    });
    searchInput.keyup(function () {
        if (searchInput.val().length >= 1) {
            searchInput.addClass("focus");
        } else {
            searchInput.removeClass("focus");
        }
    })

    searchDel.on("click", function () {
        searchInput.val("");
        searchInput.removeClass("focus");
    });

    jQuery("#mask02").on("click", function () {
        searchOff();
    });

    jQuery(document).keyup(function (e) {
        if (e.which == KEYCODE_ESC || e.keyCode == KEYCODE_ESC) {
            searchBtn.removeClass("on");
            searchArea.removeClass("open");
            jQuery("#mask02").fadeOut().removeAttr("tabIndex");
            searchInput.val("");
            searchInput.removeClass("focus");
        }
    });
}
function startJS() {
    jQuery(document).on('click', 'a[href="#none"]', function (e) { e.preventDefault() });
    if (jQuery('html').is('.ie67, .ie7, .ie8, .ie9')) {
        jQuery('.ie_alert_text').show().html('<div class="title">현재 사이트는 IE9 이하의 하위브라우저를 지원하지 않습니다. <br />브라우저를 최신 버전으로 <strong>업데이트</strong>해 주세요.</div><a href="https://www.google.com/intl/ko/chrome/" target="_blank" class="btn">Chrome 브라우저 다운로드</a>');
        jQuery('#bg').show().addClass('pointer_off');
    }
}
function searchRowBoxLine() {
    var rowContainer = jQuery(".search-table-area.type03");
    var lineNumber = rowContainer.attr('data-row');
    var lineNumber = lineNumber - 1;
    rowContainer.children().children('ul').eq(lineNumber).css({ paddingBottom: "20px", position: "relative" }).append("<div class='line'></div>");
}
function file() { // 파일 업로드
    var fileTarget = jQuery('.filebox .upload-hidden');
    fileTarget.on('change', function () {
        if (window.FileReader) {
            // 파일명 추출
            var filename = jQuery(this)[0].files[0].name;
        }

        else {
            // Old IE 파일명 추출
            var filename = jQuery(this).val().split('/').pop().split('\\').pop();
        };

        jQuery(this).siblings('.upload-name').val(filename);
    });
    //preview image 
    var imgTarget = jQuery('.preview-image .upload-hidden');
    imgTarget.on('change', function () {
        var parent = jQuery(this).parent();
        parent.children('.upload-display').remove();

        if (window.FileReader) {
            //image 파일만
            if (!jQuery(this)[0].files[0].type.match(/image\//)) return;

            var reader = new FileReader();
            reader.onload = function (e) {
                var src = e.target.result;
                parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="' + src + '" class="upload-thumb"></div></div>');
            }
            reader.readAsDataURL(jQuery(this)[0].files[0]);
        }
        else {
            jQuery(this)[0].select();
            jQuery(this)[0].blur();
            var imgSrc = document.selection.createRange().text;
            parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');

            var img = jQuery(this).siblings('.upload-display').find('img');
            img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\"" + imgSrc + "\")";
        }
    });
}
function getSelectValue(obj) {
    var select_val = jQuery(obj).val();
    jQuery(obj).prev().attr('data-select', select_val);
    console.log(select_val);
}
function zoomOption() {
    var zoomBtn = $(".zoom-btn");
    zoomBtn.on("click",function(){
        $(this).toggleClass("on");
        jQuery("body.stat").toggleClass("zoom");
    });
    jQuery(document).bind('keypress', function (event) {
        var cntHeight = jQuery("#content").height();
        var cntHeaderHeight = jQuery("#content .content-header .content-title").height();
        var cntInnerHeight = cntHeight - cntHeaderHeight - 40;
        var header = jQuery("#header").height();
        var footer = jQuery("#footer").height();
        var KEYCODE_A = 65;
        
        if (event.which === KEYCODE_A && event.shiftKey) {
            zoomBtn.click();
        }
    });
}
function CapsLockChk() { //capslock 체크
    var input = document;
    var text = document.getElementById("capslockMsg");
    if (text != null) {
        input.addEventListener("keyup", function (event) {
            if(typeof event.getModifierState != "undefined"){
                if (event.getModifierState("CapsLock")) {
                    text.style.display = "block";
                } else {
                    text.style.display = "none";
                }
            }
        });
    }
}
function manual(){
    var zoomBtnPosLeft = $(".zoom-btn").position().left;
    $(".zoom-guide").css({left:zoomBtnPosLeft+"px"});
    $(".start-btn").on("click",function(){
        $(".manual").fadeOut();
    });
}
 





