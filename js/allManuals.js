const allManuals = [
    {
        page: 'home',
        manuals: [
            {
                manual: 'Bell 206 AAIP',
                filePath: '../Docs/Home/Example-pdf.pdf'
            },
            {
                manual: 'Bell 407 AAIP',
                filePath: '../Docs/Home/Example-pdf.pdf'
            },
            {
                manual: 'BO-105 AAIP',
                filePath: '../Docs/Home/Example-pdf.pdf'
            },
            {
                manual: 'AW119 AAIP',
                filePath: '../Docs/Home/Example-pdf.pdf'
            },
            {
                manual: 'Bell 412 AAIP',
                filePath: '../Docs/Home/Example-pdf.pdf'
            },
        ],
        power_trent_charts: [
            {
                manual: '206/407',
                filePath: '../Docs/Home/Example-pdf.pdf'
            },
            {
                manual: '412',
                filePath: '../Docs/Home/Example-pdf.pdf'
            },
        ],
        emergency_response_plan: [
            {
                manual: 'ERP',
                filePath: '../Docs/Home/Example-pdf.pdf'
            }
        ]
    },
    {
        page: 'calm',
        manuals: [
            {
                helicopter: 'Bell 206L1',
                manuals: [
                    {
                        manual: 'N315MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                ],
            },
            {
                helicopter: 'Bell 206L3',
                manuals: [
                    {
                        manual: 'N304MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N306MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N307MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                ],
            },
            {
                helicopter: 'Bell 206L4',
                manuals: [
                    {
                        manual: 'N193AL',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N305MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N314MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N316MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                ],
            },
            {
                helicopter: 'Bell 407',
                manuals: [
                    {
                        manual: 'N318MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N309MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N312MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N407PA',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N407RH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N319MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                ],
            },
            {
                helicopter: 'AW119',
                manuals: [
                    {
                        manual: 'N320MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                ],
            },
            {
                helicopter: 'BO-105',
                manuals: [
                    {
                        manual: 'N326MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N327MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                ],
            },
            {
                helicopter: 'Bell 412',
                manuals: [
                    {
                        manual: 'N328MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                    {
                        manual: 'N330MH',
                        abbreviated_filepath: '../Docs/calm/Abbreviated/Example-pdf.pdf',
                        full_filepath: '../Docs/calm/Full/Example-pdf.pdf',
                    },
                ],
            },
        ]
    },
    {
        page: 'manuals',
        manual_types: [
            {
                type: 'maintenance',
                manuals: [
                    {
                        manual: '206/407 MEL',
                        filePath: '../Docs/manuals/Maintenance/Example-pdf.pdf'
                    },
                    {
                        manual: 'BO-105 MEL',
                        filePath: '../Docs/manuals/Maintenance/Example-pdf.pdf'
                    },
                    {
                        manual: 'AW119 MEL',
                        filePath: '../Docs/manuals/Maintenance/Example-pdf.pdf'
                    },
                    {
                        manual: '412 MEL',
                        filePath: '../Docs/manuals/Maintenance/Example-pdf.pdf'
                    },
                    {
                        manual: 'NEF',
                        filePath: '../Docs/manuals/Maintenance/Example-pdf.pdf'
                    },
                    {
                        manual: 'FUEL',
                        filePath: '../Docs/manuals/Maintenance/Example-pdf.pdf'
                    },
                ]
            },
            {
                type: 'Operations',
                manuals: [
                    {
                        manual: 'SOP',
                        filePath: '../Docs/manuals/Operations/Example-pdf.pdf'
                    },
                    {
                        manual: 'IFR SOP',
                        filePath: '../Docs/manuals/Operations/Example-pdf.pdf'
                    },
                    {
                        manual: 'NVG SOP',
                        filePath: '../Docs/manuals/Operations/Example-pdf.pdf'
                    },
                    {
                        manual: 'GOM',
                        filePath: '../Docs/manuals/Operations/Example-pdf.pdf'
                    },
                    {
                        manual: 'RLCFM',
                        filePath: '../Docs/manuals/Operations/Example-pdf.pdf'
                    },
                    {
                        manual: 'HAZ EXT LOAD',
                        filePath: '../Docs/manuals/Operations/Example-pdf.pdf'
                    },
                ]
            },
            {
                type: 'Part 145',
                manuals: [
                    {
                        manual: 'HOMER RSM',
                        filePath: '../Docs/manuals/Part-145/Example-pdf.pdf'
                    },
                    {
                        manual: 'HOMER QCM',
                        filePath: '../Docs/manuals/Part-145/Example-pdf.pdf'
                    },
                    {
                        manual: 'FAIRBANKS RSM',
                        filePath: '../Docs/manuals/Part-145/Example-pdf.pdf'
                    },
                    {
                        manual: 'FAIRBANKS QCM',
                        filePath: '../Docs/manuals/Part-145/Example-pdf.pdf'
                    },
                    {
                        manual: 'RS FORMS',
                        filePath: '../Docs/manuals/Part-145/Example-pdf.pdf'
                    },
                ]
            },
            {
                type: 'OP-SPECS',
                manuals: [
                    {
                        manual: 'PART 133',
                        filePath: '../Docs/manuals/OP-specs/Example-pdf.pdf'
                    },
                    {
                        manual: 'PART 135',
                        filePath: '../Docs/manuals/OP-specs/Example-pdf.pdf'
                    },
                    {
                        manual: 'PART 137',
                        filePath: '../Docs/manuals/OP-specs/Example-pdf.pdf'
                    },
                    {
                        manual: 'PART 145H',
                        filePath: '../Docs/manuals/OP-specs/Example-pdf.pdf'
                    },
                    {
                        manual: 'PART 145F',
                        filePath: '../Docs/manuals/OP-specs/Example-pdf.pdf'
                    },
                ]
            },
            {
                type: 'Certifications',
                manuals: [
                    {
                        manual: 'PART 133',
                        filePath: '../Docs/manuals/Certifications/Example-pdf.pdf'
                    },
                    {
                        manual: 'PART 135',
                        filePath: '../Docs/manuals/Certifications/Example-pdf.pdf'
                    },
                    {
                        manual: 'PART 137',
                        filePath: '../Docs/manuals/Certifications/Example-pdf.pdf'
                    },
                    {
                        manual: 'PART 145H',
                        filePath: '../Docs/manuals/Certifications/Example-pdf.pdf'
                    },
                    {
                        manual: 'PART 145F',
                        filePath: '../Docs/manuals/Certifications/Example-pdf.pdf'
                    },
                ]
            },
            {
                type: 'Rosters',
                manuals: [
                    {
                        manual: 'INSPECTOR STAMP',
                        filePath: '../Docs/manuals/Rosters/Example-pdf.pdf'
                    },
                    {
                        manual: 'RII',
                        filePath: '../Docs/manuals/Rosters/Example-pdf.pdf'
                    },
                    {
                        manual: 'HOM CAP LIST',
                        filePath: '../Docs/manuals/Rosters/Example-pdf.pdf'
                    },
                    {
                        manual: 'FAI CAP LIST',
                        filePath: '../Docs/manuals/Rosters/Example-pdf.pdf'
                    },
                    {
                        manual: 'INSP RTS',
                        filePath: '../Docs/manuals/Rosters/Example-pdf.pdf'
                    },
                ]
            },
        ],

        oas_cards: [
            {
                name: 'N193AL',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N304MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N305MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N306MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N307MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N308MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N309MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N312MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N314MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N315MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N316MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N319MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N320MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N326MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N327MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N328MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N330MH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N407PA',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
            {
                name: 'N407RH',
                filePath: '../Docs/manuals/Oas-cards/Example-pdf.pdf',
            },
        ]
    },
    {
        page: 'training',
        part_145_training: [
            {
                training: 'Part 145 review',
                open: 'https://docs.google.com/presentation/d/1pRTO8kcL6DZx9aIGHNdVhAEWZXkJDwBCcwKxpxYSAy8/embed?start=false&amp;loop=false&amp;delayms=3000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSf4EI11akACL0UdQrz88JOdHfxnjqungrdZm5tWguQQp7kpTw/viewform?embedded=true'
            },
            {
                training: 'Repair station manual',
                open: 'https://docs.google.com/presentation/d/1pRTO8kcL6DZx9aIGHNdVhAEWZXkJDwBCcwKxpxYSAy8/embed?start=false&loop=false&delayms=3000',
                exam: 'https://drive.google.com/open?id=138HZgkT5pmK1-36kIzEd8DZYnexNf3By3qSNLqp69YE'
            },
            {
                training: 'Quality Control Manual',
                open: 'https://docs.google.com/presentation/d/1OWNfv8CZcqYVzwRBYFFAfz7gPREQ3nR8h-mtNDk-sBY/embed?start=false&loop=false&delayms=10000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSf4EI11akACL0UdQrz88JOdHfxnjqungrdZm5tWguQQp7kpTw/viewform?embedded=true'
            },
            {
                training: 'Incoming Recieving Inspector Training*',
                open: 'https://docs.google.com/presentation/d/1M_pH4COTw0QFDhdn_8wJwe2B9qXAY4yJUs75qvhe3XY/embed?start=false&loop=false&delayms=3000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSf4EI11akACL0UdQrz88JOdHfxnjqungrdZm5tWguQQp7kpTw/viewform?embedded=true'
            },
            {
                training: 'Suspected Unapproved Parts',
                open: 'https://docs.google.com/presentation/d/1e4RizmXzE6W4KDDdD54LG9xtzomLR7LIKRZ8araulRQ/embed?start=false&loop=false&delayms=5000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSf4EI11akACL0UdQrz88JOdHfxnjqungrdZm5tWguQQp7kpTw/viewform?embedded=true'
            },
            {
                training: 'Course Evaluation Form TR-0011',
                open: 'https://drive.google.com/open?id=1FJrPDw39Fm0cTSp8uhREGINgBHSZCVpVrsTt2pfuHgI',
            },
            {
                training: 'Exam Results',
                open: 'http://docs.google.com/spreadsheets/d/e/2PACX-1vT5Smh3SX141ycFRDIQTsJyx6ewgdjHwKt5uwIgjAPpEa7-eST8X-OwahVJkK4FyIDdnATz34WAGtnZ/pubhtml?gid=0&single=true',
            },
        ],
        part_135_training: [
            {
                training: 'INITIAL TRAINING',
                open: 'https://docs.google.com/presentation/d/e/2PACX-1vQwnP6giEAXc6-MkuyYqH3BvF9ahKPhb9ijTIU1lrOZ5jPTSoNUycRz2ti8s4XKDYnj01BhuvgIhep3/embed?start=false&loop=false&delayms=3000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSenUn3r2rmdPkkjG5RpIHCTXSY3YZbwmDLrTUkXOq3rTd1CaA/viewform?embedded=true'
            },
            {
                training: 'PART 135 REVIEW',
                open: 'https://docs.google.com/presentation/d/1wQEfRrsPElivFlPoYgIMCeW2ux1EbGmQy384GLAm9dw/embed?start=false&loop=false&delayms=3000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSfN_FrbSkl1kiezEaz2AE7M0qoVGx8gZHSnt1QVSwttPhgg5A/viewform?embedded=true'
            },
            {
                training: 'GMM',
                open: 'https://docs.google.com/presentation/d/1wQEfRrsPElivFlPoYgIMCeW2ux1EbGmQy384GLAm9dw/embed?start=false&loop=false&delayms=3000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSfVUOcXmcr5Kmvl0tWztdpBVEchRTTlu8K158O88jl4zyTa_w/viewform?embedded=true'
            },
            {
                training: 'CAMP PROGRAM - 412*',
                open: 'https://docs.google.com/presentation/d/1M_pH4COTw0QFDhdn_8wJwe2B9qXAY4yJUs75qvhe3XY/embed?start=false&loop=false&delayms=3000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSdF-or-PJW9ucm989NumNFIBAxR7ZjElY-AyWtwDPLYfHdUVw/viewform?embedded=true'
            },
            {
                training: 'RII TRAINING**',
                open: 'https://docs.google.com/presentation/d/1ss2a0kDcc3-CZcUxzWxjE5Ed_16dlecV--en7xgG05I/embed?start=false&loop=false&delayms=15000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSf4EI11akACL0UdQrz88JOdHfxnjqungrdZm5tWguQQp7kpTw/viewform?embedded=true'
            },
            {
                training: 'HUMAN FACTORS',
                open: 'https://docs.google.com/presentation/d/1tyvf_5W6GGqNnFgs_LK3ub13oiksz-JwldZOmV7MaC4/embed?start=false&loop=false&delayms=3000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSf4EI11akACL0UdQrz88JOdHfxnjqungrdZm5tWguQQp7kpTw/viewform?embedded=true'
            },
            {
                training: 'HAZMAT INTRO',
                open: 'https://docs.google.com/presentation/d/1ejCjEzKyZXq5scuM2a2rYdFneh4sdtUVvVFKpQZ7F90/embed?start=false&loop=false&delayms=3000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSf4EI11akACL0UdQrz88JOdHfxnjqungrdZm5tWguQQp7kpTw/viewform?embedded=true'
            },
            {
                training: 'HAZMAT AIR CARRIER',
                open: 'https://docs.google.com/presentation/d/1VoPXxzDJfR2YVQQfE9trROPEpDMMhqeDNg8vPR_L0_0/embed?start=false&loop=false&delayms=3000',
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSf4EI11akACL0UdQrz88JOdHfxnjqungrdZm5tWguQQp7kpTw/viewform?embedded=true'
            },
            {
                training: 'EXAM RESULTS',
                open: 'http://docs.google.com/spreadsheets/d/e/2PACX-1vRcngm7sATqrY1016gbOnCAX6IJjunloBfVvILulaR7OMidUq7Yh3kYYJzucBnIiOG_7dhgn7vWYpB_/pubhtml?gid=0&single=true',
            },
        ],
        fuel_training: [
            {
                training: 'FUEL HANDLING',
                open: 'https://docs.google.com/presentation/d/1aQhAg_RqY_9Fu8Nj103qmvaV_usX8-hsLDKBN32iJCI/embed?start=false&loop=false&delayms=30000',
            },
            {
                training: 'FUEL RECIEVING',
                open: 'https://docs.google.com/presentation/d/1-U6ylCfatkp65PufvzqYJ9gmb3u56qAk53XPCoun_KU/embed?start=false&loop=false&delayms=15000',
            },
            {
                training: 'STORMWATER TRAINING',
                open: 'https://docs.google.com/presentation/d/1--6OjAS_qDaFkCsACcguye0Lj_4cOq_Zl6EhNWFNUuE/embed?start=false&loop=false&delayms=15000',
            },
            {
                training: 'SPILL PREVENTION',
                open: 'https://docs.google.com/presentation/d/1ytrB4FE0FED7bI13nmP-iIdLvAXra0s-q8Itu294Cnk/embed?start=false&loop=false&delayms=15000',
            },
            {
                training: 'FUEL HANDLING & RECEIVING',
                exam: 'https://docs.google.com/forms/d/1A8PDxQkloTXUqHb1XGuv2oFRMJsRdlKMcGqcSL8IL2A/viewform?embedded=true'
            },
            {
                training: 'STORMWATER AND SPILL PREVENTION',
                exam: 'https://docs.google.com/forms/d/1h7rbq_vUYJL-bq4GwtvcmPvILjQD1AJpKe358OzPAHQ/viewform?embedded=true'
            },
            {
                training: 'EXAM RESULTS',
                open: 'src="http://docs.google.com/spreadsheets/d/e/2PACX-1vSxiSUiSlRAGQH229avm19abSlyUuOZ0n1nWlt7HB7zw8YF29hF_YFZ402GKxgUSYbojZ1QW_Q69lPd/pubhtml?gid=13845552&single=true"',
            },
        ],
        human_factors_training: {
            training: [
                {
                    part: 'part 1',
                    open: 'https://docs.google.com/presentation/d/1tyvf_5W6GGqNnFgs_LK3ub13oiksz-JwldZOmV7MaC4/embed?start=false&loop=false&delayms=3000'
                },
                {
                    part: 'part 2',
                    open: 'https://docs.google.com/presentation/d/1hHRG-UKsK7JM1DnDmAg1b_LUeiNwPcS51KxSHgYPDF4/embed?start=false&loop=false&delayms=3000'
                },
                {
                    part: 'part 3',
                    open: 'https://docs.google.com/presentation/d/1ERSiZ2VvAQXZ_GUscV5WnwiXJl0wcBXtO4btNO39kyo/embed?start=false&loop=false&delayms=3000'
                },
            ],
            exam: {
                exam: 'https://docs.google.com/forms/d/e/1FAIpQLSe2p9qOF-B1wodiyxxIwOU5r4dGvmIuc1KmVMRfaPzQTlRikA/viewform?embedded=true',
                exam_results: 'http://docs.google.com/spreadsheets/d/e/2PACX-1vTqDgo5HIMfu_x2Z-E8Dj-JfU4CCcSphsAjWNWp2vP3-j13Hz6c-Yolthb_RWpdMAMKiZGDLoRtafvh/pubhtml?gid=1552550341&single=true'
            },
        },
        fuel_quality_manual: {
            training: 'Fuel Quality',
            link: '../Docs/training/human_factors/Example-pdf.pdf'
        }
    },
    {
        page: 'Quality and Safety',
        main: [
            {
                name: 'Safety Notes',
                filePath: '../Docs/Safety/main/Example-pdf.pdf',
            },
            {
                name: 'Risk Management',
                filePath: '../Docs/Safety/main/Example-pdf.pdf',
            },
            {
                name: 'Hse Manual',
                filePath: '../Docs/Safety/main/Example-pdf.pdf',
            },
            {
                name: 'Event investigation',
                filePath: '../Docs/Safety/main/Example-pdf.pdf',
            },
            {
                name: 'Emergency response plan',
                filePath: '../Docs/Safety/main/Example-pdf.pdf',
            },
            {
                name: 'Interntal evaluation',
                filePath: '../Docs/Safety/main/Example-pdf.pdf',
            },
            {
                name: 'safety data sheet',
                filePath: '../Docs/Safety/main/Example-pdf.pdf',
                google_drive: true,
            },
            {
                name: 'sms manual',
                filePath: '../Docs/Safety/main/Example-pdf.pdf',
            },
        ],
        forms: [
            {
                name: 'gor',
                filePath: '../Docs/Safety/forms/Example-pdf.pdf',
            },
            {
                name: 'station checklist',
                filePath: '../Docs/Safety/forms/Example-pdf.pdf',
            },
            {
                name: 'first report of injury',
                filePath: '../Docs/Safety/forms/Example-pdf.pdf',
            },
            {
                name: 'flight irregularity',
                filePath: '../Docs/Safety/forms/Example-pdf.pdf',
            },
        ],
        archive: [
            {
                name: '2015',
                filePath: '../Docs/Safety/archive/Example-pdf.pdf',
            },
            {
                name: '2016',
                filePath: '../Docs/Safety/archive/Example-pdf.pdf',
            },
            {
                name: '2017',
                filePath: '../Docs/Safety/archive/Example-pdf.pdf',
            },
            {
                name: '2018',
                filePath: '../Docs/Safety/archive/Example-pdf.pdf',
            },
        ],
    },
    {
        page: 'memos',
        maintenance_memos: [
            {
                name: '2014',
                filePath: '../Docs/Memos/Maintenance-memos/Example-pdf.pdf',
            },
            {
                name: '2015',
                filePath: '../Docs/Memos/Maintenance-memos/Example-pdf.pdf',
            },
            {
                name: '2016',
                filePath: '../Docs/Memos/Maintenance-memos/Example-pdf.pdf',
            },
            {
                name: '2017',
                filePath: '../Docs/Memos/Maintenance-memos/Example-pdf.pdf',
            },
            {
                name: '2018',
                filePath: '../Docs/Memos/Maintenance-memos/Example-pdf.pdf',
            },
            {
                name: 'cass',
                filePath: '../Docs/Memos/Maintenance-memos/Example-pdf.pdf',
            },
        ],
        operations_memos: [
            {
                name: '2014',
                filePath: '../Docs/Memos/Operation-memos/Example-pdf.pdf',
            },
            {
                name: '2015',
                filePath: '../Docs/Memos/Operation-memos/Example-pdf.pdf',
            },
            {
                name: '2016',
                filePath: '../Docs/Memos/Operation-memos/Example-pdf.pdf',
            },
            {
                name: '2017',
                filePath: '../Docs/Memos/Operation-memos/Example-pdf.pdf',
            },
            {
                name: '2018',
                filePath: '../Docs/Memos/Operation-memos/Example-pdf.pdf',
            },
        ],
    }
]