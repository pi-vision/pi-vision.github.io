---
title: "Exoplanet Imaging via Differentiable Rendering"
authors: ["Brandon Y. Feng", "Rodrigo Ferrer-Chávez", "Aviad Levis", "Jason J. Wang", "Katherine L. Bouman", "William T. Freeman"]
first_authors: ["Brandon Y. Feng"]
venue: IEEE Trans. on Comp. Imaging
year: 2025
month: Jan
focusTags:
  - jwst
  - differentiable-physics
  - planet-formation-exoplanets
thumbnail: /images/pubs/exoplanet-imaging.jpg
project: https://brandonyfeng.github.io/EDDO/
pdf: https://arxiv.org/pdf/2501.01912
code: https://github.com/brandonyfeng/EDDO
abstract: >
  Direct imaging of exoplanets is crucial for advancing our understanding of planetary systems beyond our solar system, but it faces significant challenges due to the high contrast between host stars and their planets. Wavefront aberrations introduce speckles in the telescope science images, which are patterns of diffracted starlight that can mimic the appearance of planets, complicating the detection of faint exoplanet signals. Traditional post-processing methods, operating primarily in the image intensity domain, do not integrate wavefront sensing data. These data, measured mainly for adaptive optics corrections, have been overlooked as a potential resource for post-processing, partly due to the challenge of the evolving nature of wavefront aberrations. In this paper, we present a differentiable rendering approach that leverages these wavefront sensing data to improve exoplanet detection. Our differentiable renderer models wave-based light propagation through a coronagraphic telescope system, allowing gradient-based optimization to significantly improve starlight subtraction and increase sensitivity to faint exoplanets. Simulation experiments based on the James Webb Space Telescope configuration demonstrate the effectiveness of our approach, achieving substantial improvements in contrast and planet detection limits. Our results showcase how the computational advancements enabled by differentiable rendering can revitalize previously underexploited wavefront data, opening new avenues for enhancing exoplanet imaging and characterization.

bibtex: |
  @article{feng2025exoplanet,
    title={Exoplanet Detection via Differentiable Rendering},
    author={Feng, Brandon Y and Ferrer-Ch{\'a}vez, Rodrigo and Levis, Aviad and Wang, Jason J and Bouman, Katherine L and Freeman, William T},
    journal={arXiv preprint arXiv:2501.01912},
    year={2025}
  }
---
