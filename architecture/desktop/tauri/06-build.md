
# BUILD


## INSTALL LIBRARIES PROJECT SRC-TAURI (BUILD INSTALLER WINDOWS FROM LINUX)

- 

### Install x86_64-pc-windows-msvc to project

- x86_64-pc-windows-msvc is library for x86 windows

    $ rustup target add x86_64-pc-windows-msvc


### Install Xwin to project

- Instead of setting the Windows SDKs up manually we will use [cargo-xwin] as Tauri’s “runner”:

    $ cargo install --locked cargo-xwin


<hr>

## BUILD DEFAULT

- If you need to support 32-bit machines, you can compile your application with a different Rust target using the --target flag:

    $ npm run tauri build


<hr>

## BUILDING THE APP WIN X86

- Now it should be as simple as adding the runner and target to the tauri build command:

    $ npm run tauri build -- --runner cargo-xwin --target x86_64-pc-windows-msvc


<hr>

## BUILD THE APP WIN ARM 

- 

    $ npm run tauri build -- --target aarch64-pc-windows-msvc