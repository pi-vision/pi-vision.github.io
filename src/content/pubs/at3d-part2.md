---
title: "Retrieving 3D distributions of atmospheric particles using Atmospheric Tomography with 3D Radiative Transfer – Part 2: Local optimization"
authors: ["Jesse Loveridge", "Aviad Levis", "Larry Di Girolamo", "Vadim Holodovsky", "Linda Forster", "Anthony B. Davis", "Yoav Y. Schechner"]
first_authors: ["Jesse Loveridge", "Aviad Levis"]
venue: Atm. Meas. Tech.
pages: 1-43
year: 2023
focusTags:
  - earth-climate
  - cloud-ct
  - surrogate-simulation
  - differentiable-physics
thumbnail: /images/pubs/at3d-part2.png
project: https://amt.copernicus.org/articles/16/3931/2023/
pdf: https://amt.copernicus.org/articles/16/3931/2023/amt-16-3931-2023.pdf
code: https://github.com/CloudTomography/AT3D
abstract: >
  Our global understanding of clouds and aerosols relies on the remote sensing of their optical, microphysical, and macrophysical properties using, in part, scattered solar radiation. Current retrievals assume clouds and aerosols form plane-parallel, homogeneous layers and utilize 1D radiative transfer (RT) models. These assumptions limit the detail that can be retrieved about the 3D variability in the cloud and aerosol fields and induce biases in the retrieved properties for highly heterogeneous structures such as cumulus clouds and smoke plumes. In Part 1 of this two-part study, we validated a tomographic method that utilizes multi-angle passive imagery to retrieve 3D distributions of species using 3D RT to overcome these issues. That validation characterized the uncertainty in the approximate Jacobian used in the tomographic retrieval over a wide range of atmospheric and surface conditions for several horizontal boundary conditions. Here, in Part 2, we test the algorithm's effectiveness on synthetic data to test whether the retrieval accuracy is limited by the use of the approximate Jacobian. We retrieve 3D distributions of a volume extinction coefficient (σ3D) at 40 m resolution from synthetic multi-angle, mono-spectral imagery at 35 m resolution derived from stochastically generated cumuliform-type clouds in (1 km)3 domains. The retrievals are idealized in that we neglect forward-modelling and instrumental errors, with the exception of radiometric noise; thus, reported retrieval errors are the lower bounds. σ3D is retrieved with, on average, a relative root mean square error (RRMSE) < 20 % and bias < 0.1 % for clouds with maximum optical depth (MOD) < 17, and the RRMSE of the radiances is < 0.5 %, indicating very high accuracy in shallow cumulus conditions. As the MOD of the clouds increases to 80, the RRMSE and biases in σ3D worsen to 60 % and −35 %, respectively, and the RRMSE of the radiances reaches 16 %, indicating incomplete convergence. This is expected from the increasing ill-conditioning of the inverse problem with the decreasing mean free path predicted by RT theory and discussed in detail in Part 1. We tested retrievals that use a forward model that is not only less ill-conditioned (in terms of condition number) but also less accurate, due to more aggressive delta-M scaling. This reduces the radiance RRMSE to 9 % and the bias in σ3D to −8 % in clouds with MOD ∼ 80, with no improvement in the RRMSE of σ3D. This illustrates a significant sensitivity of the retrieval to the numerical configuration of the RT model which, at least in our circumstances, improves the retrieval accuracy. All of these ensemble-averaged results are robust in response to the inclusion of radiometric noise during the retrieval. However, individual realizations can have large deviations of up to 18 % in the mean extinction in clouds with MOD ∼ 80, which indicates large uncertainties in the retrievals in the optically thick limit. Using less ill-conditioned forward model tomography can also accurately infer optical depths (ODs) in conditions spanning the majority of oceanic cumulus fields (MOD < 80), as the retrieval provides ODs with bias and RRMSE values better than −8 % and 36 %, respectively. This is a significant improvement over retrievals using 1D RT, which have OD biases between −30 % and −23 % and RRMSE between 29 % and 80 % for the clouds used here. Prior information or other sources of information will be required to improve the RRMSE of σ3D in the optically thick limit, where the RRMSE is shown to have a strong spatial structure that varies with the solar and viewing geometry.
bibtex: |
  @article{loveridge2023at3dpart2,
    title={Retrieving 3D distributions of atmospheric particles using Atmospheric Tomography with 3D Radiative Transfer--Part 2: Local optimization},
    author={Loveridge, Jesse and Levis, Aviad and Di Girolamo, Larry and Holodovsky, Vadim and Forster, Linda and Davis, Anthony B and Schechner, Yoav Y},
    journal={Atmospheric Measurement Techniques Discussions},
    pages={1--43},
    year={2023},
    publisher={Copernicus GmbH}
  }
---
