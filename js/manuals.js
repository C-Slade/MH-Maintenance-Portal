class Manuals {
    constructor() {

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

            <div class="options"></div>

            <div class="manuals-manual-wrapper"></div>
                        
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

        DOM('.nav-manuals').style.color = '#6596ff';
        DOM('.top-3-nav > .ul-top-3 > .nav-manuals').style.backgroundColor = '#6596ff';


        let manual_filepaths = [];

        function createManuals() {
            let manual_wrappers = '';

            allManuals[2].manual_types.forEach(manual_type => {
                let manuals = '';

                manual_type.manuals.forEach(manual => {
                    manuals += `<p class="manual">${manual.manual}</p>`;
                    manual_filepaths.push(manual.filePath);
                });

                let manual_wrapper = `
            <div class="manual-wrapper">
                <div class="manual-type">${manual_type.type}</div>
                ${manuals}
            </div>
            `

                manual_wrappers += manual_wrapper;
            });
            DOM('.manuals-manual-wrapper').innerHTML = manual_wrappers;
            TweenMax.to('.manuals-manual-wrapper', 0.50, { scaleY: 1, opacity: 1, ease: Elastic, })
        };

        createManuals();

        DOM('body').addEventListener("click", (e) => {
            const manual_links = DOM_All('.manuals-manual-wrapper > .manual-wrapper > p.manual');
            const oas_links = DOM_All('.manuals-manual-wrapper > .manual-wrapper > p.oas-card');
            const oas_filepaths = Manual_Oas_cards.get_oas_cards();

            for (let i = 0; i < manual_links.length; i++) {
                let pTag = manual_links[i];

                if (e.target == pTag) {
                    DOM(`.pdf-viewer`).style.display = 'block';
                    DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                    makePDFViewer(manual_filepaths[i]);
                    TweenMax.to('.pdf-viewer', 0.5, { opacity: 1, ease: Power4, })
                }
            }
            for (let i = 0; i < oas_links.length; i++) {
                let pTag = oas_links[i];

                if (e.target == pTag) {
                    DOM(`.pdf-viewer`).style.display = 'block';
                    DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                    makePDFViewer(oas_filepaths[i]);
                    TweenMax.to('.pdf-viewer', 0.5, { opacity: 1, ease: Power4, })
                }
            }
        })

        const option_links = [
            {
                name: 'rolls royce',
                link: '../Docs/Manuals/Options/Example-pdf.pdf',
                warning_message: true,
            },
            {
                name: 'tool control',
                link: '../Docs/Manuals/Options/Example-pdf.pdf'
            },
            {
                name: 'master pubs',
                link: '../Docs/Manuals/Options/Example-pdf.pdf'
            },
            {
                name: 'gmm',
                link: '../Docs/Manuals/Options/Example-pdf-2.pdf'
            },
            {
                name: 'flight permit',
                link: '../Docs/Manuals/Options/Example-pdf.pdf'
            },
        ]

        option_links.forEach(option => {
            let name = option.name.replace(' ', '-');
            let css_class = 'button';
            if (option.warning_message) {
                css_class += ' rolls-royce-login'
            }
            DOM('.options').innerHTML += `<div class="${css_class}" id="${name}">${option.name}</div>`;
        });

        option_links.forEach(button => {
            let name = button.name.replace(' ', '-');
            let link = button.link.replace('http://127.0.0.1:5500', '..');
            if (!button.warning_message) {
                DOM(`.options > #${name}`).addEventListener("click", () => {
                    DOM(`.pdf-viewer`).style.display = 'block';
                    DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                    makePDFViewer(link);
                    TweenMax.to('.pdf-viewer', 0.5, { opacity: 1, ease: Power4, })
                })
            }
        });

        DOM('body').addEventListener("click", (e) => {
            let target = e.target;
            if (target == DOM('.options > .rolls-royce-login')) {
                if (!DOM('.warning')) {
                    let newDiv = DOM_Create('div');
                    newDiv.className = 'warning';
                    DOM('body > .content').append(newDiv);
                    DOM('.content .warning').innerHTML = `
                    <i class="material-icons">clear</i>
                    <h2>Rolls-Royce login</h2>
                    <ul>
                        <li>User: <span id="user-text">gwhite@maritimehelicopters.com</span></li>
                        <li>Password: <span id="pass-text">MarH3407</span></li>
                    </ul>
                    <a href="https://www.aviall.com/aviallstorefront/" class="go" target="_Blank">GO</a>
                `
                    TweenMax.to('.warning', 0.50, { opacity: 1, ease: Elastic, })
                }
            }

            if (target == DOM('.warning > i')) {
                TweenMax.to('.warning', 0.35, { opacity: 0, ease: Elastic, })
                setTimeout(() => {
                    DOM('body > .content > .warning').remove();
                }, 350)
            }
            if (target == DOM('.warning > .go')) {
                DOM('body > .content > .warning').remove();
            }

            if (target == DOM('.nav-oas-cards')) {
                TweenMax.to('.manuals-manual-wrapper', 0.50, { scaleY: 0, opacity: 0, ease: Elastic, })
                const oas_cards = new Manual_Oas_cards();
                setTimeout(() => {
                    oas_cards.appendContent();
                },500)

                DOM('.nav-oas-cards').style.backgroundColor = '#6596ff'
                DOM('.ul-top-3 > .nav-manuals').style.backgroundColor = 'slategray'
            }

            if (target == DOM('.ul-top-3 > .nav-manuals')) {
                TweenMax.to('.manuals-manual-wrapper', 0.50, { scaleY: 0, opacity: 0, ease: Elastic, })
                DOM('.nav-oas-cards').style.backgroundColor = 'slategray'
                DOM('.ul-top-3 > .nav-manuals').style.backgroundColor = '#6596ff'
                setTimeout(() => {
                    createManuals();
                    DOM('.manuals-manual-wrapper').classList.remove('display-flex')
                    DOM('.manuals-manual-wrapper > .manual-wrapper').classList.remove('display-grid')
                }, 500)
            }
        })

        TweenMax.to('.options', 0.50, { scaleY: 1, opacity: 1, ease: Elastic, })
    }
}

class Manual_Oas_cards{
    constructor() {
        
    }

    appendContent() {
        let oas_cards = '';
        allManuals[2].oas_cards.forEach(oas_card => {
            oas_cards += `<p class="oas-card">${oas_card.name}</p>`
        });
        let dom_oas_cards = `
        <div class="manual-type">Oas Cards</div>
            <div class="manual-wrapper">
                ${oas_cards}
            </div> `
        DOM('.manuals-manual-wrapper').innerHTML = dom_oas_cards;
        DOM('.manuals-manual-wrapper').className += ' display-flex';
        DOM('.manuals-manual-wrapper > .manual-wrapper').className += ' display-grid';
        TweenMax.to('.manuals-manual-wrapper', 0.50, { scaleY: 1, opacity: 1, ease: Elastic, })
    }

    static get_oas_cards() {
        let oas_cards = [];
        allManuals[2].oas_cards.forEach(oas_card => {
            oas_cards.push(oas_card.filePath);
        });
        return oas_cards;
    }

}