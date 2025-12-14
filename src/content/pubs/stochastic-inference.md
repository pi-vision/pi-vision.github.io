---
title: "Inference of Black Hole Fluid-Dynamics from Sparse Interferometric Measurements"
authors: ["Aviad Levis", "Daeyoung Lee", "Joel A. Tropp", "Charles F. Gammie", "Katherine L. Bouman"]
first_authors: ["Aviad Levis"]
venue: Proc. IEEE/CVF ICCV
pages: 2340-2349
year: 2021
month: Oct
focusTags:
  - black-holes-strong-gravity
  - data-driven-dynamics
  - surrogate-simulation
thumbnail: /images/pubs/stochastic-thumb.gif
youtube: qNfbRZFOTvs
pdf: https://imaging.cms.caltech.edu/stochastic_inference/ICCV2021_main.pdf
supplement: https://imaging.cms.caltech.edu/stochastic_inference/ICCV2021_supplementary.pdf
poster: https://imaging.cms.caltech.edu/stochastic_inference/ICCV2021_poster.pdf
project: https://imaging.cms.caltech.edu/stochastic_inference/
code: https://github.com/aviadlevis/pynoisy
abstract: >
  We develop an approach to recover the underlying properties of fluid-dynamical processes from sparse measurements. We are motivated by the task of imaging the stochastically evolving environment surrounding black holes, and demonstrate how flow parameters can be estimated from sparse interferometric measurements used in radio astronomical imaging. To model the stochastic flow we use spatio-temporal Gaussian Random Fields (GRFs). The high dimensionality of the underlying source video makes direct representation via a GRF’s full covariance matrix intractable. In contrast, stochastic partial differential equations are able to capture correlations at multiple scales by specifying only local interaction coefficients. Our approach estimates the coefficients of a space-time diffusion equation that dictates the stationary statistics of the dynamical process. We analyze our approach on realistic simulations of black hole evolution and demonstrate its advantage over state-of-the-art dynamic black hole imaging techniques.
bibtex: |
  @inproceedings{levis2021stochastic,
    title={Inference of black hole fluid-dynamics from sparse interferometric measurements},
    author={Levis, Aviad and Lee, Daeyoung and Tropp, Joel A and Gammie, Charles F and Bouman, Katherine L},
    booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
    pages={2340--2349},
    year={2021}
  }
---
