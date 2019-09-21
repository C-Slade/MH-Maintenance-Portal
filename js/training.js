class Training {
    constructor() {

    }

    static exam_viewer(trainings, exams, type) {

        // A little confusing conditional; checks to see if what the actual number of exams
        // that are on each tab and if it's less than 3 (which is only the fuel tab), i need to change the #
        // to 7 because the loop will only loop twice casue that's the # of exams on page, 
        // and it needs to cycle through all 7 training spans so it reaches 4 & 5 to select the correct exam button id
        let Number_of_exams; 
        if (exams.length < 3) {
            Number_of_exams = 7
        } else {
            Number_of_exams = exams.length
        }
        for (let i = 0; i < Number_of_exams; i++){

            DOM('body').addEventListener("click", (e) => {
                if (e.target == DOM(`#exam_${type}-${i}`)) {
                    console.log('hey')
                    DOM('.content').innerHTML += `
                    <div class="options-wrapper">
                        <div class="iframe-options">
                            <i class="material-icons" id="clear_iframe">clear</i>
                        </div>
                        <iframe src="${trainings[i].exam}" 
                        frameborder="0" 
                        scrolling="no"/>
                    </div>
                        `

                    DOM('.content > .options-wrapper').style.height = '800%'
                    if (screen.width <= 550) {
                        DOM('.content > .options-wrapper').style.height = '1100%'
                        DOM('.content > .options-wrapper').style.width = '100%'
                    }

                    TweenMax.to('.content > .options-wrapper', 0.75, { scaleY: 1, opacity: 1, ease: Elastic, })
                }
            })
        }
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
                        <li class="part-145">Part 145 Training</li>
                        <li class="part-135">Part 135 Training</li>
                        <li class="fuel-training">Fuel Training</li>
                        <li class="human-factors">Human Factors(pilots)</li>
                    </ul>
                </nav>
            </div>

            <div class="open_exam-wrapper"></div>
            
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
        </div>`;

        DOM('.nav-training').style.color = '#6596ff';
        DOM('.top-3-nav > .ul-top-3 > .part-145').style.backgroundColor = '#6596ff';
        const part_145 = new Training_part_145();
        const part_135 = new Training_part_135();
        const fuel_training = new Training_fuel_training();
        const human_factors = new Training_Human_factors();
        part_145.create_training_spans();
        TweenMax.to('.open_exam-wrapper', 0.50, { scaleY: 1, ease: Elastic, })
        TweenMax.to('.open_exam-wrapper', 1, { opacity: 1, ease: Elastic, })

        DOM('body').addEventListener("click", (e) => {
            let target = e.target;

            if (target == DOM('#clear_iframe')) {
                TweenMax.to('.content > .options-wrapper', 0.75, { scaleY: 0, opacity: 0, ease: Elastic, })
                if (DOM('.options-wrapper')) {
                    setTimeout(() => {
                        DOM('.options-wrapper').remove();
                    }, 750)
                }
            }

            if (target == DOM('.top-3-nav > .ul-top-3 > .part-145')) {
                TweenMax.to('.open_exam-wrapper', 0.50, { scaleY: 0, opacity: 0, ease: Elastic, })
                TweenMax.to('.content > .options-wrapper', 0.75, { scaleY: 0.20, opacity: 0, ease: Elastic, })
                setTimeout(() => {
                    part_145.create_training_spans();
                    TweenMax.to('.open_exam-wrapper', 0.50, { scaleY: 1, ease: Elastic, })
                    TweenMax.to('.open_exam-wrapper', 1, { opacity: 1, ease: Elastic, })
                    if (DOM('.content > .options-wrapper')) {
                        DOM('.content > .options-wrapper').remove();
                    }
                }, 500)
                DOM('.top-3-nav > .ul-top-3 > .part-145').style.backgroundColor = '#6596ff';
                DOM('.top-3-nav > .ul-top-3 > .part-135').style.backgroundColor = 'slategray';
                DOM('.top-3-nav > .ul-top-3 > .fuel-training').style.backgroundColor = 'slategray';
                DOM('.top-3-nav > .ul-top-3 > .human-factors').style.backgroundColor = 'slategray';
            }
            if (target == DOM('.top-3-nav > .ul-top-3 > .part-135')) {
                TweenMax.to('.open_exam-wrapper', 0.50, { scaleY: 0, opacity: 0, ease: Elastic, })
                TweenMax.to('.content > .options-wrapper', 0.75, { scaleY: 0.20, opacity: 0, ease: Elastic, })
                setTimeout(() => {
                    part_135.create_training_spans();
                    TweenMax.to('.open_exam-wrapper', 0.50, { scaleY: 1, ease: Elastic, })
                    TweenMax.to('.open_exam-wrapper', 1, { opacity: 1, ease: Elastic, })
                    if (DOM('.content > .options-wrapper')) {
                        DOM('.content > .options-wrapper').remove();
                    }
                }, 500)
                DOM('.top-3-nav > .ul-top-3 > .part-145').style.backgroundColor = 'slategray';
                DOM('.top-3-nav > .ul-top-3 > .part-135').style.backgroundColor = '#6596ff';
                DOM('.top-3-nav > .ul-top-3 > .fuel-training').style.backgroundColor = 'slategray';
                DOM('.top-3-nav > .ul-top-3 > .human-factors').style.backgroundColor = 'slategray';
            }
            if (target == DOM('.top-3-nav > .ul-top-3 > .fuel-training')) {
                TweenMax.to('.open_exam-wrapper', 0.50, { scaleY: 0, opacity: 0, ease: Elastic, })
                TweenMax.to('.content > .options-wrapper', 0.75, { scaleY: 0.20, opacity: 0, ease: Elastic, })
                setTimeout(() => {
                    fuel_training.create_training_spans();
                    TweenMax.to('.open_exam-wrapper', 0.50, { scaleY: 1, ease: Elastic, })
                    TweenMax.to('.open_exam-wrapper', 1, { opacity: 1, ease: Elastic, })
                    if (DOM('.content > .options-wrapper')) {
                        DOM('.content > .options-wrapper').remove();
                    }
                }, 500)
                DOM('.top-3-nav > .ul-top-3 > .part-145').style.backgroundColor = 'slategray';
                DOM('.top-3-nav > .ul-top-3 > .part-135').style.backgroundColor = 'slategray';
                DOM('.top-3-nav > .ul-top-3 > .fuel-training').style.backgroundColor = '#6596ff';
                DOM('.top-3-nav > .ul-top-3 > .human-factors').style.backgroundColor = 'slategray';
            }
            if (target == DOM('.top-3-nav > .ul-top-3 > .human-factors')) {
                TweenMax.to('.open_exam-wrapper', 0.50, { scaleY: 0, opacity: 0, ease: Elastic, })
                TweenMax.to('.content > .options-wrapper', 0.75, { scaleY: 0.20, opacity: 0, ease: Elastic, })
                setTimeout(() => {
                    human_factors.create_training_spans();
                    TweenMax.to('.open_exam-wrapper', 0.50, { scaleY: 1, ease: Elastic, })
                    TweenMax.to('.open_exam-wrapper', 1, { opacity: 1, ease: Elastic, })
                    if (DOM('.content > .options-wrapper')) {
                        DOM('.content > .options-wrapper').remove();
                    }
                }, 500)
                DOM('.top-3-nav > .ul-top-3 > .part-145').style.backgroundColor = 'slategray';
                DOM('.top-3-nav > .ul-top-3 > .part-135').style.backgroundColor = 'slategray';
                DOM('.top-3-nav > .ul-top-3 > .fuel-training').style.backgroundColor = 'slategray';
                DOM('.top-3-nav > .ul-top-3 > .human-factors').style.backgroundColor = '#6596ff';
            }
        })
    }
}

class Training_part_145 {
    constructor() {
        this.trainings = allManuals[3].part_145_training;
    }

    create_training_spans() {

        DOM('.open_exam-wrapper').innerHTML = '';

        const trainings = this.trainings;

        for (let i = 0; i < trainings.length; i++) {
            if (trainings[i].open && trainings[i].exam) {
                DOM('.open_exam-wrapper').innerHTML += `
                        <div class="training-span" id="span-${i}_145">
                            <div class="type">${trainings[i].training}</div>
                            <p class="open" id="open-${i}">open</p>
                            <p class="exam e_part-145" id="exam_e_part-145-${i}">exam</p>
                        </div>
                    `;
            } else if (trainings[i].open) {
                DOM('.open_exam-wrapper').innerHTML += `
                        <div class="training-span open-only" id="span-${i}_145">
                            <div class="type">${trainings[i].training}</div>
                            <p class="open" id="open-${i}">open</p>
                            <p class="exam hide" id="exam-${i}">exam</p>
                        </div>
                    `;
            } else if (trainings[i].exam) {
                DOM('.open_exam-wrapper').innerHTML += `
                        <div class="training-span open-only" id="span-${i}_145">
                            <div class="type">${trainings[i].training}</div>
                            <p class="open hide" id="open-${i}">open</p>
                            <p class="exam e_part-145" id="exam_e_part-145-${i}">exam</p>
                        </div>
                    `;
            }
        };

        const exams = DOM_All('.e_part-145');
        Training.exam_viewer(trainings, exams, 'e_part-145');

        let training_divs = DOM_All('.open_exam-wrapper > .training-span');

        function add_Open_Exam_iframes(e, i) {
            let target = e.target;

            if (target == DOM(`#span-${i}_145 > #open-${i}`)) {
                DOM('.content').innerHTML += `
                        <div class="google-wrapper">
                            <div class="google-controls">
                                <i class="material-icons">clear</i>
                            </div>
                            <iframe
                                src="${trainings[i].open}"
                                class="google-slides" frameborder="0" allowfullscreen="true" mozallowfullscreen="true"
                                webkitallowfullscreen="true">
                            </iframe>
                        </div>
                    `

                setTimeout(() => {
                    TweenMax.to('.google-wrapper', 0.50, { opacity: 1 })
                }, 1000)
            }

            if (target == DOM('.google-controls > i')) {
                DOM('.google-wrapper').remove();
            }
        };

        for (let i = 0; i < training_divs.length; i++) {
            DOM('body').addEventListener("click", (e) => {
                add_Open_Exam_iframes(e, i)
            })
        }
    }
}

class Training_part_135 {
    constructor() {
        this.trainings = allManuals[3].part_135_training;
    }

    create_training_spans() {


        DOM('.open_exam-wrapper').innerHTML = '';
        DOM('.nav-training').style.color = '#6596ff';
        DOM('.top-3-nav > .ul-top-3 > .part-135').style.backgroundColor = '#6596ff';

        const trainings = this.trainings;

        for (let i = 0; i < trainings.length; i++) {
            if (trainings[i].open && trainings[i].exam) {
                DOM('.open_exam-wrapper').innerHTML += `
                        <div class="training-span" id="span-${i}_135">
                            <div class="type">${trainings[i].training}</div>
                            <p class="open" id="open-${i}">open</p>
                            <p class="exam e_part-135" id="exam_e_part-135-${i}">exam</p>
                        </div>
                    `;
            } else if (trainings[i].open) {
                DOM('.open_exam-wrapper').innerHTML += `
                        <div class="training-span open-only" id="span-${i}_135">
                            <div class="type">${trainings[i].training}</div>
                            <p class="open" id="open-${i}">open</p>
                            <p class="exam hide" id="exam-${i}">exam</p>
                        </div>
                    `;
            } else if (trainings[i].exam) {
                DOM('.open_exam-wrapper').innerHTML += `
                        <div class="training-span open-only" id="span-${i}_135">
                            <div class="type">${trainings[i].training}</div>
                            <p class="open hide" id="open-${i}">open</p>
                            <p class="exam e_part-135" id="exam_e_part-135-${i}">exam</p>
                        </div>
                    `;
            }
        };

        const exams = DOM_All('.e_part-135');
        Training.exam_viewer(trainings, exams, 'e_part-135');

        let training_divs = DOM_All('.open_exam-wrapper > .training-span');

        function add_Open_Exam_iframes(e, i) {
            let target = e.target;

            if (target == DOM(`#span-${i}_135 > #open-${i}`)) {
                DOM('.content').innerHTML += `
                        <div class="google-wrapper">
                            <div class="google-controls">
                                <i class="material-icons">clear</i>
                            </div>
                            <iframe
                                src="${trainings[i].open}"
                                class="google-slides" frameborder="0" allowfullscreen="true" mozallowfullscreen="true"
                                webkitallowfullscreen="true">
                            </iframe>
                        </div>
                    `

                setTimeout(() => {
                    TweenMax.to('.google-wrapper', 0.50, { opacity: 1 })
                }, 1000)
            }

            if (target == DOM('.google-controls > i')) {
                DOM('.google-wrapper').remove();
            }
        };

        for (let i = 0; i < training_divs.length; i++) {
            DOM('body').addEventListener("click", (e) => {
                add_Open_Exam_iframes(e, i)
            })
        }
    }
}

class Training_fuel_training {
    constructor() {
        this.trainings = allManuals[3].fuel_training;
    }

    create_training_spans() {

        DOM('.open_exam-wrapper').innerHTML = '';

        const trainings = this.trainings;

        for (let i = 0; i < trainings.length; i++) {
            if (trainings[i].open && trainings[i].exam) {
                DOM('.open_exam-wrapper').innerHTML += `
                        <div class="training-span" id="span-${i}_fuel">
                            <div class="type">${trainings[i].training}</div>
                            <p class="open" id="open-${i}">open</p>
                            <p class="exam e_part-fuel" id="exam_e_part-fuel-${i}">exam</p>
                        </div>
                    `;
            } else if (trainings[i].open) {
                DOM('.open_exam-wrapper').innerHTML += `
                        <div class="training-span" id="span-${i}_fuel">
                            <div class="type">${trainings[i].training}</div>
                            <p class="open" id="open-${i}">open</p>
                        </div>
                    `;
            } else if (trainings[i].exam) {
                DOM('.open_exam-wrapper').innerHTML += `
                        <div class="training-span" id="span-${i}_fuel">
                            <div class="type">${trainings[i].training}</div>
                            <p class="exam e_part-fuel" id="exam_e_part-fuel-${i}">exam</p>
                        </div>
                    `;
            }
        };

        const innerNote = `
            <p>NOTE: USE FUEL QUALITY MANUAL FOR EXAM</p>
            <p id="fuel_quality">${allManuals[3].fuel_quality_manual.training}</p>
        `;
        let note_div = DOM_Create('div');
        note_div.className = 'note';
        DOM('.open_exam-wrapper').insertBefore(note_div, DOM('#span-4_fuel'))
        DOM('.open_exam-wrapper > .note').innerHTML = innerNote;

        DOM('body').addEventListener("click", (e) => {
            if (e.target == DOM('#fuel_quality')) {
                DOM(`.pdf-viewer`).style.display = 'block';
                DOM('.pdf-viewer').innerHTML += '<canvas id="pdf-render"></canvas>'
                makePDFViewer(allManuals[3].fuel_quality_manual.link)
            }
        })

        const exams = DOM_All('.e_part-fuel');
        Training.exam_viewer(trainings, exams, 'e_part-fuel');

        let training_divs = DOM_All('.open_exam-wrapper > .training-span');

        function add_Open_Exam_iframes(e, i) {
            let target = e.target;

            if (target == DOM(`#span-${i}_fuel > #open-${i}`)) {
                DOM('.content').innerHTML += `
                        <div class="google-wrapper">
                            <div class="google-controls">
                                <i class="material-icons">clear</i>
                            </div>
                            <iframe
                                src="${trainings[i].open}"
                                class="google-slides" frameborder="0" allowfullscreen="true" mozallowfullscreen="true"
                                webkitallowfullscreen="true">
                            </iframe>
                        </div>
                    `

                setTimeout(() => {
                    TweenMax.to('.google-wrapper', 0.50, { opacity: 1 })
                }, 1000)
            }

            if (target == DOM('.google-controls > i')) {
                DOM('.google-wrapper').remove();
            }
        };

        for (let i = 0; i < training_divs.length; i++) {
            DOM('body').addEventListener("click", (e) => {
                add_Open_Exam_iframes(e, i)
            })
        }
    }
}

class Training_Human_factors {
    constructor() {
        this.trainings = allManuals[3].human_factors_training.training;
        this.exam = allManuals[3].human_factors_training.exam;
    }

    create_training_spans() {
        DOM('.open_exam-wrapper').innerHTML = '';

        for (let i = 0; i < this.trainings.length; i++) {
            DOM('.open_exam-wrapper').innerHTML += `
                    <div class="training-span" id="span-${i}_human_factors">
                        <div class="type">${this.trainings[i].part}</div>
                        <p class="open" id="open_human_factors-${i}"}">open</p>
                    </div>
                `;
        };

        DOM('.open_exam-wrapper').innerHTML += `
            <div class="training-span">
                <div class="type">exam</div>
                <p class="open" id="open_human_factors_exam"}">open</p>
            </div>
            <div class="training-span">
                <div class="type">exam Results</div>
                <p class="open" id="open_human_factors_exam-results"}">open</p>
            </div>
        `;

        for (let i = 0; i < this.trainings.length; i++){
            DOM('body').addEventListener("click", (e) => {
                if (e.target == DOM(`#open_human_factors-${i}`)) {
                    DOM('.content').innerHTML += `
                        <div class="google-wrapper">
                            <div class="google-controls">
                                <i class="material-icons">clear</i>
                            </div>
                            <iframe
                                src="${this.trainings[i].open}"
                                class="google-slides" frameborder="0" allowfullscreen="true" mozallowfullscreen="true"
                                webkitallowfullscreen="true">
                            </iframe>
                        </div>
                    `
                    setTimeout(() => {
                        TweenMax.to('.google-wrapper', 0.50, { opacity: 1 })
                    }, 1000)
                }

            })
        }

        DOM('body').addEventListener("click", (e) => {
            if (e.target == DOM('#open_human_factors_exam')) {
                DOM('.content').innerHTML += `
                    <div class="options-wrapper">
                        <div class="iframe-options">
                            <i class="material-icons" id="clear_iframe">clear</i>
                        </div>
                        <iframe src="${this.exam.exam}" 
                        frameborder="0" 
                        scrolling="no"/>
                    </div>
                        `

                DOM('.content > .options-wrapper').style.height = '800%'
                if (screen.width <= 550) {
                    DOM('.content > .options-wrapper').style.height = '1100%'
                    DOM('.content > .options-wrapper').style.width = '100%'
                }

                TweenMax.to('.content > .options-wrapper', 0.75, { scaleY: 1, opacity: 1, ease: Elastic, })
            }

            if (e.target == DOM('#open_human_factors_exam-results')) {
                DOM('.content').innerHTML += `
                        <div class="google-wrapper">
                            <div class="google-controls">
                                <i class="material-icons">clear</i>
                            </div>
                            <iframe
                                src="${this.exam.exam_results}"
                                class="google-slides" frameborder="0" allowfullscreen="true" mozallowfullscreen="true"
                                webkitallowfullscreen="true">
                            </iframe>
                        </div>
                    `
                setTimeout(() => {
                    TweenMax.to('.google-wrapper', 0.50, { opacity: 1 })
                }, 1000)
            }
        })
        
    }
}