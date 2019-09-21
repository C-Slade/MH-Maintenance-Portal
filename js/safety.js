class Safety {
    constructor() {
        this.main_manuals = allManuals[4].main;
        this.forms = allManuals[4].forms;
        this.archive = allManuals[4].archive;
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
        
            <h2>Quality and Safety</h2>
            <p>DENNIS S BUSCH, QUALITY AND SAFETY MANAGER - <a href="mailto:name@email.com" target="_Blank">Email</a></p>

            <div class="line break_1"></div>

            <div class="main-container grid"></div>

            <div class="line break_2">
                <div class="forms">Forms</div>
            </div>

            <div class="forms-containter grid"></div>

            <div class="line break_3">
                <div class="Archive">Archive</div>
            </div>

            <div class="archive-containter grid"></div>

        
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
        </div>`

        DOM('.nav-safety').style.color = '#6596ff';

        this.main_manuals.forEach(manual => {
            DOM('.main-container').innerHTML += `
                <div class="button">${manual.name}</div>
            `
        });

        this.forms.forEach(manual => {
            DOM('.forms-containter').innerHTML += `
                <div class="button">${manual.name}</div>
            `
        });

        this.archive.forEach(manual => {
            DOM('.archive-containter').innerHTML += `
                <div class="button">${manual.name}</div>
            `
        });

        TweenMax.to('.grid', 0.50, { scaleY: 1, opacity: 1, ease: Elastic, })


        DOM('body').addEventListener("click", (e) => {
            const main_container = DOM_All('.main-container > .button');
            const forms_containter = DOM_All('.forms-containter > .button');
            const archive_containter = DOM_All('.archive-containter > .button');

            main_container.forEach((element, i) => {
                if (e.target == element) {
                    DOM(`.pdf-viewer`).style.display = 'block';
                    DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                    if (!this.main_manuals[i].google_drive) {
                        makePDFViewer(this.main_manuals[i].filePath);
                    }
                }
            });
            forms_containter.forEach((element, i) => {
                if (e.target == element) {
                    DOM(`.pdf-viewer`).style.display = 'block';
                    DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                    makePDFViewer(this.forms[i].filePath);
                }
            });
            archive_containter.forEach((element, i) => {
                if (e.target == element) {
                    DOM(`.pdf-viewer`).style.display = 'block';
                    DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                    makePDFViewer(this.archive[i].filePath);
                }
            });
        })
    }

}