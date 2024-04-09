# About

As a technical writer, I'm really interested in the [docs-as-code](https://www.writethedocs.org/guide/docs-as-code/) philosophy.

This website follows its principles:

1. I write the pages in a plain text format: Markdown.
2. I commit changes to a GitHub repository.
3. When the `main` branch of the GitHub repository receives a commit:

    1. A GitHub action installs MkDocs in the job's virtual environment.  
    2. MkDocs automatically transforms the Markdown source files into this website.
    3. GitHub automatically pushes the files of the website to the `gh-pages` branch of the repository.

4. GitHub offers the website at [dobaret.github.io](https://dobaret.github.io).

!!! info
    The DNS records of `dorianbaret.fr` point to `dobaret.github.io`. 
 