import {
  SiGithub,
  SiTwitter
} from 'react-icons/si'

export default function Index() {
  return (
    <>
      <div className="space-y-4">
        <div>
            <div className="flex items-center space-x-3">
              <a href="https://github.com/036" target="_blank">
                <SiGithub className="h-7 w-7" />
              </a>
              <a href="https://twitter.com/wreckitr0b" target="_blank">
                <SiTwitter className="h-7 w-7" />
              </a>
            </div>
          </div>
          <h1 className="font-bold text-3xl md:text-6xl sm:text-4xl">
            Hey, I'm <span className="text-blue-700 dark:text-white">Rob</span>✌️
          </h1>

          <p className="opacity-80">
            I'm a software engineer/SRE Engineer from the United Kingdom. 
            I'm interested in full stack development, automation, scalabale infrastructure and reverse engineering.
          </p>
      </div>
    </>
  )
}
