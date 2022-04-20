# Deno Scripting Template

A template repo for developing scripts with deno. These scripts can be compiled
to single js files or even bundled with the deno executable for distribution.

This could also be used as a base for a cli written in deno, simply use a
cli-args parsing package in `main.ts` and build out the commands.

## Folder Structure

- `.vscode` = A folder, 
  - containing a `settings.json` which activates the deno language server for this workspace
  - containing a `extensions.json` with recommended vscode extensions for this workspace
- `playground` = a location used as cwd for running main.ts (this allows a clean
  testing space and avoids problems with the source-code files, like accidental
  deletion)
- `src` = A folder containing more source files which are used by `main.ts`
- `.env` = A file with environment variables being used with the `velociraptor` script runner
- `.gitignore` = A normal gitingore file
- `main.ts` = the entrypoint for this deno script / app
- `Readme.md` = A normal Readme file
- `scripts.yaml` = A file defining the workspace scripts, like `vr start` & `vr build`. 
   Needs the `velociraptor` cli to be installed globally. (see install instructions below)

## Repo Setup for Contributors

1. Install Velociraptor (Script Runner)
   1. Get the newest install command from here:
      https://velociraptor.run/docs/installation/
   2. Run the install command from the website, for example:
      `deno install -qAn vr https://deno.land/x/velociraptor@1.5.0/cli.ts`
   3. If you used this exact command from Step 2 from this readme, 
      run `vr upgrade` afterwards to update velociraptor
