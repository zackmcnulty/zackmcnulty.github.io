# Expositions

Each exposition lives in its own directory. Use this structure for new pieces:

```text
expositions/<slug>/
├── main.tex
├── main.pdf
├── references.bib    # when needed
└── images/           # when needed
```

From the repository root, compile every exposition containing a `main.tex` file:

```bash
make expositions
```

To remove auxiliary LaTeX files while retaining the generated PDFs:

```bash
make clean
```

The website should link to `main.pdf` in the exposition directory. Commit both the source and compiled PDF so GitHub Pages can serve the document without compiling LaTeX.
