/**
 * Skills component
 *
 * Renders skills
 *
 * Skills will have a link to the relevant projects or experience
 *
 * @todo Add Icons
 */

function Skills() {
  return (
    <div className="flex h-dvh w-dvw border-2  border-blue-600 items-center justify-center">
      <div className="flex w-5/6 flex-col gap-20">
        <div className="flex flex-col border-2 border-yellow-500">
          <p>Languages</p>
          <div className="flex gap-2 border-2 border-teal-500">
            <p className="bg-black rounded-xs text-white">JS</p>
            <p className="bg-black rounded-xs text-white">TS</p>
            <p className="bg-black rounded-xs text-white">Python</p>
          </div>
        </div>
        <div className="flex flex-col border-2 border-yellow-500">
          <p>Frameworks</p>
          <div className="flex gap-2 border-2 border-teal-500">
            <p className="bg-black rounded-xs text-white">React</p>
            <p className="bg-black rounded-xs text-white">Angular</p>
          </div>
        </div>
        <div className="flex flex-col border-2 border-yellow-500">
          <p>DBs</p>
          <div className="flex gap-2 border-2 border-teal-500">
            <p className="bg-black rounded-xs text-white">SQL</p>
            <p className="bg-black rounded-xs text-white"> PostgreSQL</p>
            <p className="bg-black rounded-xs text-white">MS SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
