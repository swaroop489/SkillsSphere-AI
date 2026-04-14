# PR Quality Gates

This project uses GitHub Actions to enforce basic quality checks on every pull request to `main`.

## What Runs Automatically

Workflow file: `.github/workflows/pr-quality-checks.yml`

Checks:

- Markdown linting for `.md` files
- GitHub Actions workflow linting
- Repository guardrails (required community files)
- Conditional `client` checks (`npm ci`, lint, test, build) if `client/package.json` exists
- Conditional `server` checks (`npm ci`, lint, test, build) if `server/package.json` exists
- Conditional `ai-ml` checks if Python dependency files exist

## How to Make Checks Mandatory in GitHub

1. Go to repository `Settings`.
2. Open `Branches`.
3. Edit branch protection rule for `main`.
4. Enable `Require a pull request before merging`.
5. Enable `Require status checks to pass before merging`.
6. Select required check names from the workflow, for example:
   - `Docs and Workflow Checks`
   - `Repository Guardrails`
   - `Client Checks` (when client app exists)
   - `Server Checks` (when server app exists)
   - `AI-ML Checks` (when AI/ML deps exist)

## Contributor Tips

- Keep PRs small so failures are easy to debug.
- Run lint/test locally before pushing.
- Do not bypass failing checks except for urgent hotfixes with maintainer approval.
