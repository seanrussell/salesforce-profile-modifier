<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    import LoadingSpinner from "../ui/LoadingSpinner.svelte";
    import Select from "../ui/Select.svelte";
    import Input from "../ui/Input.svelte";
    import Checkbox from "../ui/Checkbox.svelte";

    let isLoading: boolean = true;
    let noProfile: boolean = false;
    let projectNotOpen: boolean = false;

    let currentOperation: string = 'add';
    let currentMetadata: string = 'class';
    let metadataName: string = '';
    let metadataRename: string = '';
    
    let enabledValue: string[] = [];
    let includeFieldsValue: string[] = [];
    let alphabetizeValue: string[] = [];
    let permissionValue: string[] = [];
    let permissions = [
        { label: 'Create', value: 'c', show: true },
        { label: 'Read', value: 'r', show: true },
        { label: 'Edit', value: 'e', show: true },
        { label: 'Delete', value: 'd', show: true },
        { label: 'View All', value: 'v', show: true },
        { label: 'Modify All', value: 'm', show: true }
    ];
    let perms: Array<{ value: string; label: string; show: boolean }> = [];

    let data = {
        showMetadataRename: false,
        showEnabled: false,
        showPermissions: false,
        showIncludeFields: false
    };

    let folders = new Map();
    let selectedProfiles: any = [];
    let lastState = tsvscode.getState();
    
    if (lastState && !lastState.isLoading) {
        isLoading = lastState.isLoading;
        tsvscode.postMessage({
            command: 'reload',
            data: ''
        });
    }

    function adjustOptionsOperation(operation: string) {
        switch (operation) {
            case "add": {
                switch (currentMetadata) {
                    case "class":
                    case "page": {
                        data.showEnabled = true;
                        data.showMetadataRename = false;
                        data.showPermissions = false;
                        data.showIncludeFields = false;
                        break;
                    }
                    case "object": {
                        data.showEnabled = false;
                        data.showMetadataRename = false;
                        data.showPermissions = true;
                        data.showIncludeFields = true;
                        perms = permissions.map((m) => {
                            return { ...m, show: true};
                        });
                        break;
                    }
                    case "field": {
                        data.showEnabled = false;
                        data.showMetadataRename = false;
                        data.showPermissions = true;
                        data.showIncludeFields = false;
                        perms = permissions.map((m) => {
                            if (m.value === 'r' || m.value === 'e') {
                                return { ...m, show: true};
                            } else {
                                return { ...m, show: false};
                            }
                        });
                        break;
                    }
                }
                break;
            }
            case "edit": {
                switch (currentMetadata) {
                    case "class":
                    case "page": {
                        data.showEnabled = true;
                        data.showMetadataRename = true;
                        data.showPermissions = false;
                        data.showIncludeFields = false;
                        break;
                    }
                    case "object": {
                        data.showEnabled = false;
                        data.showMetadataRename = true;
                        data.showPermissions = true;
                        data.showIncludeFields = false;
                        perms = permissions.map((m) => {
                            return { ...m, show: true};
                        });
                        break;
                    }
                    case "field": {
                        data.showEnabled = false;
                        data.showMetadataRename = true;
                        data.showPermissions = true;
                        data.showIncludeFields = false;
                        perms = permissions.map((m) => {
                            if (m.value === 'r' || m.value === 'e') {
                                return { ...m, show: true};
                            } else {
                                return { ...m, show: false};
                            }
                        });
                        break;
                    }
                }
                break;
            }
            case "delete": {
                data.showEnabled = false;
                data.showMetadataRename = false;
                data.showPermissions = false;
                data.showIncludeFields = false;
                break;
            }
        }

        return data;
    }

    function adjustOptionsMetadata(metadata: string) {
        switch (metadata) {
            case "class":
            case "page": {
                switch (currentOperation) {
                    case "add": {
                        data.showEnabled = true;
                        data.showMetadataRename = false;
                        data.showPermissions = false;
                        data.showIncludeFields = false;
                        break;
                    }
                    case "edit": {
                        data.showEnabled = true;
                        data.showMetadataRename = true;
                        data.showPermissions = false;
                        data.showIncludeFields = false;
                        break;
                    }
                    case "delete": {
                        data.showEnabled = false;
                        data.showMetadataRename = false;
                        data.showPermissions = false;
                        data.showIncludeFields = false;
                        break;
                    }
                }
                break;
            }
            case "object": {
                switch (currentOperation) {
                    case "add": {
                        data.showEnabled = false;
                        data.showMetadataRename = false;
                        data.showPermissions = true;
                        data.showIncludeFields = true;
                        perms = permissions.map((m) => {
                            return { ...m, show: true};
                        });
                        break;
                    }
                    case "edit": {
                        data.showEnabled = false;
                        data.showMetadataRename = true;
                        data.showPermissions = true;
                        data.showIncludeFields = false;
                        perms = permissions.map((m) => {
                            return { ...m, show: true};
                        });
                        break;
                    }
                    case "delete": {
                        data.showEnabled = false;
                        data.showMetadataRename = false;
                        data.showPermissions = false;
                        data.showIncludeFields = false;
                        break;
                    }
                }
                break;
            }
            case "field": {
                switch (currentOperation) {
                    case "add": {
                        data.showEnabled = false;
                        data.showMetadataRename = false;
                        data.showPermissions = true;
                        perms = permissions.map((m) => {
                            if (m.value === 'r' || m.value === 'e') {
                                return { ...m, show: true};
                            } else {
                                return { ...m, show: false};
                            }
                        });
                        break;
                    }
                    case "edit": {
                        data.showEnabled = false;
                        data.showMetadataRename = true;
                        data.showPermissions = true;
                        perms = permissions.map((m) => {
                            if (m.value === 'r' || m.value === 'e') {
                                return { ...m, show: true};
                            } else {
                                return { ...m, show: false};
                            }
                        });
                        break;
                    }
                    case "delete": {
                        data.showEnabled = false;
                        data.showMetadataRename = false;
                        data.showPermissions = false;
                        break;
                    }
                }
                break;
            }
        }

        return data;
    }

    const modifyProfiles = () => {
        if (!metadataName || metadataName.trim() === '') {
            tsvscode.postMessage({
                command: 'onError',
                data: 'Metadata name is required to modify profiles.'
            });
            return;
        }

        let command = `sfdx profile:${currentMetadata}:${currentOperation} -n ${metadataName}`;
        
        if (currentOperation === 'edit') {
            if (metadataRename && metadataRename.trim() !== '') {
                command += ` -r ${metadataRename}`;
            }
        }

        if (currentOperation !== 'delete') {
            if (currentMetadata === 'class'|| currentMetadata === 'page') {
                if (enabledValue) {
                    command += ' -e';
                }
            }
            
            if (currentMetadata === 'field' || currentMetadata === 'object') {
                if (permissionValue.includes('r') || permissionValue.includes('e')) {
                    command += ' -m ';
                } 
                
                if (permissionValue.includes('r')) {
                    command += 'r';
                }
                if (permissionValue.includes('e')) {
                    command += 'e';
                }
            }

            if (currentMetadata === 'object') {
                if (permissionValue.includes('c')) {
                    command += 'c';
                }
                if (permissionValue.includes('d')) {
                    command += 'd';
                }
                if (permissionValue.includes('v')) {
                    command += 'v';
                }
                if (permissionValue.includes('m')) {
                    command += 'm';
                }
            } 
        }

        if (Object.keys(selectedProfiles).length) {
            command += ' -p ';
            let profilePaths = [];
            for (const folder of Object.keys(selectedProfiles)) {
                const profiles = selectedProfiles[folder];
                for (const profile of profiles) {
                    profilePaths.push(`"${folder}${profile}"`);
                }
            }

            if (profilePaths.length) {
                command += profilePaths.join(",");
            }
        }

        if (alphabetizeValue) {
            command += ' -a';
        }

        if (includeFieldsValue) {
            command += ' -f';
        }

        tsvscode.postMessage({
            command: 'modify',
            data: command
        });

        isLoading = true;
    };

    $: {
        data = adjustOptionsOperation(currentOperation);
        data = adjustOptionsMetadata(currentMetadata);
    }

    function onWindowMessage(event: any) {
        const message = event.data;
        switch (message.command) {
            case 'profiles':
                let folderData = Object();
                for (const key in message.data) {
                    const options = message.data[key].map((f: string) => {
                        return {
                            label: f,
                            value: f
                        };
                    });

                    folderData[key] = options;
                    selectedProfiles[key] = [];
                }
                folders = new Map(Object.entries(folderData));
                isLoading = false;
                tsvscode.setState({ isLoading });
                break;
            case 'modify-complete':
                isLoading = false;
                break;
            case 'no-profile':
                isLoading = false;
                noProfile = true;
                break;
            case 'project-not-open':
                isLoading = false;
                projectNotOpen = true;
                break;
        }
    }

    onMount(() => {
        window.addEventListener("message", onWindowMessage);
    });

    onDestroy(() => {
        window.removeEventListener("message", onWindowMessage);
    });
    
</script>

<style>
    span {
        display: block;
        width: 100%;
    }
</style>

<main>
{#if isLoading}
    <LoadingSpinner />
{:else}
    {#if projectNotOpen}
        <p>There is no project file open. Please open an SFDX project folder with a valid sfdx-project.json file.</p>
    {:else if noProfile}
        <p>No profiles found in project structure. Please check that you have an SFDX project open and a valid sfdx-project.json file.</p>
    {:else}
        <form>
            <div>
                <Select
                    required
                    bind:value={currentOperation}
                    label="Action to take"
                    name="operation"
                    many="false"
                    options={[{ value: 'add', label: 'Add' }, { value: 'edit', label: 'Edit' }, { value: 'delete', label: 'Delete' }]} 
                />
            </div>
            <div>
                <Select
                    required
                    bind:value={currentMetadata}
                    label="Metadata to modify"
                    name="metadata"
                    many="false"
                    options={[{ value: 'class', label: 'Apex Class' }, { value: 'page', label: 'Visualforce Page' }, { value: 'object', label: 'Object' }, { value: 'field', label: 'Field' }]} 
                />
            </div>
            <div>
                <Input
                    required
                    name="name"
                    label="Metadata name"
                    bind:value={metadataName} 
                />
            </div>
            {#if data.showMetadataRename}
                <div>
                    <Input
                        required
                        name="rename"
                        label="Rename to"
                        bind:value={metadataRename} 
                    />
                </div>
            {/if}
            {#if data.showEnabled}
                <div>
                    <Checkbox
                        bind:value={enabledValue}
                        options={[{ label: 'Enabled', value: 'enabled', show: true }]}
                    />
                </div>
            {/if}
            {#if data.showIncludeFields}
                <div>
                    <Checkbox
                        bind:value={includeFieldsValue}
                        options={[{ label: 'Add object fields too?', value: 'enabled', show: true }]}
                    />
                </div>
            {/if}
            {#if data.showPermissions}
                <div>
                    <span>Permissions</span>
                    <Checkbox
                        bind:value={permissionValue}
                        options={perms}
                    />
                </div>
            {/if}
            <div>
                <span>Profiles to modify</span>
                <div>
                    {#each [...folders] as [key, value]}
                        <Select
                            bind:value={selectedProfiles[key]}
                            label={key}
                            name={key}
                            many="true"
                            options={value} 
                        />
                    {/each}
                </div>
            </div>
            <div>
                <Checkbox
                    bind:value={alphabetizeValue}
                    options={[{ label: 'Alphabetize', value: 'alphabetize', show: true }]}
                />
            </div>
            <button on:click|preventDefault={() => { modifyProfiles(); }}>MODIFY PROFILES</button>
        </form>
    {/if}
{/if}
</main>