
# PREREQUISITES

## LINUX UBUNTU

### UBUNTU
* Install Node
* Install Rust

<hr>

### TAURI

- 

url: https://tauri.app/start/prerequisites/

    $ sudo apt update 
    
    $ sudo apt install libwebkit2gtk-4.1-dev \
        build-essential \
        curl \
        wget \
        file \
        libxdo-dev \
        libssl-dev \
        libayatana-appindicator3-dev \
        librsvg2-dev

<hr>

### TAURI BUILD FROM LINUX WINDOWS

- Dependencies for ubuntu (Tauri Build for windows)

url: https://tauri.app/distribute/windows-installer/

<hr>

#### Nsis
- Cross compiling Windows apps on Linux and macOS hosts is possible with caveats when using NSIS. It is not as straight forward as compiling on Windows directly and is not tested as much. Therefore it should only be used as a last resort if local VMs or CI solutions like GitHub Actions don’t work for you.

    $ sudo apt install lld llvm


<hr>

#### Install LLVM and the LLD Linker

- 

    $ sudo apt install lld llvm


#### Clang

-

    $ sudo apt install clang


