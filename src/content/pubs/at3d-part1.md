---
title: "Retrieving 3D distributions of atmospheric particles using Atmospheric Tomography with 3D Radiative Transfer – Part 1: Model description and Jacobian calculation"
authors: ["Jesse Loveridge", "Aviad Levis", "Larry Di Girolamo", "Vadim Holodovsky", "Linda Forster", "Anthony B. Davis", "Yoav Y. Schechner"]
first_authors: ["Jesse Loveridge", "Aviad Levis"]
venue: Atm. Meas. Tech.
volume: 16
issue: 7
pages: 1803-1847
year: 2023
focusTags:
  - earth-climate
  - cloud-ct
  - surrogate-simulation
  - differentiable-physics
thumbnail: /images/pubs/at3d-part1.png
project: https://amt.copernicus.org/articles/16/1803/2023/
pdf: https://amt.copernicus.org/articles/16/1803/2023/amt-16-1803-2023.pdf
code: https://github.com/CloudTomography/AT3D
abstract: >
  Our global understanding of clouds and aerosols relies on the remote sensing of their optical, microphysical, and macrophysical properties using, in part, scattered solar radiation. These retrievals assume that clouds and aerosols form plane-parallel, homogeneous layers and utilize 1D radiative transfer (RT) models, limiting the detail that can be retrieved about the 3D variability in cloud and aerosol fields and inducing biases in the retrieved properties for highly heterogeneous structures such as cumulus clouds and smoke plumes. To overcome these limitations, we introduce and validate an algorithm for retrieving the 3D optical or microphysical properties of atmospheric particles using multi-angle, multi-pixel radiances and a 3D RT model. The retrieval software, which we have made publicly available, is called Atmospheric Tomography with 3D Radiative Transfer (AT3D). It uses an iterative, local optimization technique to solve a generalized least squares problem and thereby find a best-fitting atmospheric state. The iterative retrieval uses a fast, approximate Jacobian calculation, which we have extended from Levis et al. (2020) to accommodate open and periodic horizontal boundary conditions (BCs) and an improved treatment of non-black surfaces.

  We validated the accuracy of the approximate Jacobian calculation for derivatives with respect to both the 3D volume extinction coefficient and the parameters controlling the open horizontal boundary conditions across media with a range of optical depths and single-scattering properties and find that it is highly accurate for a majority of cloud and aerosol fields over oceanic surfaces. Relative root mean square errors in the approximate Jacobian for a 3D volume extinction coefficient in media with cloud-like single-scattering properties increase from 2 % to 12 % as the maximum optical depths (MODs) of the medium increase from 0.2 to 100.0 over surfaces with Lambertian albedos <0.2. Over surfaces with albedos of 0.7, these errors increase to 20 %. Errors in the approximate Jacobian for the optimization of open horizontal boundary conditions exceed 50 %, unless the plane-parallel media providing the boundary conditions are optically very thin (∼0.1).

  We use the theory of linear inverse RT to provide insight into the physical processes that control the cloud tomography problem and identify its limitations, supported by numerical experiments. We show that the Jacobian matrix becomes increasing ill-posed as the optical size of the medium increases and the forward-scattering peak of the phase function decreases. This suggests that tomographic retrievals of clouds will become increasingly difficult as clouds become optically thicker. Retrievals of asymptotically thick clouds will likely require other sources of information to be successful.

  In Loveridge et al. (2023a; hereafter Part 2), we examine how the accuracy of the retrieved 3D volume extinction coefficient varies as the optical size of the target medium increases using synthetic data. We do this to explore how the increasing error in the approximate Jacobian and the increasingly ill-posed nature of the inversion in the optically thick limit affect the retrieval. We also assess the accuracy of retrieved optical depths and compare them to retrievals using 1D radiative transfer.

bibtex: |
  @article{loveridge2023at3dpart1,
    title={Retrieving 3D distributions of atmospheric particles using Atmospheric Tomography with 3D Radiative Transfer--Part 1: Model description and Jacobian calculation},
    author={Loveridge, Jesse and Levis, Aviad and Di Girolamo, Larry and Holodovsky, Vadim and Forster, Linda and Davis, Anthony B and Schechner, Yoav Y},
    journal={Atmospheric Measurement Techniques},
    volume={16},
    number={7},
    pages={1803--1847},
    year={2023},
    publisher={Copernicus GmbH}
  }
---
