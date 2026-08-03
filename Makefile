LATEXMK ?= latexmk
LATEX_FLAGS := -pdf -interaction=nonstopmode -halt-on-error
BIBER_CACHE ?= /tmp/website-biber-cache
TEX_SOURCES := $(wildcard expositions/*/main.tex)
PDFS := $(TEX_SOURCES:.tex=.pdf)

export PAR_GLOBAL_TEMP := $(BIBER_CACHE)

.PHONY: all expositions clean FORCE

all: expositions

expositions: $(PDFS)

expositions/%/main.pdf: expositions/%/main.tex FORCE
	mkdir -p "$(BIBER_CACHE)"
	cd $(@D) && $(LATEXMK) $(LATEX_FLAGS) main.tex

FORCE:

clean:
	@for source in $(TEX_SOURCES); do \
		directory=$$(dirname "$$source"); \
		cd "$$directory" && $(LATEXMK) -c main.tex; \
		$(RM) "$$directory/main.bbl"; \
		cd - >/dev/null; \
	done
