---
title: "Single View Refractive Index Tomography with Neural Fields"
authors: ["Brandon Zhao", "Aviad Levis", "Liam Connor", "Pratul P. Srinivasan", "Katherine L. Bouman"]
first_authors: ["Brandon Zhao", "Aviad Levis"]
venue: Proc. IEEE/CVF CVPR
pages: 25358-25367
year: 2024
month: June
focusTags:
  - differentiable-physics
  - neural-reconstruction
  - dark-matter-cosmology
thumbnail: /images/pubs/rtnf-thumb.png
teaser: /images/pubs/rtnf-teaser.jpg
youtube: 2yo3fJErSl4
pdf: https://arxiv.org/pdf/2309.04437
supplement: https://imaging.cms.caltech.edu/rtnf/rtnf_arxiv_2023_supp.pdf
project: https://imaging.cms.caltech.edu/rtnf/
abstract: >
  Refractive Index Tomography is the inverse problem of reconstructing the continuously-varying 3D refractive index in a scene using 2D projected image measurements. Although a purely refractive field is not directly visible, it bends light rays as they travel through space, thus providing a signal for reconstruction. The effects of such fields appear in many scientific computer vision settings, ranging from refraction due to transparent cells in microscopy to the lensing of distant galaxies caused by dark matter in astrophysics. Reconstructing these fields is particularly difficult due to the complex nonlinear effects of the refractive field on observed images. Furthermore, while standard 3D reconstruction and tomography settings typically have access to observations of the scene from many viewpoints, many refractive index tomography problem settings only have access to images observed from a single viewpoint. We introduce a method that leverages prior knowledge of light sources scattered throughout the refractive medium to help disambiguate the single-view refractive index tomography problem. We differentiably trace curved rays through a neural field representation of the refractive field, and optimize its parameters to best reproduce the observed image. We demonstrate the efficacy of our approach by reconstructing simulated refractive fields, analyze the effects of light source distribution on the recovered field, and test our method on a simulated dark matter mapping problem where we successfully recover the 3D refractive field caused by a realistic dark matter distribution.
bibtex: |
  @inproceedings{zhao2025rtnf,
    title={Single View Refractive Index Tomography with Neural Fields},
    author={Zhao, Brandon and Levis, Aviad and Connor, Liam and Srinivasan, Pratul P. and Bouman, Katherine L.},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
    pages={25358--25367},
    year={2024}
  }
---
