class Home {
    constructor() {
        this.image = '';
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
        
    }

}