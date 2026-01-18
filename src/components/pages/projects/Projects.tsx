/**
 * Section component
 *
 * Renders projects
 * Projects will be gathered through GitHub API
 *
 * @todo bottom should have an image carousel slider (could be implemented in a different component)
 */
function Projects() {
  return (
    <div className="flex h-dvh border-2  border-blue-600 items-center justify-center">
      <div className="flex justify-between w-5/6 m-auto">
        <div className="w-3/6">
          <img
            src="../../../src/assets/project-placeholder.png"
            alt="project-placeholder"
          />
        </div>
        <div className="flex flex-col w-3/6 pl-3 pr-3 h-2/3 m-auto gap-3">
          <p className="font-bold">Project title</p>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            aliquid, vitae ut ea quis sapiente at repellendus eveniet sequi
            repellat nobis similique doloremque ipsam. Dolore ipsum veniam id
            voluptatum qui.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
