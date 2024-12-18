import { GraduationCap, HouseIcon, Loader2Icon } from "lucide-react";

const LandingPage = () => {
  return (
    <div>
      <header class="masthead text-center">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xl-9 mx-auto">
              <h1 class="mb-5 ">Welcome to the Student Information System!</h1>

              <h3 class="mb-5">
                This is a simple Student Information System where you can manage
                students and departments.
              </h3>
            </div>
          </div>
        </div>
      </header>
      <section class="features-icons bg-light text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div class="features-icons-icon d-flex">
                  <i class="icon-screen-desktop m-auto text-primary">
                    <GraduationCap />
                  </i>
                </div>
                <h3>Students Data</h3>
                <p class="lead mb-0">
                  List of students with their details and department
                  information.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div class="features-icons-icon d-flex">
                  <i class=" m-auto text-primary">
                    <HouseIcon />
                  </i>
                </div>
                <h3>Departments</h3>
                <p class="lead mb-0">List of departments with their details.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                <div class="features-icons-icon d-flex">
                  <i class="icon-check m-auto text-primary">
                    <Loader2Icon />
                  </i>
                </div>
                <h3>More Coming Soon</h3>
                <p class="lead mb-0">
                  More features will be added soon. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default LandingPage;
