function DOM(Selector) {
    return document.querySelector(Selector);
}
function DOM_All(Selector) {
    return document.querySelectorAll(Selector);
}
function DOM_Create(Selector) {
    return document.createElement(Selector);
}
const home = new Home();
const calm = new Calm();
const manuals = new Manuals();
const training = new Training();
const safety = new Safety();
const memos = new Memos();
document.onload = home.appendContent();
// document.onload = calm.appendContent();

DOM(`body`).addEventListener('click', (e) => {
    const target = e.target;

    function animateDropDownNav_remove() {
        setTimeout(() => {
            DOM('.ham-nav').remove();
        }, 500)
        TweenMax.to('.ham-nav', 0.5, { scaleY: 0, opacity: 0, ease: Elastic, })
    }
    if (target == DOM('.content > .nav > .ul-nav > .nav-home')) {
        DOM('.content').remove();
        home.appendContent();
    }
    if (target == DOM('.content > .nav > .ul-nav > .nav-calm')) {
        DOM('.content').remove();
        calm.appendContent();
        TweenMax.to('.top-3-nav > .ul-top-3', 0.50, { scaleY: 1, opacity: 1, ease: Elastic, })
    }
    if (target == DOM('.content > .nav > .ul-nav > .nav-manuals')) {
        DOM('.content').remove();
        manuals.appendContent();
        TweenMax.to('.top-3-nav > .ul-top-3', 0.50, { scaleY: 1, opacity: 1, ease: Elastic, })
    }
    if (target == DOM('.content > .nav > .ul-nav > .nav-training')) {
        DOM('.content').remove();
        training.appendContent();
        TweenMax.to('.top-3-nav > .ul-top-3', 0.50, { scaleY: 1, opacity: 1, ease: Elastic, })
    }
    if (target == DOM('.content > .nav > .ul-nav > .nav-safety')) {
        DOM('.content').remove();
        safety.appendContent();
    }
    if (target == DOM('.content > .nav > .ul-nav > .nav-memos')) {
        DOM('.content').remove();
        memos.appendContent();
    }
    if (target == DOM('body > nav > .click-ham')) {
        const newDiv = DOM_Create('div');
        const newUl = DOM_Create('ul');
        console.log(e.target)

        DOM('body').append(newDiv);
        newDiv.className = 'ham-nav';
        DOM('.ham-nav').appendChild(newUl);

        const classNames = [
            'nav-home', 'nav-calm', 'nav-manuals',
            'nav-training', 'nav-safety', 'nav-memos']
        
        classNames.forEach(classname => {
            const newLi = DOM_Create('li');
            DOM('.ham-nav > ul').appendChild(newLi);
            newLi.className = classname
            let html = classname.replace('nav-', '');
            newLi.innerHTML = html;
        });

        TweenMax.to('.ham-nav', 1, { scaleY: 1, opacity: 1, ease: Elastic, })


        DOM('.click-ham').style.display = 'none';
        DOM('.click-remove').style.display = 'block';
        DOM('nav > .hamburger-menu').style.display = 'none'
        DOM('nav > .remove-menu').style.display = 'block'
        DOM('.ham-nav').style.width = `${screen.width}px`;
        DOM('.ham-nav').style.height = `${screen.height}px`;

    } else if (target == DOM('nav > .click-remove')) {
        DOM('.click-ham').style.display = 'block';
        DOM('.click-remove').style.display = 'none';
        DOM('nav > .remove-menu').style.display = 'none'
        DOM('nav > .hamburger-menu').style.display = 'block'
        animateDropDownNav_remove();
    }

    if (target == DOM('.ham-nav > ul > .nav-home')) {
        DOM('.click-ham').style.display = 'block';
        DOM('.click-remove').style.display = 'none';
        DOM('.ham-nav').remove();
        DOM('nav > .remove-menu').style.display = 'none'
        DOM('nav > .hamburger-menu').style.display = 'block'
        DOM('.content').remove();
        home.appendContent();
    }

    if (target == DOM('.ham-nav > ul > .nav-calm')) {
        DOM('.click-ham').style.display = 'block';
        DOM('.click-remove').style.display = 'none';
        DOM('.ham-nav').remove();
        DOM('nav > .remove-menu').style.display = 'none'
        DOM('nav > .hamburger-menu').style.display = 'block'
        DOM('.content').remove();
        calm.appendContent();
    }
    if (target == DOM('.ham-nav > ul > .nav-manuals')) {
        DOM('.click-ham').style.display = 'block';
        DOM('.click-remove').style.display = 'none';
        DOM('.ham-nav').remove();
        DOM('nav > .remove-menu').style.display = 'none'
        DOM('nav > .hamburger-menu').style.display = 'block'
        DOM('.content').remove();
        manuals.appendContent();
    }
    
})


function makePDFViewer(passedURL) {
    let url = passedURL;
    DOM('.pdf-viewer .button-container > svg').addEventListener('click', () => {
        DOM(`.pdf-viewer`).style.display = 'none';
        DOM(`.pdf-viewer`).style.opacity = '0';
        DOM('#pdf-render').remove();
        url = '';
    })
    let scale = 0.65;
    if (screen.width >= 1920) {
        scale = 1;
    } else if (screen.width > 635) {
        scale = 0.55;
    } else if (screen.width > 350) { 
        scale = 0.50;
    } else {
        scale = 0.48;
    }

    let pdfDoc = null,
        pageNum = 1,
        pageIsRendering = false,
        pageNumIsPending = null;

    const canvas = DOM('#pdf-render'),
        ctx = canvas.getContext('2d');

    const renderPage = num => {
        pageIsRendering = true;

        pdfDoc.getPage(num).then(page => {
            const viewport = page.getViewport({ scale })
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderCtx = {
                canvasContext: ctx,
                viewport
            }
            page.render(renderCtx).promise.then(() => {
                pageIsRendering = false;

                if (pageNumIsPending !== null) {
                    renderPage(pageNumIsPending);
                    pageNumIsPending = null;
                }
            });

            DOM('.count').textContent = `Page number: ${num}/${pdfDoc.numPages}`;
            DOM('.button-container').style.width = `${canvas.width}px`;
            TweenMax.to('.pdf-viewer', 0.5, { opacity: 1, ease: Power4, })
            console.log(canvas.width)
        })
    }

    const queueRenderPage = num => {
        if (pageIsRendering) {
            pageNumIsPending = num;
        } else {
            renderPage(num)
        }
    }

    const showPrevPage = () => {
        if (pageNum <= 1) {
            return;
        }
        pageNum--;
        queueRenderPage(pageNum)
    }

    const showNextPage = () => {
        if (pageNum >= pdfDoc.numPages) {
            return;
        }
        pageNum++;
        queueRenderPage(pageNum)
    }


    pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;
        renderPage(pageNum)
    })

    DOM('.Prev').addEventListener('click', showPrevPage)
    DOM('.Next').addEventListener('click', showNextPage)
}
