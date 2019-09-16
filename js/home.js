class Home {
    constructor() {
        this.manuals = allManuals[0].manuals;
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
            </div>

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

            <div class="manuals">
                <ul>
                </ul>
            </div>
            <div class="home-main-3">
                <ul>
                    <li class="button erp">Emergency Response Plan</li>
                    <a href="https://drive.google.com/drive/folders/0B9Uzp-tOQL7CVkE3QjdBaGl3YlU" target="_blank"><li class="button">Ica's</li></a>
                    <a href="https://mybell.com/bell/en/USD/login" target="_blank"><li class="button">Bell Site</li><a>
                </ul>
            </div>
            <h2 class="power-trend-chart">Power Trent Charts</h2>
            <div class="home-main-2">
                <ul>
                    <li class="button pdf-206-407">206/407</li>
                    <li class="button pdf-412">412</li>
                </ul>
            </div>
        </div>`

        let generatedManuals = '';

        for (let i = 0; i < this.manuals.length; i++){
            generatedManuals += `<li class="manual-${i}">${this.manuals[i].manual}</li>`
        }

        DOM(`.manuals > ul`).innerHTML = generatedManuals;
        DOM(`.nav-home`).style.color = '#709eff';

        for (let i = 0; i < this.manuals.length; i++){
            DOM(`.manuals > ul > .manual-${i}`).addEventListener("click", () => {
                console.log(`this is: ${i}`)
                DOM(`.pdf-viewer`).style.display = 'block';
                DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                makePDFViewer(this.manuals[i].filePath);
                TweenMax.to('.pdf-viewer', 0.5, { opacity: 1, ease: Power4, })
            })
        }

        TweenMax.to('.manuals', 1, { scaleY: 1, opacity: 1, ease: Elastic,})
        TweenMax.to('.home-main-3', 1, { scaleY: 1, opacity: 1, ease: Elastic,})
        TweenMax.to('h2', 1, { scaleY: 1, opacity: 1, ease: Elastic,})
        TweenMax.to('.home-main-2', 1, { scaleY: 1, opacity: 1, ease: Elastic,})

        DOM(`.erp`).addEventListener("click", () => {
            DOM(`.pdf-viewer`).style.display = 'block';
            DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
            makePDFViewer(allManuals[0].emergency_response_plan[0].filePath);
        })
        DOM(`.pdf-206-407`).addEventListener("click", () => {
            DOM('#download').src = allManuals[0].power_trent_charts[0].filePath;
        })
        DOM(`.pdf-412`).addEventListener("click", () => {
            DOM(`.pdf-viewer`).style.display = 'block';
            DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
            makePDFViewer(allManuals[0].power_trent_charts[1].filePath, 0.20);
        })

    }

}