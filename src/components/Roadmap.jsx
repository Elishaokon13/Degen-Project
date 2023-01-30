/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/outline'
  
  // In this section we are going to create a list of features that we want to display on our page.
  const features = [
    { name: 'Project Development', icon: CloudUploadIcon, description: '' },
    { name: 'Marketing Strategy Planning', icon: LockClosedIcon, description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' },
    { name: 'Website Development and Launch', icon: RefreshIcon, description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' },
    { name: 'Community Building', icon: ShieldCheckIcon, description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' },
    { name: 'Phase 1 Marketing', icon: CogIcon, description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' },
  ]
  
  export default function Roadmap() {
    return (
      <div className="relative bg-black py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-3xl font-extrabold text-[#91b738] tracking-tight sm:text-4xl uppercase">Our Roadmap</h2>
         {/* <p className="mt-2 text-base tracking-wider text-[#ddff8c]">
          Santa Inu is also about driving quality crypto investment education and innovative ways we can promote safety and investment security through SAFU project.
          </p> */}
          <p className="mt-5 max-w-prose mx-auto text-2xl text-[#91b738]">
          Phase 1 - Q4, 2023.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-[#d0e59f] rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-[#91b738] rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-black" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      {/* <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
