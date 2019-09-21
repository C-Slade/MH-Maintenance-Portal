class Calm {
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
                    <ul class="ul-top-3" id="calm-options"> 
                        <li class="calm-reports">Calm Reports</li>
                        <li class="flt-time">flt-time</li>
                        <li class="dashboard">dashboard</li>
                    </ul>
                </nav>
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
            `
        DOM('.nav-calm').style.color = '#6596ff'
        
        const calm_reports = new Calm_calm_reports();
        calm_reports.appendContent();

        // TweenMax.to('.top-3-nav > .ul-top-3', 0.50, { scaleY: 1, opacity: 1, ease: Elastic, })

        DOM(".content").addEventListener("click", (e) => {
            const target = e.target;

            if (target == DOM('.top-3-nav > .ul-top-3 > .calm-reports')) {
                calm_reports.appendContent();
            }
            if (target == DOM('.top-3-nav > .ul-top-3 > .flt-time')) {
                const flt_time = new Calm_flt_time;
                flt_time.appendContent();
                setTimeout(() => {
                    TweenMax.to('.content > .iframe', 0.75, { scaleY: 1, opacity: 1, height: '650%', ease: Elastic, })
                },0)
            }
            if (target == DOM('.top-3-nav > .ul-top-3 > .dashboard')) {
                const dashboard = new Calm_dashboard;
                dashboard.appendContent();
                setTimeout(() => {
                    TweenMax.to('.content > .iframe', 0.75, { scaleY: 1, opacity: 1, height: '650%', ease: Elastic, })
                },0)
            }
        })
    }
}

class Calm_calm_reports {
    constructor() {
        
    }

    appendContent() {
        if (DOM('.content > .calm-reports')) {
            DOM('.content > .calm-reports').remove();
            DOM('.content > .abb_full-toggle').remove();
            DOM('.content > .calm-reports-manuals').remove();
        }

        if (DOM('.content > .iframe')) {
            DOM('.content > .iframe').remove();
        }

        DOM('.flt-time').style.backgroundColor = 'slategray'
        DOM('.dashboard').style.backgroundColor = 'slategray'
        DOM('.calm-reports').style.backgroundColor = '#6596ff'

        DOM('.content').innerHTML += `
            <h2 class="calm-reports">Calm Reports</h2>

            <div class="abb_full-toggle">
                <button class="abbreviated">Abbreviated</button>
                <button class="full">Full</button>
            </div>

            <div class="calm-reports-manuals">
            
            </div>
            `
        
        appendManuals('abbreviated_filepath');

        function appendManuals(filepath) {
            DOM('.calm-reports-manuals').innerHTML = '';

            allManuals[1].manuals.forEach(heli => {
                let manauls = '';

                heli.manuals.forEach(manual => {
                    manauls += `<a href="${manual[filepath]}"><p>${manual.manual}</p></a>`
                });

                let flex_down = () => {
                    if (heli.manuals.length < 3) {
                        return 'flex'
                    } else {
                        return '';
                    }
                }

                DOM('.calm-reports-manuals').innerHTML += `
                
                <div class="heli">${heli.helicopter}</div>

                <div class="manuals-wrapper ${flex_down()}">
                    ${manauls}
                </div>
                `;

                manauls = '';
            });

            const manual_links = DOM_All('.calm-reports-manuals > .manuals-wrapper > a');

            for (let i = 0; i < manual_links.length; i++) {
                let aTag = manual_links[i]
                let aTag_href = aTag.href;
                // remove once on live server
                aTag_href = aTag_href.replace('http://127.0.0.1:5500', '..');

                aTag.addEventListener("click", () => {
                    DOM(`.pdf-viewer`).style.display = 'block';
                    DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                    makePDFViewer(aTag_href);
                    aTag.href = '#!'
                    console.log(aTag)
                })
            }

            TweenMax.to('.content > .calm-reports', 1, {opacity: 1 })
            TweenMax.to('.content > .abb_full-toggle', 0.25, {opacity: 1})
            TweenMax.to('.content > .calm-reports-manuals', 1, { scaleY: 1, opacity: 1, ease: Elastic, })
        }

        DOM('body > .content').addEventListener("click", (e) => {
            const target = e.target;

            if (target == DOM('.abbreviated')) {
                appendManuals('abbreviated_filepath');
                DOM('.full').style.backgroundColor = 'transparent'
                DOM('.full').style.color = '#6596ff'
                DOM('.abbreviated').style.backgroundColor = '#6596ff'
                DOM('.abbreviated').style.color = 'white'
            }

            if (target == DOM('.full')) {
                appendManuals('full_filepath');
                DOM('.abbreviated').style.backgroundColor = 'transparent'
                DOM('.abbreviated').style.color = '#6596ff'
                DOM('.full').style.backgroundColor = '#6596ff'
                DOM('.full').style.color = 'white'
            }
        })
    }
}
class Calm_flt_time {
    constructor() {
        
    }
    appendContent() {
        if (DOM('.content > .calm-reports')) {
            DOM('.content > .calm-reports').remove();
            DOM('.content > .abb_full-toggle').remove();
            DOM('.content > .calm-reports-manuals').remove();
        }
        if (DOM('.content > .iframe')) {
            DOM('.content > .iframe').remove();
        }

        DOM('.calm-reports').style.backgroundColor = 'slategray'
        DOM('.dashboard').style.backgroundColor = 'slategray'
        DOM('.flt-time').style.backgroundColor = '#6596ff'
        DOM('.content').innerHTML += `
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOsh82emmzt9yvXWFxbbC1fPurC7uwXdVHODtD91HfiKsmcw/viewform?embedded=true" 
        frameborder="0" 
        scrolling="no" 
        class="iframe"
        onload="resizeIframe(this)"/>
        `
    }
}
class Calm_dashboard {
    constructor() {
        
    }

    appendContent() {
        if (DOM('.content > .calm-reports')) {
            DOM('.content > .calm-reports').remove();
            DOM('.content > .abb_full-toggle').remove();
            DOM('.content > .calm-reports-manuals').remove();
        }
        if (DOM('.content > .iframe')) {
            DOM('.content > .iframe').remove();
        }

        DOM('.calm-reports').style.backgroundColor = 'slategray'
        DOM('.dashboard').style.backgroundColor = '#6596ff'
        DOM('.flt-time').style.backgroundColor = 'slategray'
        DOM('.content').innerHTML += `
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSr751z0JzvPF91DtykMiN8N7uwHjZ-MOM25I7HJfneLo1tOr-AJdjNXFPu9JOXfOa9D_ZylSmAIlNv/pubhtml?gid=233567636&single=true" 
        frameborder="0" 
        scrolling="no" 
        class="iframe"
        onload="resizeIframe(this)"/>
        `
    }
}