# Deno Scripting Template

A template repo for developing scripts with deno. These scripts can be compiled
to single js files or even bundled with the deno executable for distribution.

This could also be used as a base for a cli written in deno, simply use a
cli-args parsing package in `main.ts` and build out the commands.

## Folder Structure

- `.vscode` = A folder, 
  - containing a `settings.json` which activates the deno language server for this workspace
  - containing a `extensions.json` with recommended vscode extensions for this workspace
- `example` = A folder, containing entry deno files for demonstrating the modules functionalities 
   - contains `main.ts` - the default file for examples
- `dependencies` = A folder, including dependency re-exports
- `my_module_part` = A folder containing more source files which are exported by `mod.ts`
   - Hint: you may create multiple of them to structure your module.
- `.gitignore` = A normal gitingore file
- `mod.ts` = the entrypoint for this deno module, which exports all functionality of this module
- `Readme.md` = A normal Readme file

## Repo Setup for Contributors

1. Install Velociraptor (Script Runner)
   1. Get the newest install command from here:
      https://velociraptor.run/docs/installation/
   2. Run the install command from the website, for example:
      `deno install -qAn vr https://deno.land/x/velociraptor@1.5.0/cli.ts`
   3. If you used this exact command from Step 2 from this readme, 
      run `vr upgrade` afterwards to update velociraptor
