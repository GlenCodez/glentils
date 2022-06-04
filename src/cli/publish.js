import {
    cp,
    chmod,
    mkdir,
    rm,
    stat
} from 'fs/promises';
const path = require("path");

const GetURL = () => {
    const currentWorkingDirectory = process.cwd();
    const url = path.basename(currentWorkingDirectory);
    return url;
}

const DoesFileExist = async (file) => {
    let exists = false;
    try {
        await stat(file)
        exists = true
    } catch (e) {
        const { code } = e;
        switch (code) {
            case 'ENOENT': {
                exists = false;
                break;
            }
            default: throw e;
        }
    }
    return exists;
}

const BackupDir = async (dir) => {
    const dirBackup = dir + "_old";
    await cp(dir, dirBackup, {
        force: true,
        recursive: true
    })
}

const ClearDir = async (dir) => {
    try {
        await rm(dir, {
            recursive: true
        })
    } catch (e) {
        const { code } = e;
        switch (code) {
            case 'ENOENT': break;
            default: throw e;
        }
    }
    await mkdir(dir,{ mode: 0o755 });
}

const _pubDestinationBase = path.join("/var","www")
const _config = {
    pubDestinationBase: _pubDestinationBase,
    pubDestination: path.join(_pubDestinationBase, GetURL()),
    pubSource: './build'
}

export const Publish = async (...args) => {
    const [
        _,
        __,
    ] = args;
    const {
        pubDestinationBase,
        pubDestination,
        pubSource
    } = _config;
    const baseExists = await DoesFileExist(pubDestinationBase);
    const pubDestExists = await DoesFileExist(pubDestination);

    if(!baseExists){
        await mkdir(pubDestinationBase, { mode: 0o755 });
    }
    if(pubDestExists){
        await BackupDir(pubDestination);
    }
    await ClearDir(pubDestination);
    await cp(pubSource, pubDestination, {
        force: true,
        recursive: true
    })
    await chmod(pubDestination, 0o755)
    console.log("\tComplete.")
}