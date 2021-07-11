// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();
    const oldState = vscode.getState();

    let currentOperation = 'add';
    let currentMetadata = 'class';

    const rename = document.querySelector('#renameBlock');
    const enabled = document.querySelector('#enabledBlock');
    const create = document.querySelector('#createBlock');
    const read = document.querySelector('#readBlock');
    const edit = document.querySelector('#editBlock');
    const del = document.querySelector('#deleteBlock');
    const viewall = document.querySelector('#viewAllBlock');
    const modifyall = document.querySelector('#modifyAllBlock');

    function adjustOptions(optionsToShow, optionsToHide) {
        for (let optionToShow of optionsToShow) {
            optionToShow.style.display = 'block';
        }
        for (let optionToHide of optionsToHide) {
            optionToHide.style.display = 'none';
        }
    }

    adjustOptions([enabled], [rename, create, read, edit, del, viewall, modifyall]);

    window.addEventListener('message', event => {
        const message = event.data;
        switch (message.command) {
            case 'profiles':
                const folders = message.data;

                let html = '';

                for (const folderName of Object.keys(folders)) {
                    html += `<label for="${folderName}">Folder: ${folderName}</label>`;
                    html += `<select class="folder" multiple="true" data-name="${folderName}">`;

                    const profiles = folders[folderName];

                    for (const profile of profiles) {
                        html += `<option value="${profile}">${profile}</option>`;
                    }

                    html += '</select>';
                }

                document.querySelector('#folder').innerHTML = html;
                break;
        }
    }); 

    const operation = document.querySelector('#operation');
    
    operation.addEventListener('change', event => {
        currentOperation = operation.value;

        switch (currentOperation) {
            case "add": {
                switch (currentMetadata) {
                    case "class":
                    case "page": {
                        adjustOptions([enabled], [rename, create, read, edit, del, viewall, modifyall]);
                        break;
                    }
                    case "object": {
                        adjustOptions([create, read, edit, del, viewall, modifyall], [rename, enabled]);
                        break;
                    }
                    case "field": {
                        adjustOptions([read, edit], [rename, enabled, create, del, viewall, modifyall]);
                        break;
                    }
                }
                break;
            }
            case "edit": {
                switch (currentMetadata) {
                    case "class":
                    case "page": {
                        adjustOptions([enabled, rename], [create, read, edit, del, viewall, modifyall]);
                        break;
                    }
                    case "object": {
                        adjustOptions([rename, create, read, edit, del, viewall, modifyall], [enabled]);
                        break;
                    }
                    case "field": {
                        adjustOptions([rename, read, edit], [enabled, create, del, viewall, modifyall]);
                        break;
                    }
                }
                break;
            }
            case "delete": {
                adjustOptions([], [enabled, rename, create, read, edit, del, viewall, modifyall]);   
                break;
            }
        }
    });

    const metadata = document.querySelector('#metadata');

    metadata.addEventListener('change', event => {
        currentMetadata = metadata.value;

        switch (currentMetadata) {
            case "class":
            case "page": {
                switch (currentOperation) {
                    case "add": {
                        adjustOptions([enabled], [rename, create, read, edit, del, viewall, modifyall]);
                        break;
                    }
                    case "edit": {
                        adjustOptions([enabled, rename], [create, read, edit, del, viewall, modifyall]);
                        break;
                    }
                    case "delete": {
                        adjustOptions([], [enabled, rename, create, read, edit, del, viewall, modifyall]);
                        break;
                    }
                }
                break;
            }
            case "object": {
                switch (currentOperation) {
                    case "add": {
                        adjustOptions([create, read, edit, del, viewall, modifyall], [rename, enabled]);
                        break;
                    }
                    case "edit": {
                        adjustOptions([rename, create, read, edit, del, viewall, modifyall], [enabled]);
                        break;
                    }
                    case "delete": {
                        adjustOptions([], [enabled, rename, create, read, edit, del, viewall, modifyall]);
                        break;
                    }
                }
                break;
            }
            case "field": {
                switch (currentOperation) {
                    case "add": {
                        adjustOptions([read, edit], [rename, enabled, create, del, viewall, modifyall]);
                        break;
                    }
                    case "edit": {
                        adjustOptions([rename, read, edit], [enabled, create, del, viewall, modifyall]);
                        break;
                    }
                    case "delete": {
                        adjustOptions([], [enabled, rename, create, read, edit, del, viewall, modifyall]);
                        break;
                    }
                }
                break;
            }
        }
    });
    
    const button = document.querySelector('button');

    button.addEventListener('click', event => {
        event.preventDefault();

        const metadataname = document.querySelector('#name').value;

        if (!metadataname || metadataname.trim() === '') {
            console.log('MUST HAVE METADATA NAME');
            return;
        }

        let command = `sfdx profile:${document.querySelector('#metadata').value}:${document.querySelector('#operation').value} -n ${metadataname}`;

        if (currentOperation === 'edit') {
            const renameMetadata = document.querySelector('#rename').value;
            if (renameMetadata && renameMetadata.trim() !== '') {
                command += ` -r ${renameMetadata}`;
            }
        }

        if (currentOperation !== 'delete') {
            if (currentMetadata === 'class'|| currentMetadata === 'page') {
                if (document.querySelector('#enabled').checked) {
                    command += ' -e';
                }
            } 
            
            if (currentMetadata === 'field' || currentMetadata === 'object') {
                if (document.querySelector('#read').checked || document.querySelector('#edit').checked) {
                    command += ' -m ';
                } 
                
                if (document.querySelector('#read').checked) {
                    command += 'r';
                }
                if (document.querySelector('#edit').checked) {
                    command += 'e';
                }
            }

            if (currentMetadata === 'object') {
                
                if (document.querySelector('#create').checked) {
                    command += 'c';
                }
                if (document.querySelector('#del').checked) {
                    command += 'd';
                }
                if (document.querySelector('#viewall').checked) {
                    command += 'v';
                }
                if (document.querySelector('#modifyall').checked) {
                    command += 'm';
                }
            } 
        }
        
        let profileData = {};

        const folderSelects = document.querySelectorAll('.folder');
        
        for (const folderSelect of folderSelects) {
            const folder = folderSelect.dataset.name;
            const selectedOptions = folderSelect.selectedOptions;
            
            let profiles = [];

            for (const selectedOption of selectedOptions) {
                profiles.push(selectedOption.label);
            }

            if (!(folder in profileData)) {
                profileData = {
                  ...profileData,
                  [folder]: []
                };
            } 

            profileData = {
                ...profileData,
                [folder]: [ ...profileData[folder], ...profiles ]
            };
        }

        console.log('PROF DATA: ', profileData);

        if (Object.keys(profileData).length) {
            command += ' -p ';
            let profilePaths = [];
            for (const folder of Object.keys(profileData)) {
                const profiles = profileData[folder];
                for (const profile of profiles) {
                    profilePaths.push(`"${folder}:${profile}"`);
                }
            }

            if (profilePaths.length) {
                command += profilePaths.join(",");
            }
        }

        console.log('COMMAND: ' + command);

        vscode.postMessage({
            command: 'modify',
            data: command
        });
    });
}());