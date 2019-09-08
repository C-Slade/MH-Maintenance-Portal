class Home {
    constructor() {
        this.image = '../img/heli-6.jpg';
        this.manuals = this.getManuals();

    }
    getManuals() {
        let homeManuals = allManuals[0].manuals;
        let manuals = [];
        homeManuals.forEach(manual => {
            let thisManual = {
                name: manual.name,
                filePath: manual.filePath
            };
            manuals.push(thisManual)
        });
        return manuals;
    };

    appendContent() {
        DOM('.content').innerHTML += `
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
        <h2>Power Trent Charts</h2>
        <div class="home-main-2">
            <ul>
                <li class="button pdf-206-407">206/407</li>
                <li class="button pdf-412">412</li>
            </ul>
        </div>`

        
        let generatedManuals = '';

        for (let i = 0; i < this.manuals.length; i++){
            generatedManuals += `<li class="manual-${i}">${this.manuals[i].name}</li>`
        }

        DOM(`.manuals > ul`).innerHTML = generatedManuals;
        DOM(`.nav-home`).style.color = '#709eff';
        DOM(`body`).style.backgroundImage = `url(${this.image})`

        for (let i = 0; i < this.manuals.length; i++){
            DOM(`.manuals > ul > .manual-${i}`).addEventListener("click", () => {
                console.log(`this is: ${i}`)
                DOM(`.pdf-viewer`).style.display = 'block';
                DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                makePDFViewer(this.manuals[i].filePath);
            })
        }

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