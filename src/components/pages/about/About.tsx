function About() {
  return (
    <div
      className="
        min-h-screen w-full
        bg-center bg-no-repeat
        bg-[url('../../../src/assets/bg-about-mobile.webp')]
        bg-cover

        md:bg-[url('../../../src/assets/bg-about-full.webp')]
        md:bg-size-[85%_auto]
        md:bg-position-[center_bottom]
        

        lg:bg-size-[100%_auto]

        pixel
      "
    >
      <div
        className="
          flex flex-col lg:flex-row
          min-h-screen
          border-2 border-blue-600
          items-center justify-center
        "
      >
        <div className="w-full lg:w-3/5 p-10 text-justify sm:h-3/5">
          <img
            src="../../../src/assets/avatar-placeholder.png"
            alt="avatar-placeholder"
            className="w-50 h-50 float-left mr-5 mb-5"
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed error
            asperiores quasi est esse laboriosam accusantium, similique
            exercitationem veniam, repudiandae quas quo in quidem ab delectus,
            ut qui sunt itaque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae numquam debitis, unde ut et quae
            delectus. Libero iure quas nobis omnis quaerat sit aliquam,
            repellendus non impedit modi cumque possimus! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Hic deserunt itaque, illum
            exercitationem necessitatibus eligendi ad suscipit eius sed cumque,
            minus eos totam aut at maiores saepe impedit aliquid beatae. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            perspiciatis earum, laboriosam quidem minus obcaecati possimus nisi
            voluptate, autem magnam velit nesciunt distinctio neque! Alias
            quaerat magni ea eos! Cupiditate. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellendus vitae, at accusantium
            eaque id officia aliquam est, hic veritatis animi iure, culpa fugit
            a in? Reprehenderit quod consequuntur ullam incidunt!
          </p>
        </div>

        <div className="w-full lg:w-2/5 sm:h-2/5">design</div>
      </div>
    </div>
  );
}

export default About;
