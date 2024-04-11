# About

As a technical writer, I'm really interested in the [docs-as-code](https://www.writethedocs.org/guide/docs-as-code/) philosophy.

This website follows its principles:

1. I write the pages in a plain text format: Markdown.
2. I commit changes to a [GitHub repository](https://github.com/dobaret/dobaret.github.io).
3. When the `main` branch of the GitHub repository receives a commit:

    1. A GitHub action installs [MkDocs](https://www.mkdocs.org/) in a virtual environment.  
    2. MkDocs automatically transforms the Markdown source files into HTML files.
    3. GitHub automatically pushes the HTML files to the `gh-pages` branch of the repository.

4. GitHub offers the content of the `gh-pages` branch as a website at [dobaret.github.io](https://dobaret.github.io).

!!! info
    I have bought `dorianbaret.fr` and configured its DNS records to point to `dobaret.github.io`. Both URLs lead to this website.
 