import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Accordion() {
  return (
    <div className="mx-auto w-[90%] lg:w-full pt-6">
      <div className="mx-auto w-full max-w-md rounded-2xl accordion p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className=" font-archivo font-semibold flex w-full justify-between rounded-lg px-4 py-2 text-left text-[1.5rem] lg:text-[1.75rem] text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Tell me your customer support?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white font-archivo ml-8`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-white font-inter">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-1">
          {({ open }) => (
            <>
              <Disclosure.Button className=" font-archivo font-semibold flex w-full justify-between rounded-lg px-4 py-2 text-left text-[1.5rem] lg:text-[1.75rem] text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What does your reporting look like?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white font-archivo `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-white font-inter">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-1">
          {({ open }) => (
            <>
              <Disclosure.Button className=" font-archivo font-semibold flex w-full justify-between rounded-lg px-4 py-2 text-left text-[1.5rem] lg:text-[1.75rem] text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What does training look like?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white font-archivo `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-white font-inter">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-1">
          {({ open }) => (
            <>
              <Disclosure.Button className=" font-archivo font-semibold flex w-full justify-between rounded-lg px-4 py-2 text-left text-[1.5rem] lg:text-[1.75rem] text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What does your reporting look like?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white font-archivo `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-white font-inter">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-1">
          {({ open }) => (
            <>
              <Disclosure.Button className=" font-archivo font-semibold flex w-full justify-between rounded-lg px-4 py-2 text-left text-[1.5rem] lg:text-[1.75rem] text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Is there any on-going training?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white font-archivo`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-white font-inter">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-1">
          {({ open }) => (
            <>
              <Disclosure.Button className=" font-archivo font-semibold flex w-full justify-between rounded-lg px-4 py-2 text-left text-[1.5rem] lg:text-[1.75rem] text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What if my clients have technical help?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white font-archivo `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-white font-inter">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
