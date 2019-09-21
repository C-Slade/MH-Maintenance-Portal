class Memos {
    constructor() {
        this.maintenance_memos = allManuals[5].maintenance_memos;
        this.operation_memos = allManuals[5].operations_memos;
    }

    appendContent() {
        DOM('body').innerHTML += `
        <div class="content">
            <div class="nav">
                <ul class="ul-nav">
                    <li class="nav-home">Home</li>
                    <li class="nav-calm">Calm</li>
                    <li class="nav-manuals">Manuals</li>
                    <li class="nav-training">Training</li>
                    <li class="nav-safety">Safety</li>
                    <li class="nav-memos">Memos</li>
                </ul>
                <nav class="top-3-nav">
                    <ul class="ul-top-3">
                        <li class="nav-manuals">Manuals</li>
                        <li class="nav-oas-cards">oas cards</li>
                    </ul>
                </nav>
            </div>

            <h2>Maintenance Memos</h2>

            <div class="line"></div>

            <div class="main_memos-container"></div>

            <div class="line">
                <div class="operations-memos">operations memos</div>
            </div>

            <div class="operation_memos-container"></div>

            <div class="pdf-viewer">
                <div class="button-container">
                    <button class="Prev">Prev</button>
                    <button class="Next">Next</button>
                    <div class="count">Page number: 1</div>
                    <svg height="15" width="15">
                        <line x1="0" y1="0" x2="15" y2="15" />
                        <line x1="15" y1="0" x2="0" y2="15" />
                    </svg>
                </div>
            </div>
        </div>
        `


        DOM('.nav-memos').style.color = '#6596ff';

        this.maintenance_memos.forEach(manual => {
            DOM('.main_memos-container').innerHTML += `
                <div class="button">${manual.name}</div>
            `
        });

        this.operation_memos.forEach(manual => {
            DOM('.operation_memos-container').innerHTML += `
                <div class="button">${manual.name}</div>
            `
        });

        TweenMax.to('.main_memos-container', 0.50, { scaleY: 1, opacity: 1, ease: Elastic, })
        TweenMax.to('.operation_memos-container', 0.50, { scaleY: 1, opacity: 1, ease: Elastic, })

        DOM('body').addEventListener("click", (e) => {
            const main_memos = DOM_All('.main_memos-container > .button');
            const operation_memos = DOM_All('.operation_memos-container > .button');

            main_memos.forEach((element, i) => {
                if (e.target == element) {
                    DOM(`.pdf-viewer`).style.display = 'block';
                    DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                    makePDFViewer(this.maintenance_memos[i].filePath);
                }
            });
            operation_memos.forEach((element, i) => {
                if (e.target == element) {
                    DOM(`.pdf-viewer`).style.display = 'block';
                    DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                    makePDFViewer(this.operation_memos[i].filePath);
                }
            });
        })
    }

}