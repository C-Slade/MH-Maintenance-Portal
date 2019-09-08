function DOM(Selector) {
    return document.querySelector(Selector);
}
const home = new Home();
const calm = new Calm();
const manuals = new Manuals();
const training = new Training();
const safety = new Safety();
const memos = new Memos();
document.onload = home.appendContent();

DOM(`nav > svg`).addEventListener('click', () => {
    DOM('body').innerHTML += `
        <div class="ham-nav">
            <ul>
                <li class="nav-home">Home</li>
                <li class="nav-calm">Calm</li>
                <li class="nav-manuals">Manuals</li>
                <li class="nav-training">Training</li>
                <li class="nav-safety">Safety</li>
                <li class="nav-memos">Memos</li>
            </ul>
        </div>
    `
    DOM('nav > svg').style.display = 'none';
    DOM('nav').innerHTML += `
    <svg height="40" width="40" class="remove-menu">
        <line x1="0" y1="0" x2="40" y2="40" />
        <line x1="40" y1="0" x2="0" y2="40" />
    </svg>`
    DOM('.ham-nav').style.width = `${screen.width}px`;
    DOM('.ham-nav').style.height = `${screen.height}px`;
    DOM('.remove-menu').addEventListener('click', () => {
        DOM('.remove-menu').style.display = 'none'
        DOM('nav').innerHTML += `
        <svg height="48" width="50">
            <line x1="10" y1="15" x2="50" y2="15" />
            <line x1="10" y1="25" x2="50" y2="25" />
            <line x1="10" y1="35" x2="50" y2="35" />
        </svg>`
        DOM('.ham-nav').remove();
    })

})

function makePDFViewer(passedURL, passedScale) {
    let url = passedURL;
    DOM('.pdf-viewer .button-container > svg').addEventListener('click', () => {
        DOM(`.pdf-viewer`).style.display = 'none';
        DOM('#pdf-render').remove();
        url = '';
    })
    let scale = 0.65;
    if (screen.width >= 1920) {
        scale = 1 || passedScale;
    } else if (screen.width <= 635) {
        scale = 0.55 || passedScale;
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

            DOM('.count').textContent = `Page number: ${num}/${pdfDoc.numPages}`
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
