const fs = require('fs');
const path = require('path');

const maker = async () => {
    try {
        const fileNames = [];
        const folderNames = [];

        for (let i = 1; i <= 5; i++) {
            fileNames.push(`Test${i}`)
            folderNames.push(`Test${i}`)
        }

    } catch (e) {
        console.error(e.message);
    }
}