import {
  EnvelopeIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { people } from "./people";

export default function Example() {
  return (
    <div className="tw-container py-8">
      <h3 className="max-w-2xl text-pretty font-semibold tracking-tight text-gray-900 text-4xl">
        Our Revit Experts
      </h3>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto size-32 shrink-0 rounded-full blur-sm"
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {person.name}
              </h3>
              <dl className="mt-1 flex grow flex-col justify-between">
                <dt className="sr-only">Title</dt>

                {person?.skills.map((skill) => {
                  return (
                    <dd className="mt-3 max-w-contain">
                      <span className="rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-grey-600 ring-1 ring-inset ring-yellow-600/20">
                        {skill}
                      </span>
                    </dd>
                  );
                })}
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:enquiry@bim.com.sg`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="size-5 text-gray-400"
                    />
                    Contact
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`/contact`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className="size-5 text-gray-400"
                    />
                    Profile
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
