# CI / CD Exercise

Configure `.github/workflows/cicd.yml` to define a full CI/CD pipeline for this application

### Part 1: Write test and build job
steps:
  - [x] Set up Node
  - [x] Install depencencies
  - [ ] Execute tests
  - [ ] Execute build
  - [ ] Push the build artifact. (only If it's a push to main branch, not a PR)

### Part 2: Write deploy job
conditions:
* (only If it's a push to main branch, not a PR)
* (test and build job must have been successful)

steps:
  - [ ] Download the build artifact
  - [ ] Deploy to github pages

## Examples and tips

### Build step example
* Add the `VITE_APP_PUBLIC_URL` in the build environment, with the repo name value
* Build command will store the build artifact to `./dist` path.
```
- name: Build step
  run: npm ....
  env:
    VITE_APP_PUBLIC_URL: /<repo_name>/  # --> /example-react-cicd/ 
```

### Conditionally run a job or a step, use the `if` key.
`if: github.event_name == 'push' && github.ref == 'refs/heads/main' `

### Link a job to a privious one, use `needs` key.
* executes job2 only when job1 finished successfully
```
jobs:
  job1:
    
  job2:
    needs: job1
```

### Deploy job needs write permissions, use `permissions.content: write`.
```
jobs:
  deploy:
    permissions:
      contents: write
```

### Share files (artifacts) between jobs
If you need to share files between jobs upload them in the repo and download them in the destination job

upload:
```
steps:
- name: Uploading build files
  uses: actions/upload-artifact@v2
  with:
    name: artifact
    path: <artifact_path>
````		
download:
```
steps:
- name: Downloading artifact
  uses: actions/download-artifact@v2
  with:
    name: artifact
    path: <artifact_path>
```
### Deploy to github pages
* use the action `peaceiris/actions-gh-pages@v3`
* indicate which directory to publish using `publish_dir: ./<artifact_path>`
```
      - name: Deploying to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: <artifact_path>
```
