import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "CAN I USE THIS TOKEN TO GET CLOSER TO XEUS?",
    answer:
      "YES!! YOU CAN PURCHASE HIS NFT IF YOU'RE A HOLDER OF THIS TOKEN.",
  },
  {
    question: "HOW MUCH WILL I MAKE WITH THIS TOKEN?.",
    answer:
      "YOU CAN MAKE SO MUCH IF YOU DON'T SELL OFF EARLY.  ",
  },
  {

    question: "WHO IS XEUS?",

    answer:

      "XEUS IS A WEB3 TUTOR, A FINANCIAL FREEDOM ADVOCATE AND ONE OF THE MOST RESPECTED AND DECORATED WEB3 GURUS IN THE DEFI WORLD.",

  },
  {

    question: "HOW CAN I GET ACCESS TO NIRVANA ACADEMY?",

    answer:

      "YOU WILL HAVE TO WAIT FOR HIS NEXT CLASS WHICH WILL BE THE NEXT BIGGEST CLASS IN THE SPACE BEFORE YOU CAN JOIN THE NIRVANA ACADEMY.",

  },
  {

    question: "DOES THIS TOKEN HAVE UTILITY?",

    answer:

      "YES IT DOES!",

  },
  
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq() {
  return (
    <div className="bg-[#f0f8ff]" id="#Faq">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-blue-700 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-blue-700">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-blue-700">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
