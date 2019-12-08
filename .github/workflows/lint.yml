on: [pull_request]

jobs: 
  eslint:
    name: "ESLint"
    steps:
      - name: Run eslint
        uses: "hallee/eslint-action@master"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
